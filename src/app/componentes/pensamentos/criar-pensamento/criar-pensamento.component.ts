import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { PensamentoService } from '../pensamento.service';
import { Pensamento } from '../pensamento/pensamento';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {
  pensamento: Pensamento = {

    conteudo: '',
    autoria: '',
    modelo: ''
    
  }

  constructor(
    private service: PensamentoService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }
  criarPensamento(){
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(["/listarPensamento"])
    })
  }
  cancelar(){
    this.router.navigate(["/listarPensamento"])
  }

}

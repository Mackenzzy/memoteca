import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from './pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {
  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: 'I love Angular',
    autoria: 'Lipe',
    modelo: 'modelo3'
  }
  constructor() { }
  

  ngOnInit(): void {
  }

//   larguraPensamento(): string {
//     if (this.pensamento.conteudo.length >= 256 && this.pensamento.conteudo.length <= 512){
//       return 'pensamento-g';
//     } else if (this.pensamento.conteudo.length >= 512){
//       return 'pensamento-gg';
//     }
//     return 'pensamento-p';    
//   }

larguraPensamento(): string {
  const length = this.pensamento.conteudo.length;
  if (length >= 512) {
    return 'pensamento-gg';
  } else if (length >= 256) {
    return 'pensamento-g';
  }
  return 'pensamento-p';    
}
}

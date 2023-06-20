import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() title: string = '';
  @Input() relato: string | string[] = '';
  @Input() imagem: string | undefined = '';
  @Input() id: number = 0;
  @Input() qualTipo: string = '';
  @Input() hasButton: boolean = false;
  @Input() hasImage: boolean = false;
  @Input() starNumber: number = 0;
  @Input() forkNumber: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.modificandoNome();
  }

  modificandoNome() {
    const nomeArray = Array.from(this.title);
    nomeArray[0] = nomeArray[0].toUpperCase();
    for(let i = 0; i < nomeArray.length; i++){
      if(nomeArray[i] === " "){
        i++;
        nomeArray[i] = nomeArray[i].toUpperCase();
      }
    }
    this.title = nomeArray.toString().split(',').join('');
  }

}

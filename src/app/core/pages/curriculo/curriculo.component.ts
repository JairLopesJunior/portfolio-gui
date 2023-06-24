import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculo',
  templateUrl: './curriculo.component.html',
  styleUrls: ['./curriculo.component.css']
})
export class CurriculoComponent implements OnInit {

  images = [
    "assets/download.jpeg",
    "assets/download.jpeg",
    "assets/download.jpeg",
    ];

  constructor() { }

  ngOnInit(): void {
  }

}

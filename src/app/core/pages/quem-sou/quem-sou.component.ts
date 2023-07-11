import { Component, OnInit } from '@angular/core';
import { ProgressBar } from 'src/app/models/progress-bar.model';

@Component({
  selector: 'app-quem-sou',
  templateUrl: './quem-sou.component.html',
  styleUrls: ['./quem-sou.component.css']
})
export class QuemSouComponent implements OnInit {

  progressBarItems: ProgressBar[] = [
    {
      titulo: 'JAVA',
      valuenow: 70
    },
    {
      titulo: 'JAVASCRIPT',
      valuenow: 66
    },
    {
      titulo: 'TYPESCRIPT',
      valuenow: 70
    },
    {
      titulo: 'SPRING BOOT',
      valuenow: 70
    },
    {
      titulo: 'MYSQL',
      valuenow: 50
    },
    {
      titulo: 'POSTGRESQL',
      valuenow: 50
    },
    {
      titulo: 'ANGULARJS',
      valuenow: 50
    },
    {
      titulo: 'ANGULAR2+',
      valuenow: 70
    },
    {
      titulo: 'RXJS',
      valuenow: 45
    }
  ];

  isShowText: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public isShowMostrarMais(): void {
    this.isShowText = true;
  }

  public isShowOcultar(): void {
    this.isShowText = false;
  }
}

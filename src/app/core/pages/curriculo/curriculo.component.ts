import { Component, OnInit } from '@angular/core';
import { Carousel } from 'src/app/models/carousel.model';

@Component({
  selector: 'app-curriculo',
  templateUrl: './curriculo.component.html',
  styleUrls: ['./curriculo.component.css']
})
export class CurriculoComponent implements OnInit {

  educationItems: Carousel[] = [
    {
      year: '2021 - 2024',
      course: 'DESENVOLVIMENTO DE SOFTWARE MULTIPLATAFORMA',
      institution: 'FATEC - ARARAS' 
    },
    {
      year: '2017 - 2020',
      course: 'SISTEMAS PARA INTERNET',
      institution: 'FATEC - ARARAS' 
    },
    {
      year: '2016 - 2017',
      course: 'INFORMÁTICA PARA INTERNET',
      institution: 'FATEC - ARARAS' 
    }
  ];

  experienceItems: Carousel[] = [
    {
      year: '2022 - ATUAL',
      company: 'COGNIZANT TECHNOLOGY SOLUTIONS',
      address: 'R. Jaceru, 151 - 3º andar - Vila Gertrudes, São Paulo - SP, 04705-903',
      office: 'PROGRAMADOR DE SOFTWARE'
    },
    {
      year: '2022 - 2022',
      company: 'ELOTECH GESTÃO PÚBLICA',
      address: 'R. Tupã, 1643 - Recanto dos Magnatas, Maringá - PR, 87060-510',
      office: 'PROGRAMADOR DE SISTEMA DA INFORMAÇÃO'
    },
    {
      year: '2021 - 2022',
      company: 'VR SOFTWARE',
      address: 'R. Cap. Gustavo Lauro Korte, 164 - Vila Nova Mazzei, São Paulo - SP, 02312-140',
      office: 'PROGRAMADOR WEB'
    },
    {
      year: '2018 - 2021',
      company: 'VARITUS BRASIL',
      address: 'R. Cel. André Ulson Júnior, 250 - 82 - Centro, Araras - SP, 13600-690',
      office: 'ESTÁGIO DE TI/PROGRAMADOR JAVA'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

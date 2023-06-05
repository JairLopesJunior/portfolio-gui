import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from '../core/pages/home/home.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    NavbarComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
          path: '', component: HomeComponent
      }
    ])
  ],
  exports: [
    NavbarComponent,
    CardComponent
  ]
})
export class SharedModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { QuemSouComponent } from './quem-sou/quem-sou.component';


@NgModule({
  declarations: [
    HomeComponent,
    PortfolioComponent,
    QuemSouComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    HomeComponent,
    PortfolioComponent
  ]
})
export class PagesModule { }
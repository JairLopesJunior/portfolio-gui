import { QuemSouComponent } from './../core/pages/quem-sou/quem-sou.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from '../core/pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { SocialNetworkLinkComponent } from './components/social-network-link/social-network-link.component';
import { PortfolioComponent } from '../core/pages/portfolio/portfolio.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { CurriculoComponent } from '../core/pages/curriculo/curriculo.component';
import { CarouselComponent } from './components/carousel/carousel.component';


@NgModule({
  declarations: [
    NavbarComponent,
    CardComponent,
    SocialNetworkLinkComponent,
    PaginationComponent,
    ProgressBarComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: HomeComponent
      },
      {
        path: 'quem-sou', component: QuemSouComponent
      },
      {
        path: 'curriculo', component: CurriculoComponent
      },
      {
        path: 'portfolio', component: PortfolioComponent
      }
    ])
  ],
  exports: [
    NavbarComponent,
    CardComponent,
    SocialNetworkLinkComponent,
    PaginationComponent,
    ProgressBarComponent,
    CarouselComponent
  ]
})
export class SharedModule { }
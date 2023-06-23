import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from '../core/pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { SocialNetworkLinkComponent } from './components/social-network-link/social-network-link.component';
import { PortfolioComponent } from '../core/pages/portfolio/portfolio.component';
import { PaginationComponent } from './components/pagination/pagination.component';


@NgModule({
  declarations: [
    NavbarComponent,
    CardComponent,
    SocialNetworkLinkComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: HomeComponent
      },
      {
        path: 'portfolio', component: PortfolioComponent
      }
    ])
  ],
  exports: [
    NavbarComponent,
    CardComponent,
    SocialNetworkLinkComponent
  ]
})
export class SharedModule { }
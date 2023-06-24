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
import { RepoService } from '../services/repo.service';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';


@NgModule({
  declarations: [
    NavbarComponent,
    CardComponent,
    SocialNetworkLinkComponent,
    PaginationComponent,
    ProgressBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: HomeComponent
      },
      {
        path: 'portfolio', component: PortfolioComponent
      },
      {
        path: 'quem-sou', component: QuemSouComponent
      }
    ])
  ],
  exports: [
    NavbarComponent,
    CardComponent,
    SocialNetworkLinkComponent,
    PaginationComponent
  ]
})
export class SharedModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from '../core/pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { SocialNetworkLinkComponent } from './components/social-network-link/social-network-link.component';


@NgModule({
  declarations: [
    NavbarComponent,
    CardComponent,
    SocialNetworkLinkComponent
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
    CardComponent,
    SocialNetworkLinkComponent
  ]
})
export class SharedModule { }
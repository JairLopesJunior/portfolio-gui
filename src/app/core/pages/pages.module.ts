import { NgxLoadingModule } from 'ngx-loading';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { QuemSouComponent } from './quem-sou/quem-sou.component';
import { CurriculoComponent } from './curriculo/curriculo.component';
import { ContatoComponent } from './contato/contato.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    PortfolioComponent,
    QuemSouComponent,
    CurriculoComponent,
    ContatoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    NgxLoadingModule.forRoot({}),
  ],
  exports: [
    HomeComponent,
    PortfolioComponent,
    QuemSouComponent,
    CurriculoComponent,
    ContatoComponent
  ]
})
export class PagesModule { }
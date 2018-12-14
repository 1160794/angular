import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoDetailsComponent } from './produto-details/produto-details.component';
import { MaterialComponent } from './material/material.component';
import { AcabamentoComponent } from './acabamento/acabamento.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { HttpClientModule } from '@angular/common/http';  // <-Add here
import { FormsModule } from '@angular/forms';
import { MaterialDetailsComponent } from './material-details/material-details.component';
import { AcabamentoDetailsComponent } from './acabamento-details/acabamento-details.component';
import { CategoriaDetailsComponent } from './categoria-details/categoria-details.component';
import { EncomendaDetailsComponent } from './encomenda-details/encomenda-details.component';
import { EncomendaComponent } from './encomenda/encomenda.component';   // <-Add here


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ProdutoComponent,
    ProdutoDetailsComponent,
    MaterialComponent,
    AcabamentoComponent,
    CategoriaComponent,
    MaterialDetailsComponent,
    AcabamentoDetailsComponent,
    CategoriaDetailsComponent,
    EncomendaDetailsComponent,
    EncomendaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

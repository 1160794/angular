import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoDetailsComponent } from './produto-details/produto-details.component';
import { MaterialDetailsComponent } from './material-details/material-details.component';
import { AcabamentoDetailsComponent } from './acabamento-details/acabamento-details.component';
import { CategoriaDetailsComponent } from './categoria-details/categoria-details.component';
import { EncomendaDetailsComponent } from './encomenda-details/encomenda-details.component';


import { ProdutoComponent } from './produto/produto.component';
import { MaterialComponent } from './material/material.component';
import { AcabamentoComponent } from './acabamento/acabamento.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { EncomendaComponent } from './encomenda/encomenda.component';

const routes: Routes = [
  {
    path: '',
    component: ProdutoComponent
  },
  {
    path: 'produto-details/:id',
    component: ProdutoDetailsComponent
  },
  {
    path: 'produto-details/novo',
    component: ProdutoDetailsComponent
  },
  {
    path: 'material',
    component: MaterialComponent
  },
  {
    path: 'material-details/:id',
    component: MaterialDetailsComponent
  },
  {
    path: 'acabamento',
    component: AcabamentoComponent
  },
  {
    path: 'acabamento-details/:id',
    component: AcabamentoDetailsComponent
  },
  {
    path: 'acabamento-details/novo',
    component: AcabamentoDetailsComponent
  },
  {
    path: 'categoria',
    component: CategoriaComponent
  },
  {
    path: 'categoria-details/:id',
    component: CategoriaDetailsComponent
  },
  {
    path: 'categoria-details/novo',
    component: CategoriaDetailsComponent
  },
  {
    path: 'encomenda',
    component: EncomendaComponent
  },
  {
    path: 'encomenda-details/:id',
    component: EncomendaDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

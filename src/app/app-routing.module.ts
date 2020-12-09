import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteCadastroComponent } from './components/cliente/cliente-cadastro/cliente-cadastro.component';
import { ClienteListaComponent } from './components/cliente/cliente-lista/cliente-lista.component';
import { FornecedorCadastroComponent } from './components/fornecedor/fornecedor-cadastro/fornecedor-cadastro.component';
import { FornecedorListaComponent } from './components/fornecedor/fornecedor-lista/fornecedor-lista.component';

const routes: Routes = [
  {
    path: 'cadastro',
    children: [
               {
                 path: 'cliente',
                 component: ClienteCadastroComponent
               }
              ]
  },
  {
   path: 'lista',
   children: [
              {
                path: 'cliente',
                component: ClienteListaComponent
              }
             ]
  },
  {
    path: 'cadastro',
    children: [
               {
                 path: 'fornecedor',
                 component: FornecedorCadastroComponent
               }
              ]
   },
   {
    path: 'lista',
    children: [
               {
                 path: 'fornecedor',
                 component: FornecedorListaComponent
               }
              ]
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

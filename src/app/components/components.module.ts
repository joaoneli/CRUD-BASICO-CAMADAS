import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../angular-material.module';
import { ClienteCadastroComponent } from './cliente/cliente-cadastro/cliente-cadastro.component';
import { ClienteEditarDialogComponent } from './cliente/cliente-lista/cliente-editar-dialog/cliente-editar-dialog.component';
import { ClienteListaComponent } from './cliente/cliente-lista/cliente-lista.component';
import { ClienteComponent } from './cliente/cliente.component';
import { YesNoDialogComponent } from './shared/yes-no-dialog/yes-no-dialog.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { FornecedorCadastroComponent } from './fornecedor/fornecedor-cadastro/fornecedor-cadastro.component';
import { FornecedorListaComponent } from './fornecedor/fornecedor-lista/fornecedor-lista.component';
import { FornecedorEditarDialogComponent } from './fornecedor/fornecedor-lista/fornecedor-editar-dialog/fornecedor-editar-dialog.component';

@NgModule({
  declarations: [
    ClienteComponent,
    ClienteCadastroComponent,
    ClienteListaComponent,
    YesNoDialogComponent,
    YesNoDialogComponent,
    ClienteEditarDialogComponent,
    FornecedorComponent,
    FornecedorCadastroComponent,
    FornecedorListaComponent,
    FornecedorEditarDialogComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class ComponentsModule {}
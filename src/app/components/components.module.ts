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

@NgModule({
  declarations: [
    ClienteComponent,
    ClienteCadastroComponent,
    ClienteListaComponent,
    YesNoDialogComponent,
    YesNoDialogComponent,
    ClienteEditarDialogComponent
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
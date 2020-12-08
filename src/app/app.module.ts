import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MenuComponent } from './toolbar/menu/menu.component';
import { ComponentsModule } from './components/components.module';
import { YesNoDialogComponent } from './components/shared/yes-no-dialog/yes-no-dialog.component';
import { ClienteEditarDialogComponent } from './components/cliente/cliente-lista/cliente-editar-dialog/cliente-editar-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ComponentsModule
  ],
  providers: [],
  entryComponents: [
    YesNoDialogComponent,
    ClienteEditarDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

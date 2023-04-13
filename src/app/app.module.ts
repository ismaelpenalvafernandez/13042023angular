import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Calcular1Component } from './calcular1/calcular1.component';
import { FormsModule } from '@angular/forms';
import { CalcularDivisasComponent } from './calcular-divisas/calcular-divisas.component';
import { DatosCompraComponent } from './datos-compra/datos-compra.component';

@NgModule({
  declarations: [
    AppComponent,
    Calcular1Component,
    CalcularDivisasComponent,
    DatosCompraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

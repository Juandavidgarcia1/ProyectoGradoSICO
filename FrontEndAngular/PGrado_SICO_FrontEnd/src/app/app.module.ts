import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// external
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListaProductosComponent } from './producto-crud/lista-productos/lista-productos.component';
import { RegistrarProductoComponent } from './producto-crud/registrar-producto/registrar-producto.component';
import { ActualizarProductoComponent } from './producto-crud/actualizar-producto/actualizar-producto.component';
import { DetallesProductoComponent } from './producto-crud/detalles-producto/detalles-producto.component';
import { interceptorProvider } from './interceptors/prod-interceptor.service';

import { ListaBodegasComponent } from './bodega-crud/lista-bodegas/lista-bodegas.component';
import { RegistrarBodegaComponent } from './bodega-crud/registrar-bodega/registrar-bodega.component';
import { ActualizarBodegaComponent } from './bodega-crud/actualizar-bodega/actualizar-bodega.component';
import { DetallesBodegaComponent } from './bodega-crud/detalles-bodega/detalles-bodega.component';
import  { ListaTercerosComponent } from './tercero-crud/lista-terceros/lista-terceros.component';
import { RegistrarTerceroComponent } from './tercero-crud/registrar-tercero/registrar-tercero.component';
import { ActualizarTerceroComponent } from './tercero-crud/actualizar-tercero/actualizar-tercero.component';
import { DetallesTerceroComponent } from './tercero-crud/detalles-tercero/detalles-tercero.component';
import { ListaMovimientosComponent } from './movimiento-trx/lista-movimientos/lista-movimientos.component';
import { RegistrarMovimientoComponent } from './movimiento-trx/registrar-movimiento/registrar-movimiento.component';
import { ActualizarMovimientoComponent } from './movimiento-trx/actualizar-movimiento/actualizar-movimiento.component';
import { DetallesMovimientoComponent } from './movimiento-trx/detalles-movimiento/detalles-movimiento.component';
//Existencias
import { ListaExistenciasComponent } from './existencia-query/lista-existencias/lista-existencias.component';

// external
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProductosComponent,
    RegistrarProductoComponent,
    ActualizarProductoComponent,
    DetallesProductoComponent,
    ListaBodegasComponent,
    RegistrarBodegaComponent,
    ActualizarBodegaComponent,
    DetallesBodegaComponent,
    ListaTercerosComponent,
    RegistrarTerceroComponent,
    ActualizarTerceroComponent,
    DetallesTerceroComponent,
    ListaMovimientosComponent,
    RegistrarMovimientoComponent,
    ActualizarMovimientoComponent,
    DetallesMovimientoComponent,
    ListaExistenciasComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [interceptorProvider],

  bootstrap: [AppComponent]
})
export class AppModule { }

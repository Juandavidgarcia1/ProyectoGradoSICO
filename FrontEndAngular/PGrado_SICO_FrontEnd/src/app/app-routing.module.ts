import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductosComponent } from './producto-crud/lista-productos/lista-productos.component';
import { RegistrarProductoComponent } from './producto-crud/registrar-producto/registrar-producto.component';
import { ActualizarProductoComponent } from './producto-crud/actualizar-producto/actualizar-producto.component';
import { DetallesProductoComponent } from './producto-crud/detalles-producto/detalles-producto.component';
import { ListaBodegasComponent } from './bodega-crud/lista-bodegas/lista-bodegas.component';
import { RegistrarBodegaComponent } from './bodega-crud/registrar-bodega/registrar-bodega.component';
import { ActualizarBodegaComponent } from './bodega-crud/actualizar-bodega/actualizar-bodega.component';
import { DetallesBodegaComponent } from './bodega-crud/detalles-bodega/detalles-bodega.component';
import { ListaTercerosComponent } from './tercero-crud/lista-terceros/lista-terceros.component';
import { RegistrarTerceroComponent } from './tercero-crud/registrar-tercero/registrar-tercero.component';
import { ActualizarTerceroComponent } from './tercero-crud/actualizar-tercero/actualizar-tercero.component';
import { DetallesTerceroComponent } from './tercero-crud/detalles-tercero/detalles-tercero.component';
import { ListaMovimientosComponent } from './movimiento-trx/lista-movimientos/lista-movimientos.component';
import { RegistrarMovimientoComponent } from './movimiento-trx/registrar-movimiento/registrar-movimiento.component';
import { ActualizarMovimientoComponent } from './movimiento-trx/actualizar-movimiento/actualizar-movimiento.component';
import { DetallesMovimientoComponent } from './movimiento-trx/detalles-movimiento/detalles-movimiento.component';
import { MenuComponent } from './menu/menu.component';


import { AuthGaurdService } from './service/auth-gaurd.service';

const routes: Routes = [
  { path: 'productos', component: ListaProductosComponent ,canActivate:[AuthGaurdService] },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'registrar-producto', component:RegistrarProductoComponent,canActivate:[AuthGaurdService] },
  { path: 'actualizar-producto/:id', component: ActualizarProductoComponent,canActivate:[AuthGaurdService] },
  { path: 'detalles-producto/:id', component: DetallesProductoComponent,canActivate:[AuthGaurdService] },
  { path: 'bodegas', component: ListaBodegasComponent ,canActivate:[AuthGaurdService]},
  { path: '', redirectTo: 'bodegas', pathMatch: 'full' },
  { path: 'registrar-bodega', component:RegistrarBodegaComponent  ,canActivate:[AuthGaurdService]},
  { path: 'actualizar-bodega/:id', component: ActualizarBodegaComponent  ,canActivate:[AuthGaurdService]},
  { path: 'detalles-bodega/:id', component: DetallesBodegaComponent  ,canActivate:[AuthGaurdService]},
  { path: 'terceros', component: ListaTercerosComponent  ,canActivate:[AuthGaurdService]},
  { path: '', redirectTo: 'terceros', pathMatch: 'full' },
  { path: 'registrar-tercero', component:RegistrarTerceroComponent  ,canActivate:[AuthGaurdService]},
  { path: 'actualizar-tercero/:id', component: ActualizarTerceroComponent ,canActivate:[AuthGaurdService] },
  { path: 'detalles-tercero/:id', component: DetallesTerceroComponent  ,canActivate:[AuthGaurdService]},
  { path: 'movimientos', component: ListaMovimientosComponent ,canActivate:[AuthGaurdService] },
  { path: '', redirectTo: 'movimientos', pathMatch: 'full' },
  { path: 'registrar-movimiento', component:RegistrarMovimientoComponent ,canActivate:[AuthGaurdService] },
  { path: 'actualizar-movimiento/:id', component: ActualizarMovimientoComponent  ,canActivate:[AuthGaurdService]},
  { path: 'detalles-movimiento/:id', component: DetallesMovimientoComponent ,canActivate:[AuthGaurdService] },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

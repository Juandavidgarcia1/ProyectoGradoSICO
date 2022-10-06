import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//////////////////////////////////////Productos////////////////////////////////////
import { ListaProductosComponent } from './producto-crud/lista-productos/lista-productos.component';
import { RegistrarProductoComponent } from './producto-crud/registrar-producto/registrar-producto.component';
import { ActualizarProductoComponent } from './producto-crud/actualizar-producto/actualizar-producto.component';
import { DetallesProductoComponent } from './producto-crud/detalles-producto/detalles-producto.component';
//////////////////////////////////////Bodegas////////////////////////////////////
import { ListaBodegasComponent } from './bodega-crud/lista-bodegas/lista-bodegas.component';
import { RegistrarBodegaComponent } from './bodega-crud/registrar-bodega/registrar-bodega.component';
import { ActualizarBodegaComponent } from './bodega-crud/actualizar-bodega/actualizar-bodega.component';
import { DetallesBodegaComponent } from './bodega-crud/detalles-bodega/detalles-bodega.component';
//////////////////////////////////////Terceros////////////////////////////////////
import { ListaTercerosComponent } from './tercero-crud/lista-terceros/lista-terceros.component';
import { RegistrarTerceroComponent } from './tercero-crud/registrar-tercero/registrar-tercero.component';
import { ActualizarTerceroComponent } from './tercero-crud/actualizar-tercero/actualizar-tercero.component';
import { DetallesTerceroComponent } from './tercero-crud/detalles-tercero/detalles-tercero.component';
//////////////////////////////////////Movimientos////////////////////////////////////
import { ListaMovimientosComponent } from './movimiento-trx/lista-movimientos/lista-movimientos.component';
import { RegistrarMovimientoComponent } from './movimiento-trx/registrar-movimiento/registrar-movimiento.component';
import { ActualizarMovimientoComponent } from './movimiento-trx/actualizar-movimiento/actualizar-movimiento.component';
import { DetallesMovimientoComponent } from './movimiento-trx/detalles-movimiento/detalles-movimiento.component';
//////////////////////////////////////Login////////////////////////////////////
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { IndexComponent } from './index/index.component';
import { ProdGuardService as guard } from './producto-crud/guards/prod-guard.service';
import { AuthGaurdService } from './service/auth-gaurd.service';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'productos', component: ListaProductosComponent ,canActivate:[guard], data: { expectedRol: ['admin', 'user'] }},
  { path: 'detalles-producto/:id', component: DetallesProductoComponent,canActivate:[guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'registrar-producto', component:RegistrarProductoComponent,canActivate:[guard], data: { expectedRol: ['admin'] }},
  { path: 'actualizar-producto/:id', component: ActualizarProductoComponent,canActivate:[guard], data: { expectedRol: ['admin'] }},

  { path: 'bodegas', component: ListaBodegasComponent ,canActivate:[guard], data: { expectedRol: ['admin', 'user'] }},
 // { path: '', redirectTo: 'bodegas', pathMatch: 'full' },
  { path: 'registrar-bodega', component:RegistrarBodegaComponent  ,canActivate:[guard], data: { expectedRol: ['admin'] }},
  { path: 'actualizar-bodega/:id', component: ActualizarBodegaComponent  ,canActivate:[guard], data: { expectedRol: ['admin'] }},
  { path: 'detalles-bodega/:id', component: DetallesBodegaComponent  ,canActivate:[guard], data: { expectedRol: ['admin', 'user'] }},

  { path: 'terceros', component: ListaTercerosComponent  ,canActivate:[guard], data: { expectedRol: ['admin', 'user'] }},
  //{ path: '', redirectTo: 'terceros', pathMatch: 'full' },
  { path: 'registrar-tercero', component:RegistrarTerceroComponent  ,canActivate:[guard], data: { expectedRol: ['admin'] }},
  { path: 'actualizar-tercero/:id', component: ActualizarTerceroComponent ,canActivate:[guard], data: { expectedRol: ['admin'] }},
  { path: 'detalles-tercero/:id', component: DetallesTerceroComponent  ,canActivate:[guard], data: { expectedRol: ['admin', 'user'] }},

  { path: 'movimientos', component: ListaMovimientosComponent ,canActivate:[guard], data: { expectedRol: ['admin', 'user'] }},
  //{ path: '', redirectTo: 'movimientos', pathMatch: 'full' },
  { path: 'registrar-movimiento', component:RegistrarMovimientoComponent,canActivate:[guard], data: { expectedRol: ['admin'] }},
  { path: 'actualizar-movimiento/:id', component: ActualizarMovimientoComponent  ,canActivate:[guard], data: { expectedRol: ['admin']}},
  { path: 'detalles-movimiento/:id', component: DetallesMovimientoComponent ,canActivate:[guard], data: { expectedRol: ['admin', 'user'] }},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 // providers: [interceptorProvider], //Se incluye en versión 2
  exports: [RouterModule]
})
export class AppRoutingModule { }

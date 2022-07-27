import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movimiento } from './movimiento';
import { HttpClient } from '@angular/common/http';
import { Bodega } from '../bodega-crud/bodega';
import { Naturaleza } from './naturaleza';
import { Producto } from '../producto-crud/producto';
import { Tercero } from '../tercero-crud/tercero';
@Injectable({
  providedIn: 'root'
})
export class MovimientoService {

  //Url contiene todos los movimientos de la base de datos.
  private baseURL = "http://localhost:8080/api/v1/movimientos";
  //Url que contiene todas las bodegas con el fin de hacer el dropdownlist
  private baseURLBodega = "http://localhost:8080/api/v1/bodegas";
 //Url que contiene todas las naturalezas con el fin de hacer el dropdownlist
 private baseURLNaturaleza = "http://localhost:8080/api/v1/naturalezas";
 //Url que contiene todas los productos con el fin de hacer el dropdownlist
 private baseURLProductos = "http://localhost:8080/api/v1/productos";
  //Url que contiene todas las naturalezas con el fin de hacer el dropdownlist
  private baseURLTerceros = "http://localhost:8080/api/v1/terceros";

  constructor(private httpClient: HttpClient) { }

  //Este metodo, nos sirve para obtener los movimientos (un observable es un patr0n de diseño)
  obtenerListaMovimientos(): Observable<Movimiento[]> {
    return this.httpClient.get<Movimiento[]>(`${this.baseURL}`);
  }

  //Este metodo, nos sirve para registrar un movimiento
  registrarMovimiento(movimiento: Movimiento): Observable<object> {
    return this.httpClient.post(`${this.baseURL}`, movimiento);
  }

//Este metodo, nos sirve para registrar un movimiento
actualizarMovimiento(id:number,movimiento: Movimiento): Observable<object> {
  return this.httpClient.put(`${this.baseURL}/${id}`, movimiento);
}

 //este metodo sirve para obtener o buscar un movimiento
 obtenerMovimientoPorId(id:number):Observable<Movimiento>{
  return this.httpClient.get<Movimiento>(`${this.baseURL}/${id}`);
}

//Este metodo, nos sirve para eliminar un movimiento
eliminarMovimiento(id:number): Observable<object> {
  return this.httpClient.delete(`${this.baseURL}/${id}`);
}

  //Este metodo, nos sirve para obtener las bodegas (un observable es un patr0n de diseño)
  obtenerListaBodegas(): Observable<Bodega[]> {
    return this.httpClient.get<Bodega[]>(`${this.baseURLBodega}`);
  }

  //Este metodo, nos sirve para obtener las bodegas (un observable es un patr0n de diseño)
  obtenerListaNaturalezas(): Observable<Naturaleza[]> {
    return this.httpClient.get<Naturaleza[]>(`${this.baseURLNaturaleza}`);
  }

  //Este metodo, nos sirve para obtener los productos (un observable es un patr0n de diseño)
  obtenerListaProductos(): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(`${this.baseURLProductos}`);
  }

    //Este metodo, nos sirve para obtener los (un observable es un patr0n de diseño)
    obtenerListaTerceros(): Observable<Tercero[]> {
      return this.httpClient.get<Tercero[]>(`${this.baseURLTerceros}`);
    }


}

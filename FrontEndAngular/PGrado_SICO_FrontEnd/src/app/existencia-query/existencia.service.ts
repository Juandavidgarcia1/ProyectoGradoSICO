import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Existencia } from './existencia';
import { HttpClient } from '@angular/common/http';
import { Bodega } from '../bodega-crud/bodega';
import { Producto } from '../producto-crud/producto';

@Injectable({
  providedIn: 'root'
})
export class ExistenciaService {

  //Url contiene todos los existencias de la base de datos.
  private baseURL = "http://localhost:8080/api/v1/existencias";
  //Url que contiene todas las bodegas con el fin de hacer el dropdownlist
  private baseURLBodega = "http://localhost:8080/api/v1/bodegas/listaBodegas";
 //Url que contiene todas los productos con el fin de hacer el dropdownlist
 private baseURLProductos = "http://localhost:8080/api/v1/productos/lista";

  constructor(private httpClient: HttpClient) { }


  //Este metodo, nos sirve para obtener los existencias (un observable es un patr0n de diseño)
  obtenerListaExistencias(): Observable<Existencia[]> {
    return this.httpClient.get<Existencia[]>(`${this.baseURL}`);
  }

 //este metodo sirve para obtener o buscar un existencia
 obtenerExistenciaPorId(id:number):Observable<Existencia>{
  return this.httpClient.get<Existencia>(`${this.baseURL}/${id}`);
}

  //Este metodo, nos sirve para obtener las bodegas (un observable es un patr0n de diseño)
  obtenerListaBodegas(): Observable<Bodega[]> {
    return this.httpClient.get<Bodega[]>(`${this.baseURLBodega}`);
  }

  //Este metodo, nos sirve para obtener los productos (un observable es un patr0n de diseño)
  obtenerListaProductos(): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(`${this.baseURLProductos}`);
  }

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './producto';
import { HttpClient } from '@angular/common/http';
import { Movimiento } from '../movimiento-trx/movimiento';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  //Url contiene todos los productos de la base de datos.
  private baseURL = "http://localhost:8080/api/v1/productos/";
  //Url contiene todos los movimientos de la base de datos.
  private baseURLMovto = "http://localhost:8080/api/v1/movimientos";

  constructor(private httpClient: HttpClient) { }

  //Este metodo, nos sirve para obtener los productos (un observable es un patr0n de diseño)
  obtenerListaProductos(): Observable<Producto[]> {

    // return this.httpClient.get<Producto[]>(this.baseURL );
    return this.httpClient.get<Producto[]>(this.baseURL + 'lista');
  }

  //este metodo sirve para obtener o buscar un producto
  obtenerProductoPorId(id:number):Observable<Producto>{
    return this.httpClient.get<Producto>(`${this.baseURL}detail/${id}`);
  }

  //este metodo sirve para obtener o buscar un producto
  obtenerProductoPorDescripcion(descripcion:string):Observable<Producto>{
    return this.httpClient.get<Producto>(`${this.baseURL}detaildescripcion/${descripcion}`);
  }

  //Este metodo, nos sirve para registrar un producto
  registrarProducto(producto: Producto): Observable<object> {
    return this.httpClient.post(this.baseURL + 'create', producto);
  }

  //Este metodo, nos sirve para registrar un producto
  actualizarProducto(id:number,producto: Producto): Observable<object> {
    return this.httpClient.put(`${this.baseURL}update/${id}`, producto);
  }

  //Este metodo, nos sirve para eliminar un producto
  eliminarProducto(id:number): Observable<object> {
    return this.httpClient.delete(`${this.baseURL}delete/${id}`);
  }

  //Este metodo, nos sirve para obtener las bodegas (un observable es un patr0n de diseño)
  obtenerListaMovtos(): Observable<Movimiento[]> {
    return this.httpClient.get<Movimiento[]>(`${this.baseURLMovto}`);
  }

}

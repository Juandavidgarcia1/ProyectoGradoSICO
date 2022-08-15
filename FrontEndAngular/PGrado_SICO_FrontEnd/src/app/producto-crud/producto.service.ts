import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './producto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  //Url contiene todos los productos de la base de datos.
  private baseURL = "http://localhost:8080/api/v1/productos/";

  constructor(private httpClient: HttpClient) { }

  //Este metodo, nos sirve para obtener los productos (un observable es un patr0n de diseño)
  obtenerListaProductos(): Observable<Producto[]> {
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

}

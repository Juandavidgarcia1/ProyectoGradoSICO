import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bodega } from './bodega';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BodegaService {

  //Url contiene todos los bodegas de la base de datos.
  private baseURL = "http://localhost:8080/api/v1/bodegas";
  //Url contiene todos los bodegas de la base de datos.
  private baseURLCompania = "http://localhost:8080/api/v1/companias";

  //obtenerListaCompanias
  constructor(private httpClient: HttpClient) { }

  //Este metodo, nos sirve para obtener los bodegas (un observable es un patr0n de diseño)
  obtenerListaBodegas(): Observable<Bodega[]> {
    return this.httpClient.get<Bodega[]>(`${this.baseURL}`);
  }

  //Este metodo, nos sirve para registrar un bodega
  registrarBodega(bodega: Bodega): Observable<object> {
    return this.httpClient.post(`${this.baseURL}`, bodega);
  }

//Este metodo, nos sirve para registrar un bodega
actualizarBodega(id:number,bodega: Bodega): Observable<object> {
  return this.httpClient.put(`${this.baseURL}/${id}`, bodega);
}

 //este metodo sirve para obtener o buscar un bodega
 obtenerBodegaPorId(id:number):Observable<Bodega>{
  return this.httpClient.get<Bodega>(`${this.baseURL}/${id}`);
}

//Este metodo, nos sirve para eliminar un bodega
eliminarBodega(id:number): Observable<object> {
  return this.httpClient.delete(`${this.baseURL}/${id}`);
}

//Este metodo, nos sirve para obtener los companias
  obtenerListaCompanias(): Observable<Bodega[]> {
    return this.httpClient.get<Bodega[]>(`${this.baseURLCompania}`);
  }
}

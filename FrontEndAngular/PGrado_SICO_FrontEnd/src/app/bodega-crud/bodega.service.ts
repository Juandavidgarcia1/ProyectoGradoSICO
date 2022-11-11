import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bodega } from './bodega';
import { HttpClient } from '@angular/common/http';
import { Compania } from '../bodega-crud/compania';

@Injectable({
  providedIn: 'root'
})
export class BodegaService {

  //Url contiene todos los bodegas de la base de datos.
  private baseURL = "http://localhost:8080/api/v1/bodegas/";
  //Url contiene todos los bodegas de la base de datos.
  private baseURLCompania = "http://localhost:8080/api/v1/companias";

  //obtenerListaCompanias
  constructor(private httpClient: HttpClient) { }

  //Este metodo, nos sirve para obtener los bodegas (un observable es un patr0n de diseño)
  //Este metodo, nos sirve para obtener los bodegas (un observable es un patr0n de diseño)
  obtenerListaBodegas(): Observable<Bodega[]> {
    // return this.httpClient.get<Bodega[]>(this.baseURL );
    return this.httpClient.get<Bodega[]>(this.baseURL + 'listaBodegas');
  }

  //este metodo sirve para obtener o buscar un bodega
  obtenerBodegaPorId(id:number):Observable<Bodega>{
    return this.httpClient.get<Bodega>(`${this.baseURL}detailBodega/${id}`);
  }

  //este metodo sirve para obtener o buscar un bodega
  obtenerBodegaPorDescripcion(descripcion:string):Observable<Bodega>{
    return this.httpClient.get<Bodega>(`${this.baseURL}detaildescripcionBodega/${descripcion}`);
  }

  //Este metodo, nos sirve para registrar un bodega
  registrarBodega(bodega: Bodega): Observable<object> {
    return this.httpClient.post(this.baseURL + 'createBodega', bodega);
  }

  //Este metodo, nos sirve para registrar un bodega
  actualizarBodega(id:number,bodega: Bodega): Observable<object> {
    return this.httpClient.put(`${this.baseURL}updateBodega/${id}`, bodega);
  }

  //Este metodo, nos sirve para eliminar un bodega, se cambio  Observable<object> por  Observable<any>
  eliminarBodega(id:number): Observable<any> {
    //return this.httpClient.delete(`${this.baseURL}delete/${id}`);
    return this.httpClient.delete<any>(this.baseURL + `deleteBodega/${id}`);
  }

//Este metodo, nos sirve para obtener los companias
  obtenerListaCompanias(): Observable<Compania[]> {
    return this.httpClient.get<Compania[]>(`${this.baseURLCompania}`);
  }

}

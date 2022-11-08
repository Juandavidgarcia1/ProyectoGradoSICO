import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tercero } from './tercero';
import { HttpClient } from '@angular/common/http';
import { TipoTercero } from './tipoTercero';

@Injectable({
  providedIn: 'root'
})
export class TerceroService {

  //Url contiene todos los terceros de la base de datos.
  private baseURL = "http://localhost:8080/api/v1/terceros/";
  //Url contiene todos los terceros de la base de datos.
  private baseURLTipoTercero = "http://localhost:8080/api/v1/TipoTerceros";

  constructor(private httpClient: HttpClient) { }

 //Este metodo, nos sirve para obtener los terceros (un observable es un patr0n de diseño)
 obtenerListaTerceros(): Observable<Tercero[]> {
  // return this.httpClient.get<Tercero[]>(this.baseURL );
  return this.httpClient.get<Tercero[]>(this.baseURL + 'listaTerceros');
}

//este metodo sirve para obtener o buscar un tercero
obtenerTerceroPorId(id:number):Observable<Tercero>{
  return this.httpClient.get<Tercero>(`${this.baseURL}detailTercero/${id}`);
}

//este metodo sirve para obtener o buscar un tercero
obtenerTerceroPorDescripcion(descripcion:string):Observable<Tercero>{
  return this.httpClient.get<Tercero>(`${this.baseURL}detaildescripcionTercero/${descripcion}`);
}

//Este metodo, nos sirve para registrar un tercero
registrarTercero(tercero: Tercero): Observable<object> {
  return this.httpClient.post(this.baseURL + 'createTercero', tercero);
}

//Este metodo, nos sirve para registrar un tercero
actualizarTercero(id:number,tercero: Tercero): Observable<object> {
  return this.httpClient.put(`${this.baseURL}updateTercero/${id}`, tercero);
}

//Este metodo, nos sirve para eliminar un tercero, se cambio  Observable<object> por  Observable<any>
eliminarTercero(id:number): Observable<any> {
  //return this.httpClient.delete(`${this.baseURL}delete/${id}`);
  return this.httpClient.delete<any>(this.baseURL + `deleteTercero/${id}`);
}
 //Este metodo, nos sirve para obtener los baseURLTipoTercero
obtenerTiposTercero(): Observable<TipoTercero[]> {
  return this.httpClient.get<TipoTercero[]>(`${this.baseURLTipoTercero}`);
}

}

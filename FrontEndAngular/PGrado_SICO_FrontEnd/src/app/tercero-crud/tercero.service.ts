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
  private baseURL = "http://localhost:8080/api/v1/terceros";
  //Url contiene todos los terceros de la base de datos.
  private baseURLTipoTercero = "http://localhost:8080/api/v1/TipoTerceros";

  constructor(private httpClient: HttpClient) { }

  //Este metodo, nos sirve para obtener los terceros (un observable es un patr0n de diseño)
  obtenerListaTerceros(): Observable<Tercero[]> {
    return this.httpClient.get<Tercero[]>(`${this.baseURL}`);
  }

  //Este metodo, nos sirve para registrar un tercero
  registrarTercero(tercero: Tercero): Observable<object> {
    return this.httpClient.post(`${this.baseURL}`, tercero);
  }

//Este metodo, nos sirve para registrar un tercero
actualizarTercero(id:number,tercero: Tercero): Observable<object> {
  return this.httpClient.put(`${this.baseURL}/${id}`, tercero);
}

 //este metodo sirve para obtener o buscar un tercero
 obtenerTerceroPorId(id:number):Observable<Tercero>{
  return this.httpClient.get<Tercero>(`${this.baseURL}/${id}`);
}

//Este metodo, nos sirve para eliminar un tercero
eliminarTercero(id:number): Observable<object> {
  return this.httpClient.delete(`${this.baseURL}/${id}`);
}

 //Este metodo, nos sirve para obtener los baseURLTipoTercero
obtenerTiposTercero(): Observable<TipoTercero[]> {
  return this.httpClient.get<TipoTercero[]>(`${this.baseURLTipoTercero}`);
}

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  //Url contiene todos los usuarios de la base de datos.
  private baseURL = "http://localhost:8080/api/v1/usuarios";

  //obtenerListaCompanias
  constructor(private httpClient: HttpClient) { }

  //Este metodo, nos sirve para obtener los usuarios (un observable es un patr0n de diseño)
  obtenerListaUsuarios(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(`${this.baseURL}`);
  }

  //Este metodo, nos sirve para registrar un usuario
  registrarUsuario(usuario: Usuario): Observable<object> {
    return this.httpClient.post(`${this.baseURL}`, usuario);
  }

//Este metodo, nos sirve para registrar un usuario
actualizarUsuario(id:number,usuario: Usuario): Observable<object> {
  return this.httpClient.put(`${this.baseURL}/${id}`, usuario);
}

 //este metodo sirve para obtener o buscar un usuario
 obtenerUsuarioPorId(id:number):Observable<Usuario>{
  return this.httpClient.get<Usuario>(`${this.baseURL}/${id}`);
}

//Este metodo, nos sirve para eliminar un usuario
eliminarUsuario(id:number): Observable<object> {
  return this.httpClient.delete(`${this.baseURL}/${id}`);
}

}

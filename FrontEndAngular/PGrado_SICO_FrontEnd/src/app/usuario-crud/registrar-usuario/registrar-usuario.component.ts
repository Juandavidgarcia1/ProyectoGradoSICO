import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario();

  companias:any;// lista de companias
  compania:number;// lista de companias

  constructor(private usuarioServicio: UsuarioService, private router : Router) { }

  ngOnInit(): void {
    //console.log(this.usuario);
    //this.obtenerCompanias()
  }

  guardarUsuario(){

    //this.usuario.id_cia = this.compania; //actualiza el id de la compania, donde es el dropdwonlist
    this.usuarioServicio.registrarUsuario(this.usuario).subscribe(dato => {
      console.log(dato);
      this.irAlaListaDeUsuarios();
    },error => console.log(error));
  }

  irAlaListaDeUsuarios(){
    this.router.navigate(['/usuarios']);
  }

  onSubmit() {
    //console.log(this.usuario);
    this.guardarUsuario();
  }


}

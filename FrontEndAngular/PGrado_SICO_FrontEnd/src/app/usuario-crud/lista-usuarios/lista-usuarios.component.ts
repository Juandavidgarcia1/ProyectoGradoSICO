import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
import Swal from'sweetalert2';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})

export class ListaUsuariosComponent implements OnInit {
  usuarios: Usuario[];
  constructor(private usuarioServicio: UsuarioService,private router:Router) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  private obtenerUsuarios(){
    this.usuarioServicio.obtenerListaUsuarios().subscribe(dato=> {
      this.usuarios = dato;
    });

  }

 actualizarUsuario(id:number){
    this.router.navigate(['actualizar-usuario',id]);
  }



  eliminarUsuario(id:number){
    Swal.fire({
      title: '¿Estas seguro?',
      icon: 'warning',
      html:'',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:'<i class="fa fa-thumbs-up"></i> Si',
      confirmButtonAriaLabel: '',
      cancelButtonText: '<i class="fa fa-thumbs-up"></i> No',
      cancelButtonAriaLabel: ''
    }).then((result) => {
      if(result.value){
        this.usuarioServicio.eliminarUsuario(id).subscribe(dato => {
          console.log(dato);
          this.obtenerUsuarios();
          Swal.fire(
            'Usuario eliminado',
            'El usuario ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }
//Fin eliminar un usuario

verDetallesDelUsuario(id:number){
  this.router.navigate(['detalles-usuario',id]);
}

}



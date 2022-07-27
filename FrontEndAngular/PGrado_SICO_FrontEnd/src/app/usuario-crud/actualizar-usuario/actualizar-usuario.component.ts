import Swal from 'sweetalert2';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css']
})
export class ActualizarUsuarioComponent implements OnInit {

  id: number;
  usuario: Usuario = new Usuario();
  constructor(private usuarioService: UsuarioService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.usuarioService.obtenerUsuarioPorId(this.id).subscribe(dato => {
      this.usuario = dato;
    }, error => console.log(error));
  }

  irAlaListaDeUsuarios() {
    Swal.fire('Usuario actualizado', `El usuario ${this.usuario.name} ha sido actualizado con exito`, `success`);
    this.router.navigate(['/usuarios']);
  }

  onSubmit() {
    this.usuarioService.actualizarUsuario(this.id, this.usuario).subscribe(dato => {
      this.irAlaListaDeUsuarios();
    }, error => console.log(error));
  }
}

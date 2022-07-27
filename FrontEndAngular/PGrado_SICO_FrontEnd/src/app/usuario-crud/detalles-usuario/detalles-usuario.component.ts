import  Swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-detalles-usuario',
  templateUrl: './detalles-usuario.component.html',
  styleUrls: ['./detalles-usuario.component.css']
})
export class DetallesUsuarioComponent implements OnInit {
  id:number;
  //id_cia:number;
  usuario:Usuario;
  constructor(private route:ActivatedRoute,private usuarioServicio:UsuarioService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.usuario = new Usuario();
    this.usuarioServicio.obtenerUsuarioPorId(this.id).subscribe(dato => {
      this.usuario = dato;
      Swal.fire(`Detalles del usuario :${this.usuario.email}`);
    });
  }

}

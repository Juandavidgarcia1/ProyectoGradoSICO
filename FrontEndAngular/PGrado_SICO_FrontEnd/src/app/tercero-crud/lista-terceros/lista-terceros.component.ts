import { Component, OnInit } from '@angular/core';
import { Tercero } from '../tercero';
import { TerceroService } from '../tercero.service';
import { Router } from '@angular/router';
import Swal from'sweetalert2';

@Component({
  selector: 'app-lista-terceros',
  templateUrl: './lista-terceros.component.html',
  styleUrls: ['./lista-terceros.component.css']
})

export class ListaTercerosComponent implements OnInit {
  terceros: Tercero[];
  constructor(private terceroServicio: TerceroService,private router:Router) { }

  ngOnInit(): void {
    this.obtenerTerceros();
  }

  private obtenerTerceros(){
    this.terceroServicio.obtenerListaTerceros().subscribe(dato=> {
      this.terceros = dato;
    });

  }

 actualizarTercero(id:number){
    this.router.navigate(['actualizar-tercero',id]);
  }



  eliminarTercero(id:number){
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
        this.terceroServicio.eliminarTercero(id).subscribe(dato => {
          console.log(dato);
          this.obtenerTerceros();
          Swal.fire(
            'Tercero eliminado',
            'El tercero ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }
//Fin eliminar un tercero

verDetallesDelTercero(id:number){
  this.router.navigate(['detalles-tercero',id]);
}

}


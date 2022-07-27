import { Component, OnInit } from '@angular/core';
import { Movimiento } from '../movimiento';
import { MovimientoService } from '../movimiento.service';
import { Router } from '@angular/router';
import Swal from'sweetalert2';

@Component({
  selector: 'app-lista-movimientos',
  templateUrl: './lista-movimientos.component.html',
  styleUrls: ['./lista-movimientos.component.css']
})

export class ListaMovimientosComponent implements OnInit {
  movimientos: Movimiento[];
  constructor(private movimientoServicio: MovimientoService,private router:Router) { }

  ngOnInit(): void {
    this.obtenerMovimientos();
  }

  private obtenerMovimientos(){
    this.movimientoServicio.obtenerListaMovimientos().subscribe(dato=> {
      this.movimientos = dato;
    });

  }

 actualizarMovimiento(id:number){
    this.router.navigate(['actualizar-movimiento',id]);
  }



  eliminarMovimiento(id:number){
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
        this.movimientoServicio.eliminarMovimiento(id).subscribe(dato => {
          console.log(dato);
          this.obtenerMovimientos();
          Swal.fire(
            'Movimiento eliminado',
            'El movimiento ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }
//Fin eliminar un movimiento

verDetallesDelMovimiento(id:number){
  this.router.navigate(['detalles-movimiento',id]);
}

}



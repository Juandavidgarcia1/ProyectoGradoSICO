import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import { Movimiento } from '../movimiento';
import { MovimientoService } from '../movimiento.service';
import { Router } from '@angular/router';
import Swal from'sweetalert2';
//import {FilterPipe} from '../../pipes/filter.pipe';

@Component({
  selector: 'app-lista-movimientos',
  templateUrl: './lista-movimientos.component.html',
  styleUrls: ['./lista-movimientos.component.css']
})

export class ListaMovimientosComponent implements OnInit {
  movimientos: Movimiento[];

  //Variable para filtros;
  filterId:'';
  filterTipo:'';
  filterProducto:'';
  filterBodega:'';
  filterTercero:'';
  filterCantidad:'';
  filterFecha:'';

constructor(private movimientoServicio: MovimientoService,private router:Router) { }

  ngOnInit(): void {
    this.obtenerMovimientos();
    //this.filterFecha = '2022-';
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

//Generador de PDF
@ViewChild('content', { static: false }) el!: ElementRef;
GenerarPdf() {
  //let pdf = new jsPDF('p', 'pt', 'a2');
  let pdf = new jsPDF('p', 'pt', 'a1');
  pdf.html(this.el.nativeElement, {
    callback: (pdf) => {
      pdf.save("Documento-Actual.pdf")
    }
  })
}


}



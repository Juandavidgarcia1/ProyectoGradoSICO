import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import { Bodega } from '../bodega';
import { BodegaService } from '../bodega.service';
import { Router } from '@angular/router';
import Swal from'sweetalert2';


@Component({
  selector: 'app-lista-bodegas',
  templateUrl: './lista-bodegas.component.html',
  styleUrls: ['./lista-bodegas.component.css']
})

export class ListaBodegasComponent implements OnInit {
  bodegas: Bodega[];
  constructor(private bodegaServicio: BodegaService,private router:Router) { }

  ngOnInit(): void {
    this.obtenerBodegas();
  }

  private obtenerBodegas(){

    this.bodegaServicio.obtenerListaBodegas().subscribe(dato=> {
      console.log(dato);
      this.bodegas = dato;

    });

  }

  //Generador de PDF
  @ViewChild('content', { static: false }) el!: ElementRef;
  GenerarPdf() {
    //let pdf = new jsPDF('p', 'pt', 'a2');
    let pdf = new jsPDF('p', 'pt', 'a1');
    pdf.html(this.el.nativeElement, {
      callback: (pdf) => {
        pdf.save("Documento-Lista de bodegas.pdf")
      }
    })
  }



 actualizarBodega(id:number){
    this.router.navigate(['actualizar-bodega',id]);
  }



  eliminarBodega(id:number){
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
        this.bodegaServicio.eliminarBodega(id).subscribe(dato => {
          console.log(dato);
          this.obtenerBodegas();
          Swal.fire(
            'Bodega eliminado',
            'El bodega ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }
//Fin eliminar un bodega

verDetallesDelBodega(id:number){
  this.router.navigate(['detalles-bodega',id]);
}

}



import  Swal  from 'sweetalert2';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import { Bodega } from '../bodega';
import { ActivatedRoute } from '@angular/router';
import { BodegaService } from '../bodega.service';

@Component({
  selector: 'app-detalles-bodega',
  templateUrl: './detalles-bodega.component.html',
  styleUrls: ['./detalles-bodega.component.css']
})
export class DetallesBodegaComponent implements OnInit {
  id:number;
  //id_cia:number;
  bodega:Bodega;
  constructor(private route:ActivatedRoute,private bodegaServicio:BodegaService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.bodega = new Bodega();
    this.bodegaServicio.obtenerBodegaPorId(this.id).subscribe(dato => {
      this.bodega = dato;
      Swal.fire(`Detalles del bodega :${this.bodega.descripcion}`);
    });
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

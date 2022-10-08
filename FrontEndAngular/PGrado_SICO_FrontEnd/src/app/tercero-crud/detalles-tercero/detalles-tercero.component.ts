import  Swal  from 'sweetalert2';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import { Tercero } from '../tercero';
import { ActivatedRoute } from '@angular/router';
import { TerceroService } from '../tercero.service';

@Component({
  selector: 'app-detalles-tercero',
  templateUrl: './detalles-tercero.component.html',
  styleUrls: ['./detalles-tercero.component.css']
})
export class DetallesTerceroComponent implements OnInit {
  id:number;
  //id_cia:number;
  tercero:Tercero;
  constructor(private route:ActivatedRoute,private terceroServicio:TerceroService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.tercero = new Tercero();
    this.terceroServicio.obtenerTerceroPorId(this.id).subscribe(dato => {
      this.tercero = dato;
      Swal.fire(`Detalles del tercero :${this.tercero.descripcion}`);
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

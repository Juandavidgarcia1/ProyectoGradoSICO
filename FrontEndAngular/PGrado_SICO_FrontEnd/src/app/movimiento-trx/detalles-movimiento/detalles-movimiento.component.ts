import  Swal  from 'sweetalert2';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import { Movimiento } from '../movimiento';
import { ActivatedRoute } from '@angular/router';
import { MovimientoService } from '../movimiento.service';

@Component({
  selector: 'app-detalles-movimiento',
  templateUrl: './detalles-movimiento.component.html',
  styleUrls: ['./detalles-movimiento.component.css']
})
export class DetallesMovimientoComponent implements OnInit {
  id:number;
  //id_cia:number;
  movimiento:Movimiento;
  constructor(private route:ActivatedRoute,private movimientoServicio:MovimientoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.movimiento = new Movimiento();
    this.movimientoServicio.obtenerMovimientoPorId(this.id).subscribe(dato => {
      this.movimiento = dato;
      Swal.fire(`Detalles del movimiento :${this.movimiento.id}`);
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

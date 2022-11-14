import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import { Existencia } from '../existencia';
import { ExistenciaService } from '../existencia.service';
import { Router } from '@angular/router';
import Swal from'sweetalert2';

@Component({
  selector: 'app-lista-existencias',
  templateUrl: './lista-existencias.component.html',
  styleUrls: ['./lista-existencias.component.css']
})

export class ListaExistenciasComponent implements OnInit {
  existencias: Existencia[];
  constructor(private existenciaServicio: ExistenciaService,private router:Router) { }

  ngOnInit(): void {
    this.obtenerExistencias();
    
  }

  private obtenerExistencias(){
    this.existenciaServicio.obtenerListaExistencias().subscribe(dato=> {
      this.existencias = dato;
    });

  }


verDetallesDelExistencia(id:number){
  this.router.navigate(['detalles-existencia',id]);
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



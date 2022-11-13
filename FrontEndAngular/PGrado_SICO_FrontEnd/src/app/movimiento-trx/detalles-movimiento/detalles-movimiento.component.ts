import Swal from 'sweetalert2';
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
  id: number;
  //id_cia:number;
  movimiento: Movimiento;

  bodegas: any;// lista de Bodegas
  bodega: number;// lista de Bodegas

  naturalezas: any;// lista de Naturaleza
  naturaleza: number;// lista de Naturaleza

  productos: any;// lista de productos
  producto: number;// lista de productos

  terceros: any;// lista de terceros
  tercero: number;// lista de terceros

  constructor(private route: ActivatedRoute, private movimientoServicio: MovimientoService) { }

  ngOnInit(): void {

    this.obtenerBodegas();
    this.obtenerNaturalezas();
    this.obtenerProductos();
    this.obtenerTerceros();

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
        pdf.save("Documento-Detalle del movimiento.pdf")
      }
    })
  }

  private obtenerBodegas() {
    this.movimientoServicio.obtenerListaBodegas().subscribe(dato => {
      this.bodegas = dato;
      this.bodega = this.bodegas[0].id;
    });

  }

  //Lista de naturalezas
  private obtenerNaturalezas() {
    this.movimientoServicio.obtenerListaNaturalezas().subscribe(dato => {
      this.naturalezas = dato;
      this.naturaleza = this.naturalezas[0].id;
    });
  }

  //Lista de productos
  private obtenerProductos() {
    this.movimientoServicio.obtenerListaProductos().subscribe(dato => {
      this.productos = dato;
      this.producto = this.productos[0].id;
    });
  }

  //Lista de terceros
  private obtenerTerceros() {
    this.movimientoServicio.obtenerListaTerceros().subscribe(dato => {
      this.terceros = dato;
      this.tercero = this.terceros[0].id;
    });
  }


}

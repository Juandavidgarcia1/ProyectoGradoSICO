import  Swal  from 'sweetalert2';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import { Producto } from '../producto';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-detalles-producto',
  templateUrl: './detalles-producto.component.html',
  styleUrls: ['./detalles-producto.component.css']
})
export class DetallesProductoComponent implements OnInit {
  id:number;
  producto:Producto;
  //variables para el constructor
  descripcion = '';
  stock_minimo:number = 0;

  constructor(private route:ActivatedRoute,private productoServicio:ProductoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.producto = new Producto(this.descripcion,this.stock_minimo);
    this.productoServicio.obtenerProductoPorId(this.id).subscribe(dato => {
      this.producto = dato;
      Swal.fire(`Detalles del producto :${this.producto.descripcion}`);
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

import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { TokenService } from '../../service/token.service';
import { Movimiento } from '../../movimiento-trx/movimiento';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})

export class ListaProductosComponent implements OnInit {
  productos: Producto[];
  roles: string[];
  isAdmin = false;

  //para consultar movimientos
  movimientos: Movimiento[];// lista de Bodegas
  movimiento: number;// lista de Bodegas

  constructor(
    private productoServicio: ProductoService,
    private router: Router,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.obtenerProductos();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });

  }

  private obtenerProductos() {
    this.productoServicio.obtenerListaProductos().subscribe(dato => {
      this.productos = dato;
    });

  }

  actualizarProducto(id: number) {
    this.router.navigate(['actualizar-producto', id]);
  }


  eliminarProducto(id: number) {

    Swal.fire({
      title: '¿Estas seguro?',
      icon: 'warning',
      html: '',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Si',
      confirmButtonAriaLabel: '',
      cancelButtonText: '<i class="fa fa-thumbs-up"></i> No',
      cancelButtonAriaLabel: ''
    }).then((result) => {
      if (result.value) {

        this.productoServicio.eliminarProducto(id).subscribe(data => {
          Swal.fire('Producto eliminado', 'El producto ha sido eliminado con exito', 'success')
          this.obtenerProductos();
        },
          error => {
            Swal.fire('Producto', error.error.mensaje, `error`);
          }
        )

      } //si la respuesta es si, realiza lo de arriba
    })
  }
  //Fin eliminar un producto

  verDetallesDelProducto(id: number) {
    this.router.navigate(['detalles-producto', id]);
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



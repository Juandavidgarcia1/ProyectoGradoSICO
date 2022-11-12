import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { Movimiento } from '../movimiento';
import { MovimientoService } from '../movimiento.service';

@Component({
  selector: 'app-registrar-movimiento',
  templateUrl: './registrar-movimiento.component.html',
  styleUrls: ['./registrar-movimiento.component.css']
})
export class RegistrarMovimientoComponent implements OnInit {

  bodegas: any;// lista de Bodegas
  bodega: number;// lista de Bodegas

  naturalezas: any;// lista de Naturaleza
  naturaleza: number;// lista de Naturaleza

  productos: any;// lista de productos
  producto: number;// lista de productos

  terceros: any;// lista de terceros
  tercero: number;// lista de terceros

  movimiento: Movimiento = new Movimiento();

  msg: any;
   date: Date; // = new Date();

  constructor(private movimientoServicio: MovimientoService, private router: Router) { }

  ngOnInit(): void {
    //console.log(this.movimiento);
    this.obtenerBodegas();
    this.obtenerNaturalezas();
    this.obtenerProductos();
    this.obtenerTerceros();

    this.movimiento.id_user = 1; //Se debe capturar el usuario por el momento, queda quemado.
    //this. formatoFecha(this.hoy, 'dd/mm/yy');
   // this.date = new Date();
    //console.log(this.date);
  }

  guardarMovimiento() {

    let date: Date = new Date();
    this.movimiento.fecha_movto = new Date(2001,11,2);

    this.movimientoServicio.registrarMovimiento(this.movimiento).subscribe(
      dato => {
        this.msg = dato;
        Swal.fire('Movimiento', this.msg.mensaje, `success`);
        this.irAlaListaDeMovimientos();

      },
      error => {

        Swal.fire('Movimiento', error.error.mensaje, `error`);
        // this.router.navigate(['/']);
      }
    )



  }

  irAlaListaDeMovimientos() {
    this.router.navigate(['/movimientos']);
  }

  onSubmit() {
    //console.log(this.movimiento);
    this.guardarMovimiento();

  }

  //Lista de bodegas
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
      this.tercero = this.terceros[0].id;;
    });
  }





}

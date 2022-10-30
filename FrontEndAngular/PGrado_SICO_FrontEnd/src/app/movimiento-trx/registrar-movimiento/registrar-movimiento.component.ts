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

  bodegas:any;// lista de Bodegas
  bodega:number;// lista de Bodegas

  naturalezas:any;// lista de Naturaleza
  naturaleza:number;// lista de Naturaleza

  productos:any;// lista de productos
  producto:number;// lista de productos

  terceros:any;// lista de terceros
  tercero:number;// lista de terceros

  movimiento: Movimiento = new Movimiento();

  constructor(private movimientoServicio: MovimientoService, private router : Router) { }

  ngOnInit(): void {
   //console.log(this.movimiento);
    this.obtenerBodegas();
    this.obtenerNaturalezas();
    this.obtenerProductos();
    this.obtenerTerceros();
  }

  guardarMovimiento(){

    this.movimiento.id_user =1; //Se debe capturar el usuario por el momento, queda quemado.
    this.movimiento.id_naturaleza= this.naturaleza;
    this.movimiento.id_bodega_movto = this.bodega;
    this.movimiento.id_producto_movto = this.producto;
    this.movimiento.id_tercero_movto = this.tercero;

    //console.log( this.bodegas.id);
/*
    this.movimientoServicio.registrarMovimiento(this.movimiento).subscribe(dato => {
      console.log(dato);
      this.irAlaListaDeMovimientos();
    },error => console.log(error));
*/

    this.movimientoServicio.registrarMovimiento(this.movimiento).subscribe(
      data => {
        Swal.fire('Movimiento', `El Movimiento ha sido actualizado con exito`, `success`);
        this.irAlaListaDeMovimientos();

    },
      error => {

        Swal.fire('Movimiento', error.error.mensaje, `error`);
        // this.router.navigate(['/']);
      }
    )



  }

  irAlaListaDeMovimientos(){
    this.router.navigate(['/movimientos']);
  }

  onSubmit() {
    console.log(this.movimiento);
    this.guardarMovimiento();

  }

  //Lista de bodegas
  private obtenerBodegas(){
    this.movimientoServicio.obtenerListaBodegas().subscribe(dato=> {
      this.bodegas = dato;
    });

  }

  //Lista de naturalezas
  private obtenerNaturalezas(){
    this.movimientoServicio.obtenerListaNaturalezas().subscribe(dato=> {
      this.naturalezas = dato;
    });
  }

  //Lista de productos
  private obtenerProductos(){
    this.movimientoServicio.obtenerListaProductos().subscribe(dato=> {
      this.productos = dato;
    });
  }

  //Lista de terceros
  private obtenerTerceros(){
    this.movimientoServicio.obtenerListaTerceros().subscribe(dato=> {
      this.terceros = dato;
    });
  }
}

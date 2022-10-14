import Swal from 'sweetalert2';
import { MovimientoService } from '../movimiento.service';
import { Movimiento } from '../movimiento';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-movimiento',
  templateUrl: './actualizar-movimiento.component.html',
  styleUrls: ['./actualizar-movimiento.component.css']
})
export class ActualizarMovimientoComponent implements OnInit {

  id: number;

  bodegas: any;// lista de Bodegas
  bodega: number;// lista de Bodegas

  naturalezas: any;// lista de Naturaleza
  naturaleza: number;// lista de Naturaleza

  productos: any;// lista de productos
  producto: number;// lista de productos

  terceros: any;// lista de terceros
  tercero: number;// lista de terceros

  movimiento: Movimiento = new Movimiento();
  constructor(private movimientoServicio: MovimientoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.obtenerBodegas();
    this.obtenerNaturalezas();
    this.obtenerProductos();
    this.obtenerTerceros();

    this.naturaleza = this.movimiento.id_naturaleza

    this.id = this.route.snapshot.params['id'];
    this.movimientoServicio.obtenerMovimientoPorId(this.id).subscribe(dato => {
      this.movimiento = dato;
    }, error => console.log(error));
  }

  irAlaListaDeMovimientos() {
    Swal.fire('Movimiento actualizado', `El movimiento ${this.movimiento.id} ha sido actualizado con exito`, `success`);
    this.router.navigate(['/movimientos']);
  }

  onSubmit() {
    if (this.movimiento.cantidad_movto < 1) {
      Swal.fire('Movimiento', `El movimiento id:${this.movimiento.id}, No puede ser menor a 1`, `success`);
    } else {
      this.movimientoServicio.actualizarMovimiento(this.id, this.movimiento).subscribe(dato => {
        this.irAlaListaDeMovimientos();
      }, error => console.log(error));

    }

  }

  //Dropdown list inicio

  //Lista de bodegas
  private obtenerBodegas() {
    this.movimientoServicio.obtenerListaBodegas().subscribe(dato => {
      this.bodegas = dato;
    });

  }

  //Lista de naturalezas
  private obtenerNaturalezas() {
    this.movimientoServicio.obtenerListaNaturalezas().subscribe(dato => {
      this.naturalezas = dato;
    });
  }

  //Lista de productos
  private obtenerProductos() {
    this.movimientoServicio.obtenerListaProductos().subscribe(dato => {
      this.productos = dato;
    });
  }

  //Lista de terceros
  private obtenerTerceros() {
    this.movimientoServicio.obtenerListaTerceros().subscribe(dato => {
      this.terceros = dato;
    });
  }

  //Dropdown list Fin
}

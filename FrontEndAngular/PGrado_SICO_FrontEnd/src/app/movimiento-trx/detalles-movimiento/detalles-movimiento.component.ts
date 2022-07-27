import  Swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
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

}

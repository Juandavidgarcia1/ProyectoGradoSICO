import  Swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
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

}

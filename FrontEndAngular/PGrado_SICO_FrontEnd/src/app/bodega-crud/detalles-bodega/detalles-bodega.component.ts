import  Swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Bodega } from '../bodega';
import { ActivatedRoute } from '@angular/router';
import { BodegaService } from '../bodega.service';

@Component({
  selector: 'app-detalles-bodega',
  templateUrl: './detalles-bodega.component.html',
  styleUrls: ['./detalles-bodega.component.css']
})
export class DetallesBodegaComponent implements OnInit {
  id:number;
  //id_cia:number;
  bodega:Bodega;
  constructor(private route:ActivatedRoute,private bodegaServicio:BodegaService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.bodega = new Bodega();
    this.bodegaServicio.obtenerBodegaPorId(this.id).subscribe(dato => {
      this.bodega = dato;
      Swal.fire(`Detalles del bodega :${this.bodega.descripcion}`);
    });
  }

}

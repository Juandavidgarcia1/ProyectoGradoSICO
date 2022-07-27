import  Swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
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
  constructor(private route:ActivatedRoute,private productoServicio:ProductoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.producto = new Producto();
    this.productoServicio.obtenerProductoPorId(this.id).subscribe(dato => {
      this.producto = dato;
      Swal.fire(`Detalles del producto :${this.producto.descripcion}`);
    });
  }

}

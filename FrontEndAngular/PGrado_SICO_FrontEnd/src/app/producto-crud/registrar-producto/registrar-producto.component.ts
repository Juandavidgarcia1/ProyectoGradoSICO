import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-producto',
  templateUrl: './registrar-producto.component.html',
  styleUrls: ['./registrar-producto.component.css']
})
export class RegistrarProductoComponent implements OnInit {

  descripcion = '';
  stock_minimo:number = 0;
  producto: Producto = new Producto(this.descripcion,this.stock_minimo);

   constructor(private productoServicio: ProductoService, private router : Router) { }

  ngOnInit(): void {
    console.log(this.producto);
  }

  guardarProducto(){

    this.productoServicio.registrarProducto(this.producto).subscribe(dato => {
      this.irAlaListaDeEmpleados();
      //Swal.fire('Producto', 'Producto Creado con exito', `success`)

    },error =>

    //console.log(error)
      Swal.fire('Producto', error.error.mensaje, `success`)
      
    );

  }

  irAlaListaDeEmpleados(){
    this.router.navigate(['/productos']);
  }

  onSubmit() {

    //Cuando la cantidad de stock minimo es igual a cero, entonces no genera alerta.
    if (this.producto.stock_minimo < 0) {
      Swal.fire('Producto', `La cantidad de stock del producto, no puede ser menor a 0`, `success`);
    }else if (this.producto.descripcion === "")
      Swal.fire('Producto', `La descripción del producto, no puede ser vacia`, `success`);
    else {
      this.guardarProducto();
    }
  }

}

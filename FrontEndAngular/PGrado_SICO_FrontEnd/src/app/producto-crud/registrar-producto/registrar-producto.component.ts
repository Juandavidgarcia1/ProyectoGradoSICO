import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';

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
      console.log(dato);
      this.irAlaListaDeEmpleados();
    },error => console.log(error));
  }

  irAlaListaDeEmpleados(){
    this.router.navigate(['/productos']);
  }

  onSubmit() {
    //console.log(this.producto);
    this.guardarProducto();
  }
}

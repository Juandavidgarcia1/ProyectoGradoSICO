import Swal from 'sweetalert2';
import { ProductoService } from '../producto.service';
import { Producto } from '../producto';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.css']
})
export class ActualizarProductoComponent implements OnInit {

  id: number;
  descripcion = '';
  stock_minimo: number = 0;

  producto: Producto = new Producto(this.descripcion, this.stock_minimo);

  constructor(private productoService: ProductoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productoService.obtenerProductoPorId(this.id).subscribe(dato => {
      this.producto = dato;
    }, error => console.log(error));
  }

  irAlaListaDeEmpleados() {
    Swal.fire('Producto actualizado', `El producto ${this.producto.descripcion} ha sido actualizado con exito`, `success`);
    this.router.navigate(['/productos']);
  }

  onSubmit() {

    //validar si el producto, tiene movimientos.
    /*
      this.productoService.(this.id, this.producto).subscribe(dato => {
        this.irAlaListaDeEmpleados();
      }, error =>
        Swal.fire('Producto', error.error.mensaje, `error`)
      );
    */

    //Cuando la cantidad de stock minimo es igual a cero, entonces no genera alerta.
    if (this.producto.stock_minimo < 0) {
      Swal.fire('Producto', `La cantidad de stock del producto, no puede ser menor a 0`, `success`);
    } else if (this.producto.descripcion === "")
      Swal.fire('Producto', `La descripción del producto, no puede ser vacia`, `success`);
    else {
      this.guardarProducto();
    }

  }

  guardarProducto() {

    this.productoService.actualizarProducto(this.id, this.producto).subscribe(dato => {
      this.irAlaListaDeEmpleados();
    }, error =>
      Swal.fire('Producto', error.error.mensaje, `error`)
    );

  }

}

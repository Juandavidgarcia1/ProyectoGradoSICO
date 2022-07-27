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
  producto: Producto = new Producto();
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
    this.productoService.actualizarProducto(this.id, this.producto).subscribe(dato => {
      this.irAlaListaDeEmpleados();
    }, error => console.log(error));
  }
}

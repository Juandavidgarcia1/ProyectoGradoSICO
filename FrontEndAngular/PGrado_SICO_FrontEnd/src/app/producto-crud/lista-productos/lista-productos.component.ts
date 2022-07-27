import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';
import Swal from'sweetalert2';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})

export class ListaProductosComponent implements OnInit {
  productos: Producto[];
  constructor(private productoServicio: ProductoService,private router:Router) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  private obtenerProductos(){
    this.productoServicio.obtenerListaProductos().subscribe(dato=> {
      this.productos = dato;
    });

  }

 actualizarProducto(id:number){
    this.router.navigate(['actualizar-producto',id]);
  }



  eliminarProducto(id:number){
    Swal.fire({
      title: '¿Estas seguro?',
      icon: 'warning',
      html:'',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:'<i class="fa fa-thumbs-up"></i> Si',
      confirmButtonAriaLabel: '',
      cancelButtonText: '<i class="fa fa-thumbs-up"></i> No',
      cancelButtonAriaLabel: ''
    }).then((result) => {
      if(result.value){
        this.productoServicio.eliminarProducto(id).subscribe(dato => {
          console.log(dato);
          this.obtenerProductos();
          Swal.fire(
            'Producto eliminado',
            'El producto ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }
//Fin eliminar un producto

verDetallesDelProducto(id:number){
  this.router.navigate(['detalles-producto',id]);
}

}


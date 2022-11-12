import Swal from 'sweetalert2';
import { TerceroService } from '../tercero.service';
import { Tercero } from '../tercero';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-tercero',
  templateUrl: './actualizar-tercero.component.html',
  styleUrls: ['./actualizar-tercero.component.css']
})
export class ActualizarTerceroComponent implements OnInit {

  id: number;
  tercero: Tercero = new Tercero();

 tipoTerceros: any;// lista de tipoterceros
 tipoTercero: number;// lista de tipoterceros

  constructor(private terceroService: TerceroService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.terceroService.obtenerTerceroPorId(this.id).subscribe(dato => {
      this.tercero = dato;
      this.obtenerTipoTerceros();
      this.tipoTercero = this.tercero.tipo_tercero;
    }, error =>
    //console.log(error);
    Swal.fire('Tercero', error.error.mensaje, `success`)

    );
  }

  irAlaListaDeTerceros() {
    Swal.fire('Tercero actualizado', `El tercero ${this.tercero.descripcion} ha sido actualizado con exito`, `success`);
    this.router.navigate(['/terceros']);
  }

  onSubmit() {


    this.tercero.tipo_tercero = this.tipoTercero;
    this.terceroService.actualizarTercero(this.id, this.tercero).subscribe(dato => {
      this.irAlaListaDeTerceros();
   //   this.obtenerTipoTerceros();

    }, error =>
    //console.log(error);
    Swal.fire('Bodega', error.error.mensaje, `success`)
    );
  }

    //Lista de terceros
    private obtenerTipoTerceros(){
      this.terceroService.obtenerTiposTercero().subscribe(dato=> {
        this.tipoTerceros = dato;
      });
    }
}

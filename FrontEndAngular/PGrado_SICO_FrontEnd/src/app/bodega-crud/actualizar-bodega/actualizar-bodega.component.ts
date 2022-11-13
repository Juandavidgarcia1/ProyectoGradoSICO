import Swal from 'sweetalert2';
import { BodegaService } from '../bodega.service';
import { Bodega } from '../bodega';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-bodega',
  templateUrl: './actualizar-bodega.component.html',
  styleUrls: ['./actualizar-bodega.component.css']
})
export class ActualizarBodegaComponent implements OnInit {

  id: number;
  bodega: Bodega = new Bodega();
  companias: any;// lista de companias
  compania: number;// lista de companias
  constructor(private bodegaService: BodegaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    //this.compania=this.bodega.id_cia;
    this.id = this.route.snapshot.params['id'];

    this.bodegaService.obtenerBodegaPorId(this.id).subscribe(dato => {
      this.bodega = dato;
      this.obtenercompanias();
      this.compania = this.bodega.id_cia; //hace la magia de seleccionar el elemento, correspondiente
    }, error =>
      //console.log(error)
      Swal.fire('Bodega', error.error.mensaje, `success`)
    );

}

  irAlaListaDeBodegas() {
    Swal.fire('Bodega actualizado', `El bodega ${this.bodega.descripcion} ha sido actualizado con exito`, `success`);
    this.router.navigate(['/bodegas']);
  }

  onSubmit() {
    this.bodegaService.actualizarBodega(this.id, this.bodega).subscribe(dato => {
      this.irAlaListaDeBodegas();
    }, error => console.log(error));
  }

   //Lista de companias
   private obtenercompanias() {
    this.bodegaService.obtenerListaCompanias().subscribe(dato => {
      this.companias = dato;
    });

  }
}

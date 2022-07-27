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
  constructor(private terceroService: TerceroService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.terceroService.obtenerTerceroPorId(this.id).subscribe(dato => {
      this.tercero = dato;
    }, error => console.log(error));
  }

  irAlaListaDeTerceros() {
    Swal.fire('Tercero actualizado', `El tercero ${this.tercero.descripcion} ha sido actualizado con exito`, `success`);
    this.router.navigate(['/terceros']);
  }

  onSubmit() {
    this.terceroService.actualizarTercero(this.id, this.tercero).subscribe(dato => {
      this.irAlaListaDeTerceros();
    }, error => console.log(error));
  }
}

import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { Tercero } from '../tercero';
import { TerceroService } from '../tercero.service';

@Component({
  selector: 'app-registrar-tercero',
  templateUrl: './registrar-tercero.component.html',
  styleUrls: ['./registrar-tercero.component.css']
})
export class RegistrarTerceroComponent implements OnInit {

  tercero: Tercero = new Tercero();

  tipoTerceros:any;// lista de tipo terceros
  tipoTercero:number;// lista de tipo terceros

  constructor(private terceroServicio: TerceroService, private router : Router) { }

  ngOnInit(): void {
    //console.log(this.tercero);
    this.obtenerTipoTerceros();
  }

  guardarTercero(){

    this.tercero.tipo_tercero = this.tipoTercero;
    this.terceroServicio.registrarTercero(this.tercero).subscribe(dato => {
      console.log(dato);
      this.irAlaListaDeTerceros();
    },error =>
        //console.log(error);
        Swal.fire('Tercero', error.error.mensaje, `error`)
    );
  }

  irAlaListaDeTerceros(){
    this.router.navigate(['/terceros']);
  }

  onSubmit() {
    //console.log(this.tercero);
    this.guardarTercero();
  }

    //Lista de terceros
    private obtenerTipoTerceros(){
      this.terceroServicio.obtenerTiposTercero().subscribe(dato=> {
        this.tipoTerceros = dato;
        this.tipoTercero = this.tipoTerceros[0].id;
      });
    }

}

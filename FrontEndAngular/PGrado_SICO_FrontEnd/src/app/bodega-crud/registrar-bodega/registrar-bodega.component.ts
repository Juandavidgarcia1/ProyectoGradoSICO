import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import Swal from 'sweetalert2';
import { Bodega } from '../bodega';
import { BodegaService } from '../bodega.service';

@Component({
  selector: 'app-registrar-bodega',
  templateUrl: './registrar-bodega.component.html',
  styleUrls: ['./registrar-bodega.component.css']
})
export class RegistrarBodegaComponent implements OnInit {

  bodega: Bodega = new Bodega();

  companias:any;// lista de companias
  compania:number;// lista de companias

  constructor(private bodegaServicio: BodegaService, private router : Router) { }

  ngOnInit(): void {
    //console.log(this.bodega);
    this.obtenerCompanias()
  }

  guardarBodega(){

    this.bodega.id_cia = this.compania; //actualiza el id de la compania, donde es el dropdwonlist
    this.bodegaServicio.registrarBodega(this.bodega).subscribe(dato => {
      console.log(dato);
      this.irAlaListaDeBodegas();
    },error =>
      Swal.fire('Bodega', error.error.mensaje, `error`)

    );


  }

  irAlaListaDeBodegas(){
    this.router.navigate(['/bodegas']);
  }

  onSubmit() {
    //console.log(this.bodega);
    this.guardarBodega();
  }

    //Lista de terceros
    private obtenerCompanias(){
      this.bodegaServicio.obtenerListaCompanias().subscribe(dato=> {
        this.companias = dato;
       this.compania = this.companias[0].id; //Ubica el selected default de la primera posicion de las cias
      });
    }
}

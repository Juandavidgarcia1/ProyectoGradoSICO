import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, id: string, IdInput: string, TipoInput: string, ProductoInput: string,
    BodegaInput: string, TerceroInput: string, CantidadInput: string, FechaInput: string): any {


    if (!value) return null;
    if (!IdInput && !ProductoInput && !TipoInput && !BodegaInput && !TerceroInput && !CantidadInput && !FechaInput) return value; //if (IdInput === '' ) return value; //Hacen lo mismo

    if (IdInput !== undefined  ) {

      if (IdInput.length >= 1) {
        value = value.filter(singleItem =>
          singleItem[id].toString().toLowerCase().includes(IdInput.toLowerCase())
        );
      }
    }

    if (TipoInput !== undefined) {
      if (TipoInput.length >= 1) {
        value = value.filter(singleItem =>
          singleItem['naturaleza'].toString().toLowerCase().includes(TipoInput.toLowerCase())
        );
      }
    }

    if (ProductoInput !== undefined) {
      if (ProductoInput.length >= 3) {
        value = value.filter(singleItem =>
          singleItem['producto'].toString().toLowerCase().includes(ProductoInput.toLowerCase())
        );
      }
    }

    if (BodegaInput !== undefined) {
      if (BodegaInput.length >= 3) {
        value = value.filter(singleItem =>
          singleItem['bodega'].toString().toLowerCase().includes(BodegaInput.toLowerCase())
        );
      }
    }

    if (TerceroInput !== undefined) {
      if (TerceroInput.length >= 3) {
        value = value.filter(singleItem =>
          singleItem['tercero'].toString().toLowerCase().includes(TerceroInput.toLowerCase())
        );
      }
    }

    if (CantidadInput !== null) {
      if (CantidadInput.length >= 1) {
        value = value.filter(singleItem =>
          singleItem['cantidad_movto'].toString().toLowerCase().includes(CantidadInput.toLowerCase())
        );
      }
    }

    if (FechaInput !== undefined) {
      if (FechaInput.length >= 6) {
        value = value.filter(singleItem =>
          singleItem['fecha_movto'].toString().toLowerCase().includes(FechaInput.toLowerCase())
        );
      }
    }

    return value;

  }

  //  Funciona cuando es el dato exacto
  //const results = []; for (const post of value) {if (post.id.toString() === arg) {results.push(post);};}; return results;}

}

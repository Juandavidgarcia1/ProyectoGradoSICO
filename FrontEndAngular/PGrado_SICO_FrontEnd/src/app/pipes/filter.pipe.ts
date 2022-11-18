import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, modulo: string, IdInput: string, TipoInput: string, ProductoInput: string,
    BodegaInput: string, TerceroInput: string, CantidadInput: string, FechaInput: string): any {

    if (!value) return null;
    if (!IdInput && !ProductoInput && !TipoInput && !BodegaInput && !TerceroInput && !CantidadInput && !FechaInput) return value; //if (IdInput === '' ) return value; //Hacen lo mismo

    //Id aplica para todos los modulos
    if (IdInput !== undefined) {
      if (IdInput.length >= 1) {
        value = value.filter(singleItem =>
          singleItem['id'].toString().toLowerCase().includes(IdInput.toLowerCase())
        );
      }
    }

    // si no viene ningun filtro que retorne el value.
    if (!ProductoInput && !TipoInput && !BodegaInput && !TerceroInput && !CantidadInput && !FechaInput) return value;
    if (modulo === 'movimientos') {

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

      if (CantidadInput !== undefined) {
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

    } else

      //fin modulo de movimientos

      if (modulo === 'existencias') {

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

        if (CantidadInput !== undefined) {
          if (CantidadInput.length >= 1) {
            value = value.filter(singleItem =>
              singleItem['cantidad_existencia'].toString().toLowerCase().includes(CantidadInput.toLowerCase())
            );
          }
        }

      } else
        //Fin de filtros de la consulta de existencias

        if (modulo === 'crudproducto') {

          if (ProductoInput !== undefined) {
            if (ProductoInput.length >= 3) {
              value = value.filter(singleItem =>
                singleItem['descripcion'].toString().toLowerCase().includes(ProductoInput.toLowerCase())
              );
            }
          }

          if (CantidadInput !== undefined) {
            if (CantidadInput.length >= 1) {
              value = value.filter(singleItem =>
                singleItem['stock_minimo'].toString().toLowerCase().includes(CantidadInput.toLowerCase())
              );
            }
          }

        } else
          //Fin de filtros del crud productos --sin implementar.

          if (modulo === 'crudbodega') {

            if (BodegaInput !== undefined) {
              if (BodegaInput.length >= 3) {
                value = value.filter(singleItem =>
                  singleItem['descripcion'].toString().toLowerCase().includes(BodegaInput.toLowerCase())
                );
              }
            }

            //la variable cantidadInput, se utiliza en este caso se reutiliza para llamar el codigo de la bodega
            if (CantidadInput !== undefined) {
              if (CantidadInput.length >= 1) {
                value = value.filter(singleItem =>
                  singleItem['codigo'].toString().toLowerCase().includes(CantidadInput.toLowerCase())
                );
              }
            }

          } else
            //Fin de filtros del crud bodega --sin implementar.

            if (modulo === 'crudtercero') {

              if (TerceroInput !== undefined) {
                if (TerceroInput.length >= 3) {
                  value = value.filter(singleItem =>
                    singleItem['descripcion'].toString().toLowerCase().includes(TerceroInput.toLowerCase())
                  );
                }
              }

              //la variable cantidadInput, se utiliza en este caso se reutiliza para llamar el numero del tercero
              if (CantidadInput !== undefined) {
                if (CantidadInput.length >= 1) {
                  value = value.filter(singleItem =>
                    singleItem['numero'].toString().toLowerCase().includes(CantidadInput.toLowerCase())
                  );
                }
              }

            }


    return value;

  }

  //  Funciona cuando es el dato exacto
  //const results = []; for (const post of value) {if (post.id.toString() === arg) {results.push(post);};}; return results;}

}

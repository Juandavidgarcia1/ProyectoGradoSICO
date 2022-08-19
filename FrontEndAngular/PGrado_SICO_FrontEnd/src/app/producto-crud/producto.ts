export class Producto {

  id?:number;
  descripcion:string;
  stock_minimo:number;
  existencia:number;

  constructor( Newdescripcion:string , stock_minimo:number){
    this.descripcion= Newdescripcion;
    this.stock_minimo= stock_minimo;
  }
}

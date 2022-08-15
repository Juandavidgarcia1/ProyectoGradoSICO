export class Producto {

  id:number;
  descripcion:string;
  stock_minimo:number;
  existencia:number;

  constructor(descripcion:string, stock_minimo:number){
    this.descripcion= descripcion;
    this.stock_minimo= stock_minimo;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-datos-compra',
  templateUrl: './datos-compra.component.html',
  styleUrls: ['./datos-compra.component.css']
})
export class DatosCompraComponent {
  correo:string="";
  direccion:string="";
  telefono:string="";
  texto:string="";
  ciudad:string="";
  formadepago:string="";
  aceptar:string=""
  

  reconoceCosas(){

    this.texto=this.correo+(", ")+this.direccion+(", ")+this.telefono+(", ")+this.ciudad+(", ")+this.formadepago+(", ")+this.aceptar;
    
   }
}

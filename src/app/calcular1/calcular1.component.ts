import { Component } from '@angular/core';

@Component({
  selector: 'app-calcular1',
  templateUrl: './calcular1.component.html',
  styleUrls: ['./calcular1.component.css']
})
export class Calcular1Component {
num1: number = 0;
num2: number = 0;
total: number = 0;

ngOnInit(){}

suma(){
this.total=this.num1+this.num2;
  alert("El valor recibido es "+ this.total)
}
resta(){
  this.total=this.num1-this.num2;
  alert("El valor recibido es "+ this.total)
  }
multiplicar(){
  this.total=this.num1*this.num2;
  alert("El valor recibido es "+ this.total)
}
dividir(){
  this.total=this.num1/this.num2;
  alert("El valor recibido es "+ this.total)
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//al inportar el decorador "Input" nos permite tomar valores desde el template
//Se importan los enventos de "EventEmitter" para enviar datos hacia el template

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  //Se inicia el decorador "Input" para traer datos desde el template
  @Input() text: string= "";
  @Input() color: string="";
  //Se inician vacios "" porque los valores los va a dar en template por ejemplo las variables text y color van a tomar el valor que le pusimos en la etiqueta 
  //<app-button color="green" text="add task"></app-button>
  //Haciendo esto se puede reutilizar el boton ya que el texto o el color se pueden modificar desde la etiqueta en el template

  @Output() btnClick = new EventEmitter();
//se crea un output para poder enviar datos al template  

  constructor() { }

  ngOnInit(): void {
  }
//se crea la función onClick para el evento de pulsar el botón
  onClick(){
    this.btnClick.emit();
    //se uiliza el método "emit" de "EventEmitter"
  }

}

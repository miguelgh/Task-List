import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

//se importa la interfaz y la base de datos
import { Task } from 'src/app/task';
import { TASKS } from 'src/app/mock-task';

//se carga los íconos de font awesome
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
//se inicializa el input con el array de la base de datos TASKS en la casilla cero
  @Input() task: Task = TASKS[0];
  @Output() onDeleteTask : EventEmitter<Task> = new EventEmitter()
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter()
  //se carga el ícono de font awesome
  faTimes= faTimes;

  constructor() { }


  ngOnInit(): void {
  }

  //se crea el método onDelete para borrar una tarea al hacer clic en la cruz
  onDelete(task: Task){
    this.onDeleteTask.emit(task);
  }
  onToggle(task: Task){
    this.onToggleReminder.emit(task);
  }


}

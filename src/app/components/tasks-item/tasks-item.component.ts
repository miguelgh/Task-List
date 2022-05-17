import { Component, OnInit, Input } from '@angular/core';

//se importa la interfaz y la base de datos
import { Task } from 'src/app/task';
import { TASKS } from 'src/app/mock-task';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
//se inicializa el input con el array de la base de datos TASKS en la casilla cero
  @Input() task: Task = TASKS[0];
  constructor() { }

  ngOnInit(): void {
  }

}
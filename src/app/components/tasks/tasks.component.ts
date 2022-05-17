import { Component, OnInit } from '@angular/core';
//se importan la interface task y el array de mock-task
import { Task } from 'src/app/task';
import { TASKS } from 'src/app/mock-task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  //se cargan en el componente, guardando en la variable "tasks" con la intefaz "Task[]" el array TASK
  tasks: Task[] = TASKS;

  constructor() { }

  ngOnInit(): void {
  }

}

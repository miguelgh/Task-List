import { Component, OnInit } from '@angular/core';
//se importa el servicio que tiene el array TASKS con las tareas escritas como base de datos
import { TaskService } from 'src/app/service/task.service';
//se importa "Task" que tiene la interfase del array (id,nombre,fecha,etc)
import { Task } from 'src/app/task';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  //se cargan en el componente, guardando en la variable "tasks" con la intefaz "Task[]" el array TASK
  tasks: Task[] = [];

  constructor(
    //se crea inicia el servicio
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    //cuando arranca el componente (ngOnInit), guarda en "tasks", las tareas que viene del servicio que tiene el array TASKS
    this.taskService.getTasks().subscribe((tasks)=>(
      this.tasks=tasks
    ));
  }

  deleteTask(task: Task){
    this.taskService.deleteTask(task).subscribe(()=>(
      this.tasks = this.tasks.filter ( t => t.id !== task.id)
    ));
  }

  toggleReminder(task: Task){
    task.reminder = !task.reminder
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task){
    this.taskService.addTask(task).subscribe((task)=>(
      this.tasks.push(task)
    ));
  }

}

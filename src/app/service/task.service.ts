import { Injectable } from '@angular/core';

import { Observable,  of } from 'rxjs';
//se importan los métodos para poder utilizar las llamadas Get y Post
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';

//se importan la interface task y el array de mock-task
import { Task } from 'src/app/task';
import { TASKS } from 'src/app/mock-task';

const httpOption ={
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'

  constructor(
    private http:HttpClient
  ) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl); 
  }

  deleteTask(task: Task):Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(url)
  }
  
  updateTaskReminder(task:Task){
    const url = `${this.apiUrl}/${task.id}`
    return this.http.put<Task>(url, task, httpOption)

  }

  addTask(task: Task):Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.http.post<Task>(this.apiUrl, task, httpOption);
  }

}

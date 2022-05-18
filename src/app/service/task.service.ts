import { Injectable } from '@angular/core';

import { Observable,  of } from 'rxjs';
//se importan los métodos para poder utilizar las llamadas Get y Post
import {HttpClient, HttpHandler} from '@angular/common/http';

//se importan la interface task y el array de mock-task
import { Task } from 'src/app/task';
import { TASKS } from 'src/app/mock-task';


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
}

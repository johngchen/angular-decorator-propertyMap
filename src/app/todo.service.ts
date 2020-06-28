import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TodoModel } from './todo-model';
import { map } from 'rxjs/operators';
import { ModelMapper } from './modelMapper';
import {ApiService} from './apiService';

@Injectable()
export class TodoService {
  url = "https://jsonplaceholder.typicode.com/todos/";

  constructor(private http: HttpClient, private api: ApiService) { }
  list(): Observable<TodoModel[]> {
    // return this.http.get<TodoModel[]>(this.url).pipe(
    //   map(data => data.map((item: any) => {
    //     return new ModelMapper(TodoModel).map(item);
    //   }
    //   ))
    // );
    return this.api.get<TodoModel[]>(this.url, TodoModel);
  }
}

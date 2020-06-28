import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import {Readonly} from './functions/readonly';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @Readonly('test')
  name = 'Angular';
  todos: any;
  constructor(private service: TodoService) { }

  ngOnInit() {
    this.service.list().subscribe(data => {
      //console.log(data);
      this.todos = data;
    })

  }
}

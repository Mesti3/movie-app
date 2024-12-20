import { Component, OnInit } from '@angular/core';
import { getTodos, deleteTodo } from '../../store/todo.actions';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectTodos } from '../../store/todo.reducers';
import { Todo } from '../../models/todo.interface';
import { TodoListComponent } from '../../components/todo-list/todo-list.component';
import { TodoCounterComponent } from '../../components/todo-counter/todo-counter.component';
import { TodoFormComponent } from '../../components/todo-form/todo-form.component';

@Component({
    selector: 'app-todo-home',
    templateUrl: './todo-home.component.html',
    styleUrls: ['./todo-home.component.scss'],
    standalone: true,
    imports: [
        TodoFormComponent,
        TodoCounterComponent,
        TodoListComponent,
    ],
})
export class TodoHomeComponent implements OnInit {
  todos$: Observable<Todo[]>;

  constructor() {
  }

  ngOnInit(): void {}

  deleteTodo($event){
    
  }
}

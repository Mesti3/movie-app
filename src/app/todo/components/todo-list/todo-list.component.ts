import { Component, OnInit, Input, Output, EventEmitter, input } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss'],
    standalone: true,
    imports: [AsyncPipe,CommonModule],
})
export class TodoListComponent implements OnInit {
   todos = input<Observable<any>>();
  @Output() todoSelected = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  deleteTodo(id: number) {
      this.todoSelected.emit(id);
  }
}

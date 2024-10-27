import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { addTodo } from '../../store/todo.actions';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-todo-form',
    templateUrl: './todo-form.component.html',
    styleUrls: ['./todo-form.component.scss'],
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule],
})
export class TodoFormComponent implements OnInit {
   formTodo:UntypedFormGroup;

  constructor(private store: Store) {
   this.formTodo = new UntypedFormGroup({
        title: new UntypedFormControl(''),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    //  this.store.dispatch(addTodo({ title: this.formTodo.controls }));
   //   this.formTodo.controls.title.reset();
  }
}

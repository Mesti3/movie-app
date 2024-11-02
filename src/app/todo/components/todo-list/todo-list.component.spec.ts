import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoListComponent } from './todo-list.component';
import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-todo-list-wrapper',
  template: '<app-todo-list [todos]="todos" (todoSelected)="onTodoSelected($event)"></app-todo-list>',
  imports: [TodoListComponent],
  standalone: true,
})
class TodoListWrapperComponent {
  todos = of([]); // Mock observable for todos
  selectedTodoId: number | null = null;

  onTodoSelected(id: number) {
    this.selectedTodoId = id; // Capture selected todo id
  }
}

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let wrapperFixture: ComponentFixture<TodoListWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoListComponent, TodoListWrapperComponent], 
    }).compileComponents();
  });

  beforeEach(() => {
    wrapperFixture = TestBed.createComponent(TodoListWrapperComponent);
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    wrapperFixture.detectChanges(); // Initial change detection
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit todoSelected event when deleteTodo is called', () => {
    const todoIdToDelete = 1; // Sample ID to delete
    jest.spyOn(component.todoSelected, 'emit'); // Spy on the emit method

    component.deleteTodo(todoIdToDelete); // Call the delete method

    expect(component.todoSelected.emit).toHaveBeenCalledWith(todoIdToDelete); // Check if emit was called with the correct ID
  });

});

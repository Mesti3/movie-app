import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { TodoHomeComponent } from './todo-home.component';
import { getTodos, deleteTodo } from '../../store/todo.actions';
import { selectTodos } from '../../store/todo.reducers';
import { Todo } from '../../models/todo.interface';

describe('TodoHomeComponent', () => {
  let component: TodoHomeComponent;
  let fixture: ComponentFixture<TodoHomeComponent>;

  type MockStore = {
    select: jest.Mock; // Mock select method
  };

  let store: MockStore;

  beforeEach(async () => {

    store = {
        select: jest.fn(), // Mock select method
      } as unknown as MockStore; // Cast as MockStore

    await TestBed.configureTestingModule({
      imports: [TodoHomeComponent],
      providers: [
        { provide: Store, useValue: store }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoHomeComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });


});

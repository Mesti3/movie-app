import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoFormComponent } from './todo-form.component';
import { Store } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { addTodo } from '../../store/todo.actions';

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;
  let fixture: ComponentFixture<TodoFormComponent>;
  let store: jest.Mocked<Store>;

  beforeEach(async () => {
    // Create a mock store
    store = {
      dispatch: jest.fn(),
      select: jest.fn().mockReturnValue(of([])), // Mocking the store.select method
    } as unknown as jest.Mocked<Store>;

    await TestBed.configureTestingModule({
      declarations: [],
      imports: [ReactiveFormsModule,TodoFormComponent],
      providers: [
        { provide: Store, useValue: store }
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFormComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with a title control', () => {
    component.ngOnInit(); // Call ngOnInit to initialize the component
    expect(component.formTodo).toBeTruthy();
    expect(component.formTodo.controls['title']).toBeTruthy();
    expect(component.formTodo.controls['title'].value).toBe('');
  });

});

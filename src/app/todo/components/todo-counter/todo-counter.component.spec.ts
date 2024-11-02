import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { TodoCounterComponent } from './todo-counter.component';
import { of } from 'rxjs';
import { selectTodosCount } from '../../store/todo.reducers';

describe('TodoCounterComponent', () => {
  let component: TodoCounterComponent;
  let fixture: ComponentFixture<TodoCounterComponent>;
  let store: jest.Mocked<Store>;

  beforeEach(async () => {
    // Create a mock store
    store = {
      select: jest.fn(),
      dispatch: jest.fn(),
      subscribe: jest.fn(),
    } as unknown as jest.Mocked<Store>;

    await TestBed.configureTestingModule({
      imports: [TodoCounterComponent],
      providers: [
        { provide: Store, useValue: store }
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoCounterComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should select todos count from the store on init', () => {
    const mockCount = 5;
    store.select.mockReturnValue(of(mockCount)); // Mocking the store.select method

    component.ngOnInit();

    expect(store.select).toHaveBeenCalledWith(selectTodosCount);
    component.totalCount$.subscribe(count => {
      expect(count).toBe(mockCount);
    });
  });
});

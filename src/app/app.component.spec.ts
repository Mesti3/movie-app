import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Store, StoreModule } from '@ngrx/store';

type MockStore = {
  select: jest.Mock; // Mock select method
};

let store: MockStore;

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  store = {
    select: jest.fn(), // Mock select method
  } as unknown as MockStore; // Cast as MockStore

  
  beforeEach( () => {
     TestBed.configureTestingModule({
      imports: [AppComponent, StoreModule.forRoot({})],
      providers: [
        { provide: Store, useValue: store }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

});

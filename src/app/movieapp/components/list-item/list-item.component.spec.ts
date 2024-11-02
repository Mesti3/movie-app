import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListItemComponent } from './list-item.component';
import { By } from '@angular/platform-browser';
import { ComponentRef } from '@angular/core';

describe('ListItemComponent', () => {
  let component: ListItemComponent;
  let componentRef: ComponentRef<ListItemComponent>;
  let fixture: ComponentFixture<ListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListItemComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ListItemComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;

  componentRef.setInput('title','Movies');
   componentRef.setInput('overView','Movies text');
    componentRef.setInput('releaseDate','02.02.2002');

    fixture.detectChanges();
  });

  it('should create the ListItemComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize inputs correctly', () => {
    componentRef.setInput('title', 'Sample Movie Title');
    componentRef.setInput('overView', 'This is a sample overview');
    componentRef.setInput('releaseDate', '2023-10-24');

    fixture.detectChanges();

    expect(component.title()).toBe('Sample Movie Title');
    expect(component.overView()).toBe('This is a sample overview');
    expect(component.releaseDate()).toBe('2023-10-24');
  });

});

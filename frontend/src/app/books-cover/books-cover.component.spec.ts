import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksCoverComponent } from './books-cover.component';

describe('BooksCoverComponent', () => {
  let component: BooksCoverComponent;
  let fixture: ComponentFixture<BooksCoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksCoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

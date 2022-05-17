import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashPageComponent } from './admin-dash-page.component';

describe('AdminDashPageComponent', () => {
  let component: AdminDashPageComponent;
  let fixture: ComponentFixture<AdminDashPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

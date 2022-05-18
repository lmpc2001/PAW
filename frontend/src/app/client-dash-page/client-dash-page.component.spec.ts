import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDashPageComponent } from './client-dash-page.component';

describe('ClientDashPageComponent', () => {
  let component: ClientDashPageComponent;
  let fixture: ComponentFixture<ClientDashPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientDashPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDashPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});


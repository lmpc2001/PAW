import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionariosInfoComponent } from './funcionarios-info.component';

describe('FuncionariosInfoComponent', () => {
  let component: FuncionariosInfoComponent;
  let fixture: ComponentFixture<FuncionariosInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionariosInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionariosInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

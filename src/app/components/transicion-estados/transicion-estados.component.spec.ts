import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransicionEstadosComponent } from './transicion-estados.component';

describe('TransicionEstadosComponent', () => {
  let component: TransicionEstadosComponent;
  let fixture: ComponentFixture<TransicionEstadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransicionEstadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransicionEstadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

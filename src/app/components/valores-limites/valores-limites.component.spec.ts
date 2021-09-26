import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValoresLimitesComponent } from './valores-limites.component';

describe('ValoresLimitesComponent', () => {
  let component: ValoresLimitesComponent;
  let fixture: ComponentFixture<ValoresLimitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValoresLimitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValoresLimitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

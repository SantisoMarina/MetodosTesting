import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticionEquivalenteComponent } from './particion-equivalente.component';

describe('ParticionEquivalenteComponent', () => {
  let component: ParticionEquivalenteComponent;
  let fixture: ComponentFixture<ParticionEquivalenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticionEquivalenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticionEquivalenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

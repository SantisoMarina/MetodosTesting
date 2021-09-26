import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaDecisionComponent } from './tabla-decision.component';

describe('TablaDecisionComponent', () => {
  let component: TablaDecisionComponent;
  let fixture: ComponentFixture<TablaDecisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaDecisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaDecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

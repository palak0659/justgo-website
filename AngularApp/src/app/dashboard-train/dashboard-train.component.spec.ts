import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTrainComponent } from './dashboard-train.component';

describe('DashboardTrainComponent', () => {
  let component: DashboardTrainComponent;
  let fixture: ComponentFixture<DashboardTrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardTrainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

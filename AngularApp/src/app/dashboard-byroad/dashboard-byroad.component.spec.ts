import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardByroadComponent } from './dashboard-byroad.component';

describe('DashboardByroadComponent', () => {
  let component: DashboardByroadComponent;
  let fixture: ComponentFixture<DashboardByroadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardByroadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardByroadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

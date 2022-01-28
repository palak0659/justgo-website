import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBookbyroadsComponent } from './view-bookbyroads.component';

describe('ViewBookbyroadsComponent', () => {
  let component: ViewBookbyroadsComponent;
  let fixture: ComponentFixture<ViewBookbyroadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBookbyroadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBookbyroadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

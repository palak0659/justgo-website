import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBooktrainsComponent } from './view-booktrains.component';

describe('ViewBooktrainsComponent', () => {
  let component: ViewBooktrainsComponent;
  let fixture: ComponentFixture<ViewBooktrainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBooktrainsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBooktrainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

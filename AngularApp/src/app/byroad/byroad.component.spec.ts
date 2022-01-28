import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByroadComponent } from './byroad.component';

describe('ByroadComponent', () => {
  let component: ByroadComponent;
  let fixture: ComponentFixture<ByroadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByroadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ByroadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

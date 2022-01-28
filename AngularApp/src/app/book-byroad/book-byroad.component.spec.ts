import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookByroadComponent } from './book-byroad.component';

describe('BookByroadComponent', () => {
  let component: BookByroadComponent;
  let fixture: ComponentFixture<BookByroadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookByroadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookByroadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksBoard } from './books-board';

describe('BooksBoard', () => {
  let component: BooksBoard;
  let fixture: ComponentFixture<BooksBoard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooksBoard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksBoard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

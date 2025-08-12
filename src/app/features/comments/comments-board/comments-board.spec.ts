import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsBoard } from './comments-board';

describe('CommentsBoard', () => {
  let component: CommentsBoard;
  let fixture: ComponentFixture<CommentsBoard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentsBoard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentsBoard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

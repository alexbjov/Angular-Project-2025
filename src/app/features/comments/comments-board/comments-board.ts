import { CommonModule } from "@angular/common";
import { Component } from '@angular/core';
import { Observable } from "rxjs";
import { Comment } from "../../../models/comment.model";
import { CommentsService } from "../../../services/comments.service";
import { CommentItem } from "../comment-item/comment-item";

@Component({
  selector: 'app-comments-board',
  imports: [CommonModule, CommentItem],
  templateUrl: './comments-board.html',
  styleUrl: './comments-board.css'
})
export class CommentsBoard {
  comments: Comment[] = [];
  comments$!: Observable<Comment[]>;

  constructor(private commentsService: CommentsService) {
    this.comments$ = this.commentsService.getComments();
  }
}

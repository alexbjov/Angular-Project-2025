import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Comment } from "../../../models/comment.model";

@Component({
  selector: 'app-comment-item',
  imports: [],
  templateUrl: './comment-item.html',
  styleUrl: './comment-item.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentItem {
  comment!: Comment;
}

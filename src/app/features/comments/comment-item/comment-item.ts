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
  comment: Comment = {
    id: '83940fhdks7390',
    author: 'Comment Author',
    title: 'Comment Title',
    description: 'Comment Description',
    likes: 20,
    dislikes: 3,
    bookId: 'cdjel382947',
    ownerId: 'john@gmail.com'
  };
}

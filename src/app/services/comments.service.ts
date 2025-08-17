import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from '@angular/core';
import type { Observable } from "rxjs";
import type { Comment } from "../models/comment.model";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private apiUrl = 'http://localhost:3000/comments';
  httpClient = inject(HttpClient);

  getComments(): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(this.apiUrl);
  }
}

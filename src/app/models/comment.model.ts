export interface Comment {
  id: string,
  author: string,
  title: string,
  description: string,
  likes: number,
  dislikes: number,
  bookId: string,
  ownerId: string
}

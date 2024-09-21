import { Post } from "src/domain/post/Post";

export class ApiPost {
    constructor(
      public readonly id: number,
      public readonly title: {
        readonly rendered:string,
      },
      public readonly slug:string,
      public readonly content: {
        readonly rendered:string,
      },
      public readonly author: number,
      public readonly date: string,
      public readonly modified: string
    ) {}
  
    toDomain() {
      return Post.fromProperties({
        id: this.id,
        title: this.title.rendered,
        path: this.slug,
        excerpt: this.content.rendered.split(" ").splice(0, 35).join(" "),
        author: this.author,
        createdAt: new Date(this.date),
        updatedAt: new Date(this.modified),
      });
    }
  }
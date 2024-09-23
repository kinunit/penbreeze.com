import type { Post } from "src/domain/post/Post";

export class PostView {
    constructor(
        public readonly id:number,
        public readonly title:string,
        public readonly path:string,
        public readonly excerpt:string,
        public readonly content:string,
        public readonly author:number,
        public readonly createdAt:Date,
        public readonly updatedAt:Date
    ) {}
    
    static fromDomain(posts:Post[]) {
        const postsProperties = posts.map(post => post.properties);

        return postsProperties.map(postProperties => new PostView(
            postProperties.id,
            postProperties.title,
            postProperties.path,
            postProperties.excerpt,
            postProperties.content,
            postProperties.author,
            postProperties.createdAt,
            postProperties.updatedAt
        ))
    }
}
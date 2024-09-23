import type { Post } from "src/domain/post/Post";

export class PostDetailsView {
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
    
    static fromDomain(post:Post) {
        const postProperties = post.properties;

        return new PostDetailsView(
            postProperties.id,
            postProperties.title,
            postProperties.path,
            postProperties.excerpt,
            postProperties.content,
            postProperties.author,
            postProperties.createdAt,
            postProperties.updatedAt
        )
    }
}
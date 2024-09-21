import type { PostProperties } from "./types";


export class Post {
  
    constructor(
        private readonly id:number,
        private readonly title:string,
        private readonly path:string,
        private readonly excerpt:string,
        private readonly author:number,
        private readonly createdAt:Date,
        private readonly updatedAt:Date
    ) {}

    static fromProperties(properties: PostProperties): Post {
        return new Post (
            properties.id,
            properties.title,
            properties.path,
            properties.excerpt,
            properties.author,
            properties.createdAt,
            properties.updatedAt
        );
    }
    
    get properties(): PostProperties {
        return {
            id: this.id,
            title: this.title,
            path: this.path,
            excerpt: this.excerpt,
            author: this.author,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }
}
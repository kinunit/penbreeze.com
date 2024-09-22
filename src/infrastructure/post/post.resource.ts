import type { PostRepository } from "src/domain/post/post.repository";
import { RestClient } from "../RestClient";
import type { Post } from "src/domain/post/Post";
import { ApiPost } from "./post.api";
import type { PostStore } from "./post.store";

export class PostResource implements PostRepository {
    constructor(
        private readonly restClient: RestClient,
        private readonly store: PostStore
    ) {}

    async getPosts(): Promise<Post[]> {
        const apiPosts = await this.restClient.get<ApiPost[]>('/wp-json/wp/v2/posts')
        .catch((error)=> { 
            console.log(error)
        });

        const posts = apiPosts!.data.map(data => {
            return new ApiPost(
                data.id,
                data.title,
                data.slug,
                data.content,
                data.author,
                data.modified,
                data.date

            ).toDomain()
        });
        
        return posts;
    }

    async getPost(path:string): Promise<Post> {
        const apiPost = await this.restClient.get<ApiPost>(`/wp-json/wp/v2/posts/${path}`)
        .catch((error)=> { 
            console.log(error)
        });

        const posts = new ApiPost(
            apiPost!.data.id,
            apiPost!.data.title,
            apiPost!.data.slug,
            apiPost!.data.content,
            apiPost!.data.author,
            apiPost!.data.modified,
            apiPost!.data.date
            
        ).toDomain()
        
        return posts;
    }
}
import type { PostRepository } from "src/domain/post/post.repository";
import { RestClient } from "../RestClient";
import type { Post } from "src/domain/post/Post";
import { ApiPost } from "./post.api";

export class PostResource implements PostRepository {
    constructor(
        private readonly restClient: RestClient,
        // private readonly store: RecipeStore
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

    getPost(): Promise<Post> {
        throw new Error("Method not implemented.");
    }
}
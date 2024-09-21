import type { PostRepository } from "src/domain/post/post.repository";
import { GetPostsUseCase } from "./GetPostsUseCase";

export class PostService {
    private getPostsUseCase: GetPostsUseCase;

    constructor(postRepository:PostRepository) {
        this.getPostsUseCase = new GetPostsUseCase(postRepository)
    }

    async getPosts() {
        return await this.getPostsUseCase.execute();
    }
    async getPost(postId:string) {
        // return await this.getPostsUseCase.execute();
    }
}
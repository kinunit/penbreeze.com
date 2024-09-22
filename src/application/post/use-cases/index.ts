import type { PostRepository } from "src/domain/post/post.repository";
import { GetPostsUseCase } from "./GetPostsUseCase";
import { GetPostDetailsUseCase } from "./GetPostDetailsUseCase";

export class PostService {
    private getPostsUseCase: GetPostsUseCase;
    private getPostDetailsUseCase: GetPostDetailsUseCase;

    constructor(postRepository:PostRepository) {
        this.getPostsUseCase = new GetPostsUseCase(postRepository)
        this.getPostDetailsUseCase = new GetPostDetailsUseCase(postRepository)
    }

    async getPosts() {
        return await this.getPostsUseCase.execute();
    }
    async getPost(postId:string) {
        return await this.getPostDetailsUseCase.execute(postId);
    }
}
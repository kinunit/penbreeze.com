import type { AuthorRepository } from "src/domain/author/author.repository";
import type { PostRepository } from "src/domain/post/post.repository";
import type { AuthorView } from "../AuthorView";

export class GetAuthorUseCase {
    constructor(private readonly authorRepository: AuthorRepository){}

    async execute(id:number):Promise<AuthorView|null> {
        const author = await this.authorRepository.getAuthor(id)
        .catch((error)=> {
            console.log(error);
        })

        return null;
    }
}
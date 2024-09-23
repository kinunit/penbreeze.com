import type { AuthorRepository } from "src/domain/author/author.repository";
import { GetAuthorUseCase } from "./use-cases/GetAuthorUseCase";

export class AuthorService {
    private getAuthorUseCase:GetAuthorUseCase;

    constructor(authorRepository:AuthorRepository){
        this.getAuthorUseCase = new GetAuthorUseCase(authorRepository);
    }

    async getAuthor(id:number) {
        return await this.getAuthorUseCase.execute(id);
    }
}
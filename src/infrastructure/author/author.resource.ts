import { Author } from "src/domain/author/Author";
import type { AuthorRepository } from "src/domain/author/author.repository";
import type { RestClient } from "../RestClient";
import type { ApiAuthor } from "./author.api";

export class AuthorResource implements AuthorRepository {
    constructor(private readonly restClient:RestClient) {}

    async getAuthor(id: number): Promise<Author | null> {
        const apiAuthor = await this.restClient.get(`/wp-json/wp/v2/users/?id=${id}`)
        .catch((error)=> { console.log(error) })

        console.log(apiAuthor)

        return null
    }
    
}
import { Author } from "src/domain/author/Author";

export class ApiAuthor {
    constructor (
        public readonly id: number,
        public readonly firstName: string,
        public readonly lastName: string,
    ) {}

    toDomain() {
        return Author.fromProperties({
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName
        })
    }
}
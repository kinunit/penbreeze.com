import type { UserRepository } from "src/domain/user/user.repository";
import { UserView } from "../UserView";

export class GetUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(): Promise<UserView> {
    const user = await this.userRepository.getCurrentUser();
    return UserView.fromDomain(user);
  }
}
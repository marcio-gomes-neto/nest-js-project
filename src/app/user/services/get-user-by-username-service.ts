import { Injectable } from '@nestjs/common';
import { UserRepositoryPort } from 'src/core/ports/user-repository.port';
import { UserDocument } from 'src/database/model/user.model';
import { UserNotFoundByUsername } from 'src/utils/errors/user.errors';

@Injectable()
export class GetUserByUsernameService {
  constructor(private readonly userRepository: UserRepositoryPort) {}

  async execute(username: string): Promise<UserDocument> {
    const getUser = await this.userRepository.getUserByUsername(username);
    if (!getUser) throw new UserNotFoundByUsername();
    return getUser;
  }
}

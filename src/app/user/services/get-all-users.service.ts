import { Injectable } from '@nestjs/common';
import { UserRepositoryPort } from 'src/core/ports/user-repository.port';
import { UserDocument } from 'src/database/model/user.model';

@Injectable()
export class GetUsersAllUsersService {
  constructor(private readonly userRepository: UserRepositoryPort) {}

  async execute(): Promise<UserDocument[]> {
    const getUsers = await this.userRepository.getAllUsers();
    return getUsers;
  }
}

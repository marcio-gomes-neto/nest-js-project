import { Injectable } from '@nestjs/common';
import { UserRepositoryPort } from 'src/core/ports/user-repository.port';
import { UserDocument } from 'src/database/model/user.model';
import { UserAlreadyExists } from 'src/utils/errors/user.errors';
import { CreateNewUserBodyDTO } from '../dto/create-new-user-body.dto';
import { hash } from 'bcrypt';

@Injectable()
export class CreateNewUserService {
  constructor(private readonly userRepository: UserRepositoryPort) {}

  async execute(body: CreateNewUserBodyDTO): Promise<Partial<UserDocument>> {
    const getUser = await this.userRepository.getUserByUsername(body.username);
    if (getUser) throw new UserAlreadyExists();

    const newUser: Partial<UserDocument> = {
      username: body.username.trim(),
      password: await hash(body.password.trim(), 8),
      email: body.email.trim(),
      phone: body.phone,
    };

    await this.userRepository.createNewUser(newUser);
    return {
      ...newUser,
      password: undefined,
    };
  }
}

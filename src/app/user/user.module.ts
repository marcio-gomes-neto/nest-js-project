import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { GetUserByUsernameService } from './services/get-user-by-username-service';
import { CreateNewUserService } from './services/create-new-user-service';
import { GetUsersAllUsersService } from './services/get-all-users.service';

@Module({
  controllers: [UserController],
  providers: [
    GetUserByUsernameService,
    CreateNewUserService,
    GetUsersAllUsersService,
  ],
})
export class UserModule {
  static forRoot() {
    return {
      global: true,
      module: UserModule,
      exports: [UserModule],
    };
  }
}

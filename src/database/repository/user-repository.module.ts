import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModel, UserSchema } from '../model/user.model';
import { UserRepositoryPort } from 'src/core/ports/user-repository.port';
import { UserRepositoryProvider } from './user.repository.provider';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserModel.name, schema: UserSchema }]),
  ],
  providers: [UserRepositoryProvider],
  exports: [UserRepositoryPort],
})
export class UserRepositoryModule {
  static forRoot() {
    return {
      global: true,
      module: UserRepositoryModule,
      exports: [UserRepositoryModule],
    };
  }
}

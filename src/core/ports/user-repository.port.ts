import { UserDocument } from 'src/database/model/user.model';

export abstract class UserRepositoryPort {
  getUserByUsername: (username: string) => Promise<UserDocument | null>;
  createNewUser: (user: Partial<UserDocument>) => Promise<void>;
  getAllUsers: () => Promise<UserDocument[]>;
}

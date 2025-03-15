import { Injectable } from "@nestjs/common";
import { UserRepositoryPort } from "src/core/ports/user-repository.port";
import { UserDocument, UserModel } from "../model/user.model";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class UserRepositoryAdapter implements UserRepositoryPort {
    constructor(
        @InjectModel(UserModel.name)
        private readonly userModel: Model<UserModel>
    ){}

    async getUserByUsername(username: string): Promise<UserDocument | null> {
        return await this.userModel.findOne({ username });
    }
}
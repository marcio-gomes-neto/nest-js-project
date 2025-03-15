import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

@Schema({ collection: 'user' })
export class UserModel {
    @Prop({ type: String })
    username: string;

    @Prop({ type: String })
    password: string;

    @Prop({ type: String })
    email: string;

    @Prop({ type: String })
    phone: string;
}

export type UserDocument = HydratedDocument<UserModel>
export const UserSchema = SchemaFactory.createForClass(UserModel)
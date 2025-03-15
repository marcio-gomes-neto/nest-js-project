import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserRepositoryModule } from "./repository/user-repository.module";

@Module({
    imports: [
        MongooseModule.forRoot(process.env.MONGODB_URL ?? ''),
        UserRepositoryModule.forRoot(),
    ]
})
export class DatabaseModule {
    static forRoot() {
        return {
            global: true,
            module: DatabaseModule,
            exports: [DatabaseModule],
        }
    }
}
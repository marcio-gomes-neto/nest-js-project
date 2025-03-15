import { Provider } from "@nestjs/common";
import { UserRepositoryPort } from "src/core/ports/user-repository.port";
import { UserRepositoryAdapter } from "./user-repository.adapter";

export const UserRepositoryProvider: Provider<UserRepositoryPort> = { provide: UserRepositoryPort, useClass: UserRepositoryAdapter}
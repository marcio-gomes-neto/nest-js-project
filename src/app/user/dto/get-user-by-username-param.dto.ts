import { IsNotEmpty, IsString } from 'class-validator';

export class GetUserByUsernameParamDTO {
  @IsString()
  @IsNotEmpty()
  username: string;
}

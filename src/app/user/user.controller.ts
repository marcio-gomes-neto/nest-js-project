import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { GetUserByUsernameService } from './services/get-user-by-username-service';
import { CreateNewUserBodyDTO } from './dto/create-new-user-body.dto';
import { CreateNewUserService } from './services/create-new-user-service';
import { Response } from 'express';
import { GetUserByUsernameParamDTO } from './dto/get-user-by-username-param.dto';
import { GetUsersAllUsersService } from './services/get-all-users.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly getUserByUsernameService: GetUserByUsernameService,
    private readonly getUsersAllUsersService: GetUsersAllUsersService,
    private readonly createNewUserService: CreateNewUserService,
  ) {}

  @Get()
  async getAllUsers(@Res() res: Response) {
    try {
      const getAllUsers = await this.getUsersAllUsersService.execute();
      res.status(200).send(getAllUsers);
    } catch (error) {
      console.log(error);
      if (error.code && error.message)
        res.status(error.code).send(error.message);
      else res.status(500).send('Unexpected error.');
    }
  }

  @Get(':username')
  async getUserByUsername(
    @Res() res: Response,
    @Param() param: GetUserByUsernameParamDTO,
  ) {
    try {
      const getUserByUsername = await this.getUserByUsernameService.execute(
        param.username,
      );

      res.status(200).send(getUserByUsername);
    } catch (error) {
      console.log(error);
      if (error.code && error.message)
        res.status(error.code).send(error.message);
      else res.status(500).send('Unexpected error.');
    }
  }

  @Post()
  async createNewUser(
    @Res() res: Response,
    @Body() body: CreateNewUserBodyDTO,
  ) {
    try {
      const createUser = await this.createNewUserService.execute(body);
      res.status(201).send(createUser);
    } catch (error) {
      console.log(error);
      if (error.code && error.message)
        res.status(error.code).send(error.message);
      else res.status(500).send('Unexpected error.');
    }
  }
}

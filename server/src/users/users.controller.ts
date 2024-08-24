import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { subscribeUserDto } from './dto/subscribeUser.dto';
import { TokenGuard } from './guard/token.guard';

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Post()
  @UseGuards(TokenGuard)
  postUser(@Body() body: subscribeUserDto) {
    return this.usersService.saveUser(body);
  }
}

import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private usersService: UserService) {}

  // @Post('/create')
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }
}

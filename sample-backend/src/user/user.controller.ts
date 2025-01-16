import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

 @Get()
   getHello(): string {
     return this.userService.getHello();
   }
 
   @Post()
   createUser(@Body() createUserRequest: CreateUserDto) {
     this.userService.createUser(createUserRequest);
   }
 
   @Get('analytics')
   getAnalytics() {
     return this.userService.getAnalytics();
   }
}

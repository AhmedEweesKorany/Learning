import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
const arr:any = [{
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
}]
@Controller('users') // which mean /users
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}

  @Get()
  getUsers(@Query('role') role?:"INTERN" | "ADMIN") {
   if(role === "INTERN" || role === "ADMIN"){
     return this.UsersService.users.filter((user) => user.role === role);
   }
   return {
    message:"you are not allowed to see this",
   };
  }
  @Get('/interns')
  getUser2() {
    return {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
    };
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return {
      id,
      name: 'John Doe',
      email: 'john@example.com',
    };
  }

  @Post()
  createUser(@Body() user: Record<string, any>) {
    return {
      id: user.id,
      name: user.name,
    };
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() userUpdate: {}) {
    return {
      id,
      ...userUpdate,
    };
  }


  @Delete(':id')
  delete(@Param('id') id: string) {
    return arr.filter((user) => user.id !== id);
  }
}

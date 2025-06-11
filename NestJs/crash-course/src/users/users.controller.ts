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
   return this.UsersService.findAll(role);
  }
  

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.UsersService.findOne(+id);
  }

  @Post()
  createUser(@Body() user: {id: number; name: string; email: string; role: string}) {
    return this.UsersService.create(user)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() userUpdate: {}) {
    return this.UsersService.update(+id, userUpdate);
  }


  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.UsersService.delete(+id);
  }
}

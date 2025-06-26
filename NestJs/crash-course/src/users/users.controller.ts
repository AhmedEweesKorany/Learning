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
@Controller({
  path: 'users', // This will set the base path for all routes in this controller
}) // which mean /users
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}

  /**
   * Retrieves a list of users, optionally filtered by role
   * @param role - Optional parameter to filter users by role (INTERN or ADMIN)
   * @returns An array of users matching the specified role, or all users if no role is provided
   */
  @Get()
  getUsers(@Query('role') role?:"INTERN" | "ADMIN") {
   return this.UsersService.findAll(role);
  }
  

  @Get(':id')
  getUserById(@Param('id') id ) {
    return this.UsersService.findOne(+id);
  }

  @Post()
  createUser(@Body() user: {id: number; name: string; email: string; role: string}) {
    return this.UsersService.create(user)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() userUpdate: { name: string; email: string; role: string }) {
    return this.UsersService.update(+id, userUpdate);
  }


  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.UsersService.delete(+id);
  }
}

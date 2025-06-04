import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('users')// which mean /users


export class UsersController {
    @Get() // which mean /users
    getUsers(){ // get users
        return "get users 2ewds";
    }
    
    @Get(':id')  // :id is a parameter
    getUserById(@Param('id')id:string){ // GET SINGLE USER
        return `get user by id ${id}`;
    }
    
    @Post()
    createUser(@Body() user:{}){
        return user;
    }

}


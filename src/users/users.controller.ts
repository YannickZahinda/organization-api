import { Controller, Get, Post, Param, Body, Delete, Patch } from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';

@Controller('auth')
export class UsersController {
    @Post('/signup')
    createUser(@Body() body: createUserDto){
        console.log(body)
    }
}

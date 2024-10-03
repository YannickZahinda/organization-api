import { Controller, Get, Post, Param, Body, Delete, Patch, Query } from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
    constructor(private usersService: UsersService) { }
    @Post('/signup')
    createUser(@Body() body: createUserDto) {
       return this.usersService.create(body.name, body.age, body.sex, body.title, body.employment_type, body.email, body.password, body.department)
    }

    @Get('/:id')
    findUser(@Param('id') id: string){
       return this.usersService.findOne(parseInt(id))
    }

    @Get()
    findAllUsers(@Query('email') email: string) {
        return this.usersService.find(email);
    }
}

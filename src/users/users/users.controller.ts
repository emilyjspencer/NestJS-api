import { Body, Controller, Get, Post } from '@nestjs/common';
import { NewUserDto } from './new-user.dto';

@Controller('users')
export class UsersController {

    @Get()
    create() {
        
    }

    @Post()
    createUser(@Body() body: NewUserDto) {
        console.log(body);
    }

 

}

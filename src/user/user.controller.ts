import { Controller, Get, Request, Headers, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(@Request() req, @Headers() headers) {
    console.log(req.query);
    
    return {
      code: 200,
      msg: req.query.name
    }
  }

  @Post()
  findAllPost(@Body() body) {
    console.log(body, 'body');
    
    return {
      code: 200,
      msg: '成功post'
    }
  }

  @Get(':id')
  findId(@Param() params, @Headers() headers) {
    console.log(params);
    console.log(headers, 'headersheaders');
    
    return {
      code: 200,
      msg: "成功getid"
    }
  }
}

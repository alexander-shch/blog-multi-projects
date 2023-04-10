import { Controller, Get, Post, Request } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/decorators/public.decorator';

import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private users: UsersService) {}

  @Public()
  @Get()
  getAllUsers() {
    return this.users.findAll();
  }

  @Public()
  @Post()
  @ApiBody({
    schema: {
      type: 'object',
      required: ['email', 'name', 'password'],
      properties: {
        email: {
          type: 'string',
        },
        name: {
          type: 'string',
        },
        password: {
          type: 'string',
        },
      },
    },
  })
  createUser(@Request() req) {
    return this.users.create(req.body);
  }
}

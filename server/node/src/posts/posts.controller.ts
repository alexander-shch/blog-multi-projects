import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { PostsService } from './posts.service';

@ApiTags('posts')
@Controller('posts')
export class PostsController {
  constructor(private posts: PostsService) {}

  @Get()
  getAllPosts(@Request() req) {
    return this.posts.getAllUserPosts(req.user);
  }

  @Post()
  create(@Request() req, @Body() body) {
    return this.posts.create(body, req.user);
  }
}

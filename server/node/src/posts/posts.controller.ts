import { Controller, Get, Request } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { PostsService } from './posts.service';

@ApiTags('posts')
@Controller('posts')
export class PostsController {
  constructor(private posts: PostsService) {}

  @Get()
  getAllPosts(@Request() req) {
    this.posts.getAllUserPosts(req.user);
  }
}

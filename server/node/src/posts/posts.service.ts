import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  async getAllUserPosts(userId: number) {
    return Promise.resolve([]);
  }
}

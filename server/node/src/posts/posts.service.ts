import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/users.entity';
import { ApplyEntityFields } from 'src/utils/db';
import { DataSource, Repository } from 'typeorm';

import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private postRepo: Repository<Post>,
    private dataSource: DataSource,
  ) {}

  async getAllUserPosts(user: User) {
    return await this.postRepo.find({
      relations: ['user'],
      where: { user: { id: user.id } },
    });
  }

  async create(postData: Post, user: User) {
    let error: any;
    let res: Post;

    const ins = ApplyEntityFields(new Post(), postData);
    ins.user = ApplyEntityFields(new User(), user);

    const qr = this.dataSource.createQueryRunner();

    await qr.connect();
    await qr.startTransaction();

    try {
      res = await qr.manager.save(ins);
      await qr.commitTransaction();
    } catch (e) {
      error = e;
      await qr.rollbackTransaction();
    } finally {
      await qr.release();
    }

    if (!!error) {
      console.error(error);

      throw new HttpException(error.detail, HttpStatus.BAD_REQUEST);
    }

    return res;
  }
}

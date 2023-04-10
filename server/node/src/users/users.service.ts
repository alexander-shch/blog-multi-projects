import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApplyEntityFields } from 'src/utils/db';
import { DataSource, Repository } from 'typeorm';

import { User } from './entities/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    private dataSource: DataSource,
  ) {}

  async findAll() {
    return this.userRepo.find();
  }

  async create(userObj: Pick<User, 'email' | 'name' | 'password'>) {
    let error: any;
    let res: User;

    const ins = ApplyEntityFields(new User(), userObj);

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
      throw new HttpException(error.detail, HttpStatus.BAD_REQUEST);
    }

    return res;
  }

  async findOne(email: string): Promise<User | undefined> {
    return this.userRepo.findOne({ where: { email } });
  }
}

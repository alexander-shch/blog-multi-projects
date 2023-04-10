import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { Post } from './posts/entities/post.entity';
import { PostsController } from './posts/posts.controller';
import { PostsModule } from './posts/posts.module';
import { User } from './users/entities/users.entity';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    PostsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5555,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      synchronize: true,
      entities: [User, Post],
    }),
  ],
  controllers: [AppController, PostsController, UsersController],
  providers: [AppService],
})
export class AppModule {}

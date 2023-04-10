import { ApiProperty } from '@nestjs/swagger';
import { Post } from 'src/posts/entities/post.entity';
import {
  Column,
  Entity,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @ApiProperty({ example: 1, description: 'User ID' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({})
  @Column()
  name: string;

  @ApiProperty({})
  @Column({
    unique: true,
  })
  email: string;

  @ApiProperty({})
  @Column()
  password?: string;

  @OneToMany(() => Post, (post) => post.user)
  @JoinTable()
  posts: Post[];
}

import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @ApiProperty({ example: 1, description: 'User ID' })
  @PrimaryGeneratedColumn()
  userId: number;

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
}

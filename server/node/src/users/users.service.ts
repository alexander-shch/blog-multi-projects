import { Injectable } from '@nestjs/common';

export interface User {
    userId: number,
    name: string,
    email: string,
    password?: string
};

@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
            userId: 1,
            name: 'john',
            email: 'john@test.com',
            password: '1234',
        },
        {
            userId: 2,
            name: 'maria',
            email: 'maria@test.com',
            password: '12345',
        },
    ];

    async findOne(name: string): Promise<User | undefined> {
        return this.users.find(user => user.name === name);
    }
}
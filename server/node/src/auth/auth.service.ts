import {
  HttpException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(email, pass) {
    if (!email || !pass) {
      throw new HttpException(
        'Both email and passwords are required to make an authentication request',
        400,
      );
    }
    const user = await this.usersService.findOne(email);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { name: user.name, id: user.id };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}

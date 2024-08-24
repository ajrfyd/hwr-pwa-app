import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { UsersService } from '../users.service';

@Injectable()
export class TokenGuard implements CanActivate {
  constructor(private readonly usersService: UsersService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const { token } = req.body;
    const isExist = await this.usersService.isExistToken(token);
    if (isExist) throw new BadRequestException('이미 존재하는 토큰입니다.');

    return true;
  }
}

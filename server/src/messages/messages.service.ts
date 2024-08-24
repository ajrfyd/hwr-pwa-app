import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersModel } from 'src/users/entity/users.entity';
import { Repository } from 'typeorm';
import { UsersService } from '../users/users.service';

@Injectable()
export class MessagesService {
  constructor(private readonly UsersService: UsersService) {}

  async sendStartMessage() {
    const users = await this.UsersService.getUsers();
    fetch('http://localhost:3330/messages/push/start', {
      method: 'post',
      body: JSON.stringify({
        tokens: users.map((user) => user.token),
        title: 'Bus가 센터를 출발하였습니다.',
        body: `${Date.now()}에 버스가 출발하였습니다.`,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).catch((e) => {
      throw new InternalServerErrorException(
        e.message ?? '알수 없는 에러 발생.',
      );
    });

    return 1;
  }
}

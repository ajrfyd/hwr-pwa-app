import { BadRequestException, Injectable } from '@nestjs/common';
import { subscribeUserDto } from './dto/subscribeUser.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { UsersModel } from './entity/users.entity';
import { StopsModel } from 'src/stops/entity/stops.entity';
import { IsIn } from 'class-validator';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersModel)
    private readonly usersRepository: Repository<UsersModel>,
    @InjectRepository(StopsModel)
    private readonly stopsRepository: Repository<StopsModel>,
  ) {}

  async getUsers() {
    return await this.usersRepository.find();
  }

  async saveUser(dto: subscribeUserDto) {
    // const stops = await this.stopsRepository.findAndCount({
    //   where: {
    //     id: In([...dto.stopIds]),
    //   },
    // });
    // const leng = dto.stopIds.length;

    // if (stops.length !== leng)
    //   throw new BadRequestException('존재하지 않는 정류장이 있습니다.');

    const user = await this.usersRepository.create({
      token: dto.token,
      createdTokenTime: new Date(Date.now()),
      // stops: dto.stopIds.map((stop) => ({ id: stop })),
    });

    console.log(user);
    return await this.usersRepository.save(user);
  }

  async isExistToken(token: string) {
    return await this.usersRepository.exists({
      where: {
        token,
      },
    });
  }
}

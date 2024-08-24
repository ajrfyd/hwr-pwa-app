import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { StopsService } from './stops.service';
import { InjectRepository } from '@nestjs/typeorm';
import { DirectionEnum } from '../common/constants/enum';
import { StopsModel } from './entity/stops.entity';
import { CreateStopDto } from './dto/createStop.dto';
import admin from 'firebase-admin';

@Controller('api/stops')
export class StopsController {
  constructor(private readonly stopsService: StopsService) {}

  @Get()
  getStops() {
    return this.stopsService.getAllStops();
  }

  @Post()
  postStop(@Body() body: CreateStopDto) {
    // throw new BadRequestException('어떤 이유로 실패했습니다.');
    // console.log(body);
    return this.stopsService.createStop(body);
  }

  @Get('pusht')
  pushTest() {
    const token =
      'e-9lMGJCFVmLP16FRHQ5QE:APA91bGoLPHAoeMMkicUdxOaqPFBWa7Qe_HEeHRib7tUMFz_-0vI03M1hG4b5vxwd_WLONVbFZQ6e4RYIfWJB-tZYuiwGEuMK_W5aHMH6rdG-5eEm2J1JyLjeVNg9tZhaVR8fXK-pNRx';
    const message = {
      data: {
        title: '이것은 제목 입니다.',
        body: '이것은 컨텐츠 입니다.',
        icon: '/icons/hwr-logo.png',
      },
      token,
    };
    admin
      .messaging()
      .send(message)
      .then(console.log)
      .catch((e) => {
        throw new BadRequestException(e.message);
      });

    return '??';
  }
}

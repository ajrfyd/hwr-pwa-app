import { Controller, Get, Post } from '@nestjs/common';
import { StopsService } from './stops.service';
import { InjectRepository } from '@nestjs/typeorm';
import { DirectionEnum, StopsModel } from './entity/stops.entity';

@Controller('api/stops')
export class StopsController {
  constructor(
    @InjectRepository(StopsModel) private readonly stopsService: StopsService,
  ) {}

  @Get()
  getStops() {
    return this.stopsService.getAllStops();
  }

  @Post()
  postStop() {
    return this.stopsService.createStop({
      name: '',
      direction: DirectionEnum.GO,
      lat: 1,
      lng: 1,
    });
  }
}

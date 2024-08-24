import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { StopsModel } from './entity/stops.entity';
import { CreateStopDto } from './dto/createStop.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StopsService {
  constructor(
    @InjectRepository(StopsModel)
    private readonly stopsRepository: Repository<StopsModel>,
  ) {}

  async getAllStops() {
    return await this.stopsRepository.find({
      where: {},
      order: {
        order: 'ASC',
      },
    });
  }

  async createStop(dto: CreateStopDto) {
    const stop = await this.stopsRepository.create(dto);
    return await this.stopsRepository.save(stop);
  }
}

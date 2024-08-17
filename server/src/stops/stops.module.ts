import { Module } from '@nestjs/common';
import { StopsService } from './stops.service';
import { StopsController } from './stops.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StopsModel } from './entity/stops.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StopsModel])],
  controllers: [StopsController],
  providers: [StopsService],
})
export class StopsModule {}

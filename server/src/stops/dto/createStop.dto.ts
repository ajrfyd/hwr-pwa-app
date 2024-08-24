import { PickType } from '@nestjs/mapped-types';
import { StopsModel } from '../entity/stops.entity';

export class CreateStopDto extends PickType(StopsModel, [
  'name',
  'alias',
  'lat',
  'lng',
  'direction',
  'line',
  'order',
]) {}

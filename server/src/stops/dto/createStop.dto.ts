import { PickType } from '@nestjs/mapped-types';
import { StopsModel } from '../entity/stops.entity';

export class CreateStopDto extends PickType(StopsModel, [
  'name',
  'lat',
  'lng',
  'direction',
]) {}

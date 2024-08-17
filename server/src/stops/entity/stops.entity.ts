import { IsDate, IsInt, isNumber, IsOptional, IsString } from 'class-validator';
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { isFloat64Array } from 'util/types';

export enum DirectionEnum {
  GO = 'forward',
  Back = 'reverse',
}

@Entity()
export class StopsModel {
  @IsString()
  @PrimaryColumn({
    type: 'uuid',
  })
  id: string;

  @IsString()
  @Column()
  name: string;

  @Column('decimal', { precision: 10, scale: 8 })
  lat: number;

  @Column('decimal', { precision: 11, scale: 8 })
  lng: number;

  @IsDate()
  @IsOptional()
  @Column({
    nullable: true,
  })
  departureTime: Date;

  @IsDate()
  @IsOptional()
  @Column({
    nullable: true,
  })
  arrivalTime: Date;

  @Column({
    type: 'enum',
    enum: Object.values(DirectionEnum),
  })
  direction: DirectionEnum;
}

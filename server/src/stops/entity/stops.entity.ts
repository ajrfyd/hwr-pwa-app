import {
  IsDate,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  IsTimeZone,
  Length,
} from 'class-validator';
import { BaseModel } from 'src/common/entity/base.entity';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { DirectionEnum, LineEnum } from 'src/common/constants/enum';
import { UsersModel } from 'src/users/entity/users.entity';

@Entity()
export class StopsModel extends BaseModel {
  @Column({
    length: 50,
    type: 'varchar',
    nullable: false,
  })
  @IsString({
    message: '3자 이상 50자 미만으로 작성해 주세요.',
  })
  @Length(3, 50)
  name: string;

  @Column({
    length: 50,
    type: 'varchar',
  })
  @Length(3, 50)
  @IsString({
    message: '3자 이상 50자 미만으로 작성해 주세요.',
  })
  @IsOptional()
  alias: string;

  @Column('decimal', { precision: 10, scale: 8 })
  lat: number;

  @Column('decimal', { precision: 11, scale: 8 })
  lng: number;

  @IsTimeZone()
  @Column({
    type: 'time',
    nullable: false,
  })
  arrivalTime: string;

  @IsTimeZone()
  @IsOptional()
  @Column({
    nullable: true,
  })
  prevArrivalTime: string;

  @Column({
    type: 'enum',
    enum: Object.values(DirectionEnum),
    nullable: true,
    // default: DirectionEnum.GO,
  })
  @IsEnum(() => DirectionEnum)
  direction: DirectionEnum;

  @Column({
    type: 'enum',
    enum: Object.values(LineEnum),
    default: LineEnum.SN,
  })
  line: LineEnum;

  @Column({
    type: 'int2',
    nullable: false,
  })
  @IsInt()
  order: number;

  @ManyToMany(() => UsersModel, (user) => user.stops)
  @JoinTable()
  users: UsersModel[];
}

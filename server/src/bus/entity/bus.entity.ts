import { LineEnum } from 'src/common/constants/enum';
import { BaseModel } from 'src/common/entity/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class BusModel extends BaseModel {
  @Column({
    type: 'enum',
    enum: Object.values(LineEnum),
    default: LineEnum.SN,
  })
  line: LineEnum;

  @Column('decimal', { precision: 10, scale: 8 })
  lat: number;

  @Column('decimal', { precision: 11, scale: 8 })
  lng: number;

  @Column({
    nullable: true,
    default: null,
  })
  isRunning: 'running' | null;
}

import { IsDate, IsString } from 'class-validator';
import { BaseModel } from 'src/common/entity/base.entity';
import { StopsModel } from 'src/stops/entity/stops.entity';
import { Column, Entity, ManyToMany } from 'typeorm';

@Entity()
export class UsersModel extends BaseModel {
  @ManyToMany(() => StopsModel, (stop) => stop.users)
  stops: StopsModel[];

  @Column({
    unique: true,
  })
  @IsString()
  token: string;

  @Column({
    type: 'date',
  })
  @IsDate()
  createdTokenTime: Date;
}

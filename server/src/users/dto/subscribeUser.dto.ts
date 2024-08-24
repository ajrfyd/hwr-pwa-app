import { IsOptional, IsString } from 'class-validator';

export class subscribeUserDto {
  // @IsString({ each: true })
  // @IsOptional()
  // stopIds?: string[] | null;

  @IsString()
  token: string;
}

import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class LengthPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (!value.length) throw new BadRequestException('입력을 해야죠...');
    return value;
  }
}

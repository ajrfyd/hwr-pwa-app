import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { response, Response } from 'express';
import { join } from 'path';
import { BUILD_PATH } from './common/constants/path.const';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // serveFile(@Res() res: Response) {
  //   return res.sendFile('index.html', { root: 'public/build' });
  //   // return this.appService.getHello();
  // }

  // @Get('*')
  // serveReact(@Res() res: Response) {
  //   return res.sendFile('index.html', { root: 'public/build' });
  // }

  @Get()
  @Get('*')
  serveReact(@Res() res: Response) {
    return res.sendFile(BUILD_PATH);
  }
}

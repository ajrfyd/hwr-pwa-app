import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { join } from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  serveFile(@Res() res: Response) {
    return res.sendFile('index.html', { root: 'public/build' });
    // return this.appService.getHello();
  }
}

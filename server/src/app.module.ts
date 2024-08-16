import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
import { PUBLIC_PATH, BUILD_PATH } from './common/constants/path.const';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      cache: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: BUILD_PATH,
      serveRoot: '/',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

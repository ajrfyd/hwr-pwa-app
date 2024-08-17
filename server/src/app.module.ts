import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
import { PUBLIC_PATH, BUILD_PATH } from './common/constants/path.const';
import { StopsModule } from './stops/stops.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StopsModel } from './stops/entity/stops.entity';

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
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: true,
      entities: [StopsModel],
    }),
    StopsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
import { PUBLIC_PATH, BUILD_PATH } from './common/constants/path.const';
import { StopsModule } from './stops/stops.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StopsModel } from './stops/entity/stops.entity';
import { UsersModule } from './users/users.module';
import { BusModule } from './bus/bus.module';
import { BusModel } from './bus/entity/bus.entity';
import { UsersModel } from './users/entity/users.entity';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      cache: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: BUILD_PATH,
      // serveRoot: '/',
      exclude: ['/api*'],
      serveStaticOptions: {
        index: false,
        setHeaders: (res, path) => {
          if (path.endsWith('.js')) {
            res.set('Content-Type', 'application/javascript');
          }
        },
      },
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: true,
      entities: [StopsModel, BusModel, UsersModel],
    }),
    StopsModule,
    UsersModule,
    BusModule,
    MessagesModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}

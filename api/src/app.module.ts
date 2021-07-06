import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UserTypeModule } from './user-type/user-type.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    DatabaseModule,
    UserModule,
    UserTypeModule
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService,
    Logger
  ],
})
export class AppModule {}
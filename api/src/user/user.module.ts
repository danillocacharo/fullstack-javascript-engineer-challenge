import { Module } from '@nestjs/common';
// import { User } from './user.entity';
import { UserController } from './user.controller';
// import { SequelizeModule } from '@nestjs/sequelize';
import { UserService } from './user.service';
import { userProvider } from './user.provider';

@Module({
    imports: [
    ],
    controllers: [
      UserController
    ],
    providers: [
      UserService,
      userProvider
    ],
})
export class UserModule {}

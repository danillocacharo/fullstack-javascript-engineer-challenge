import { Module } from '@nestjs/common';
// import { UserType } from './user-type.entity';
import { UserTypeController } from './user-type.controller';
import { UserTypeService } from './user-type.service';
// import { SequelizeModule } from '@nestjs/sequelize';

@Module({
    imports: [
    ],
    controllers: [
      UserTypeController
    ],
    providers: [
      UserTypeService
    ],
})
export class UserTypeModule {}

import { Test, TestingModule } from '@nestjs/testing';
import { UserTypeController } from './user-type.controller';
import { UserTypeService } from './user-type.service';

describe('UserTypeController', () => {
  let userTypeController: UserTypeController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserTypeController],
      providers: [UserTypeService],
    }).compile();

    userTypeController = app.get<UserTypeController>(UserTypeController);
  });

  describe('root', () => {
    it('should be defined', () => {
      expect(userTypeController).toBeDefined();
    });
  });
  
});
import { Inject, Injectable, Logger } from '@nestjs/common';
import { UserType } from 'src/user-type/user-type.entity';
import { User } from './user.entity';
import { configure, getLogger } from "log4js";
const logger = getLogger();
logger.level = "debug";

@Injectable()
export class UserService {

  constructor() { }

  getAll(): any {
    logger.info('findAll user as ' + Date());
    return User.findAll({ include: [UserType] });
  }

  getById(id): any {
    logger.info('findById user: ' + id + ' as ' + Date());
    return User.findByPk(id, { include: [UserType] });
  }

  create(user): any {
    logger.info('created user: ' + user.toString() + ' as ' + Date());
    return User.create(user);
  }

  update(id, user): any {
    logger.info('updated user: ' + user.toString() + ' as ' + Date());
    return User.update(user, {
      where: { id }
    });
  }

  delete(id): any {
    logger.info('destroyed user: ' + id + ' as ' + Date());
    return User.destroy({
      where: { id }
    });
  }

}

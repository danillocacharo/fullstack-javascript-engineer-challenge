import { Inject, Injectable } from '@nestjs/common';
import { UserType } from './user-type.entity';
import { configure, getLogger } from "log4js";
configure("./logs");
const logger = getLogger();
logger.level = "debug";

@Injectable()
export class UserTypeService {

  constructor() { }

  getAll(): any {
    logger.info('findAll usertype as ' + Date());
    return UserType.findAll();
  }

  getById(id): any {
    logger.info('findById usertype: ' + id + ' as ' + Date());
    return UserType.findByPk(id);
  }

  create(user): any {
    logger.info('created usertype: ' + user.toString() + ' as ' + Date());
    return UserType.create(user);
  }

  update(id, usertype): any {
    logger.info('updated usertype: ' + usertype.toString() + ' as ' + Date());
    return UserType.update(usertype, {
      where: { id }
    });
  }

  delete(id): any {
    logger.info('destroyed usertype: ' + id + ' as ' + Date());
    return UserType.destroy({
      where: { id }
    });
  }

}

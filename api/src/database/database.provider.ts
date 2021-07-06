import { Sequelize } from 'sequelize-typescript';
import { User } from '../user/user.entity';
import { UserType } from '../user-type/user-type.entity';

export const databaseProvider = {
    provide: 'SequelizeInstance',
    useFactory: () => {
        return new Sequelize({
            dialect: 'mysql',
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            username: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_DATABASE,
            models: [User, UserType],
        });
    }
};
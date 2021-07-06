module.exports = {
    development: {
        username: process.env.DB_USER || 'maxxidata',
        password: process.env.DB_PASS || 'maxxidata',
        database: process.env.DB_DATABASE || 'maxxidata_db',
        host: process.env.DB_HOST || 'localhost',
        port: Number(process.env.DB_PORT) || 3306,
        dialect: 'mysql',
        logging: false,
        force: true
    },
    production: {
        username: process.env.DB_USER || 'maxxidata',
        password: process.env.DB_PASS || 'maxxidata',
        database: process.env.DB_DATABASE || 'maxxidata_db',
        host: process.env.DB_HOST || 'localhost',
        port: Number(process.env.DB_PORT) || 3306,
        dialect: 'mysql',
        logging: false,
        force: true
    },
    test: {
        username: process.env.DB_USER || 'maxxidata',
        password: process.env.DB_PASS || 'maxxidata',
        database: process.env.DB_DATABASE || 'maxxidata_db',
        host: process.env.DB_HOST || 'localhost',
        port: Number(process.env.DB_PORT) || 3306,
        dialect: 'mysql',
        logging: true,
        force: true
    }
};
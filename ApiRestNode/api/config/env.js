const env = {
    database: 'api-node',
    username: 'postgres',
    password: 'm1nfroy900',
    host: 'localhost',
    dialect: 'postgres',
    logging: true,
    port: 5432,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}

module.exports = env;
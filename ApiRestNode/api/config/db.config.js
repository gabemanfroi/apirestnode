const env = require('./env.js');
const Sequelize = require('sequelize');
const modelPaciente = require('../model/paciente.model.js')
const modelConsulta = require('../model/consulta.model.js')

const conexaoSequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    dialect: env.dialect,
    operatorsAliases: false,
    logging: env.logging,
    pool: {
        max: env.pool.max,
        min: env.pool.min,
        acquire: env.pool.acquire,
        idle: env.pool.idle
    }
});

const db = {};

db.Sequelize        = Sequelize;
db.conexaoSequelize = conexaoSequelize;

db.pacientes = modelPaciente(conexaoSequelize, Sequelize);
db.consultas = modelConsulta(conexaoSequelize, Sequelize);


module.exports = db;
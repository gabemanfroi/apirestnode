const { conexaoSequelize, Sequelize } = require("../config/db.config");

module.exports = (conexaoSequelize, Sequelize) => {

    const Paciente = conexaoSequelize.define('paciente', {

        id_paciente: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nome: {
            type: Sequelize.STRING(60),
            allowNull: false
        },

        sobrenome: {
            type: Sequelize.STRING(60),
            allowNull: true
        },

        idade: {
            type: Sequelize.INTEGER,
            allowNull: true
        },

        peso: {
            type: Sequelize.FLOAT
        }

    });

    return Paciente;

}
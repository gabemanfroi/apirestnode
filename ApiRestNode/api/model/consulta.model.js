const { conexaoSequelize, Sequelize } = require("../config/db.config");

module.exports = (conexaoSequelize, Sequelize) => {

    const Consulta = conexaoSequelize.define('consulta', {

        id_consulta: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        medico_responsavel: {
            type: Sequelize.STRING(60),
        },

        categoria_consulta:{
            type: Sequelize.STRING(60),
        },

        paciente:{
            type : Sequelize.STRING(60),
        },

        valor:{
            type: Sequelize.FLOAT
        }
        
    });

    return Consulta;

}
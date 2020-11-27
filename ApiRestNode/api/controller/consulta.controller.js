const db = require('../config/db.config.js');
const Consulta = db.consultas;
const sequelize = db.Sequelize;


const listar = (req, res) => {
   Consulta.findAll().then(consultas => {
    res.send(consultas); 
   });
}

const post = async (req, res) => {
   try{ 
      const post = await Consulta.create(req.body);
      return res.status(201).json({
         post,
      })
   }catch(error){
      return res.status(500).json({error: error.message});
   }
}
const put = async (req, res) => {
   try{
       console.log(req);
      const { consultaId  }  = req.params;
      const [updated] = await Consulta.update(req.body, {
         where : { id_consulta: consultaId}
      });
      if(updated){
         const updatedConsulta = await Consulta.findOne({
            where : {
               id_consulta : consultaId}});
         return res.status(200).json({consulta : updatedConsulta})
      }
      throw new Error("Consulta não encontrado");
   }
   catch(error){
      console.log(req.params);
      console.log(error.message);
      return res.status(500).send(error.message);
   }
}

const _delete = async (req, res) => {
   try{
      const { consultaId  }  = req.params;
      const deleted = await Consulta.destroy({
         where : { id_consulta: consultaId}
      });
      if(deleted){
         return res.status(204).send("Consulta deletado");
      }
      throw new Error("Consulta não encontrado");
   }
   catch(error){
      console.log(req.params);
      console.log(error.message);
      return res.status(500).send(error.message);
   }
}

const getConsultaById = async (req, res) => {
   try{
      const {consultaId} = req.params;
      console.log(req.params);
      const consulta = await Consulta.findOne({
         where: { id_consulta : consultaId},
      });
      if(consulta){
         return res.status(200).json({consulta});
      }
      return res.status(404).send('Consulta não encontrada');
   }catch(error){
      return res.status(500).send(error.message);
   }

}

module.exports = {
    listar, post, put, _delete, getConsultaById
}
const db = require('../config/db.config.js');
const Paciente = db.pacientes;
const sequelize = db.Sequelize;


exports.listar = (req, res) => {
   Paciente.findAll().then(pacientes => {
    res.send(pacientes); 
   });
}


exports.post = async (req, res) => {
   try{
      console.log(req.body);
      const post = await Paciente.create(req.body);
      return res.status(201).json({
         post,
      })
   }catch(error){
      return res.status(500).json({error: error.message});
   }
}


exports.put = async (req, res) => {
   try{
      const { pacienteId  }  = req.params;
      const [updated] = await Paciente.update(req.body, {
         where : { id_paciente: pacienteId}
      });
      if(updated){
         const updatedPaciente = await Paciente.findOne({
            where : {
               id_paciente : pacienteId}});
         return res.status(200).json({paciente : updatedPaciente})
      }
      throw new Error("Paciente não encontrado");
   }
   catch(error){
      console.log(req.params);
      console.log(error.message);
      return res.status(500).send(error.message);
   }
}

exports.delete = async (req, res) => {
   try{
      const { pacienteId  }  = req.params;
      const deleted = await Paciente.destroy({
         where : { id_paciente: pacienteId}
      });
      if(deleted){
         return res.status(204).send("Paciente deletado");
      }
      throw new Error("Paciente não encontrado");
   }
   catch(error){
      console.log(req.params);
      console.log(error.message);
      return res.status(500).send(error.message);
   }
}

exports.getPacienteById = async (req, res) => {
   try{
      const {pacienteId} = req.params;
      console.log(req.params);
      const paciente = await Paciente.findOne({
         where: { id_paciente : pacienteId},
      });
      if(paciente){
         return res.status(200).json({paciente});
      }
      return res.status(404).send('Paciente não encontrado');
   }catch(error){
      return res.status(500).send(error.message);
   }

}
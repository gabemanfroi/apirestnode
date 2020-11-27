module.exports = function(app) {

    const pacientes = require('../controller/paciente.controller.js');

    app.get('/api/pacientes', pacientes.listar);
    app.get('/api/pacientes/:pacienteId', pacientes.getPacienteById);
    app.post('/api/pacientes/create', app.urlencodedParser, pacientes.post);
    app.post('/api/pacientes/create', pacientes.post);
    app.put('/api/pacientes/edit/:pacienteId', pacientes.put);
    app.delete('/api/pacientes/delete/:pacienteId', pacientes.delete);

}
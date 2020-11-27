module.exports = function(app) {

    const consultas = require('../controller/consulta.controller.js');

    app.get('/api/consultas', consultas.listar);
    app.get('/api/consultas/:consultaId', consultas.getConsultaById);
    app.post('/api/consultas/create', consultas.post);
    app.put('/api/consultas/edit/:consultaId', consultas.put);
    app.delete('/api/consultas/delete/:consultaId', consultas._delete);

}
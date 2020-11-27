const express = require('express');
const app = express();
const http = require('http');
const db = require("./api/config/db.config.js")
const pacienteRouter = require('./api/router/paciente.router.js')
const consultaRouter = require('./api/router/consulta.router.js');
const bodyParser = require('body-parser');


this.http = http.createServer(app);

db.conexaoSequelize.sync({ force: false }).then(() => {
    console.log('Exclusão e sincronização!!')
});

const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.urlencodedParser = urlencodedParser;

app.use(bodyParser.json());
pacienteRouter(app);
consultaRouter(app);



const server = app.listen(8080, function () {
    console.log(`Servidor iniciado`);
});



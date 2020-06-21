const express = require('express');
const routes = express.Router();
const instructors = require('./instructors');

routes.get('/', function(request, response) {
  return response.redirect('/instructors');
});

routes.get('/instructors', function(request, response) {
  return response.render('instructors/index');
});

routes.get('/instructors/create', function(request, response) {
  return response.render('instructors/create');
});

routes.get('/instructors/:id', instructors.show);

routes.get('/instructors/:id/edit', instructors.edit);

//rota POST ('/camiho url'), chama variavel externa junto com sua função
routes.post('/instructors', instructors.post);

routes.put('/instructors', instructors.put)



routes.get('/members', function(request, response) {
  return response.send('members');
});

module.exports = routes
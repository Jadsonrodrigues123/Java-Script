
//desestrutura o Obj age importando ele(e funções) de outro arquivo
const { age, date_nasc, date_c } = require('../../lib/utils');

module.exports = {
  index(request, response) {
  return response.render('instructors/index', { instructors: data.instructors })
    
  },

  create(request, response) {
  return response.render('instructors/create')

  },

  post(request, response) {
    
    //Organiza os dados do body por chaves
    const keys = Object.keys(request.body) 

    for (key of keys) {
      if (request.body[key] == "") {
        return response.send('Por favor preencha todos os campos');
      }
    }

    //desestuturando o req.body para obter as variaveis disponíveis
    let { avatar_url, birth, name, services, gender } = request.body

    return
  },

  show(request, response) {
    return

  },

  edit(request, response) {

    return

  },

  put(request, response) {
    //Organiza os dados do body por chaves
    const keys = Object.keys(request.body) 

    for (key of keys) {
      if (request.body[key] == "") {
        return response.send('Por favor preencha todos os campos');
      }
    }
    
    return

  },

  delete(request, response) {

    return

  },
}

const { age, date } = require('../../lib/utils');
//desestrutura o Obj age importando ele(e funções) de outro arquivo
const Member = require('../models/Member');

module.exports = {
  index(request, response) {

     Member.all(function(members) {
      return response.render('members/index', { members })
     })    
    
  },

  create(request, response) {

    Member.instructorsSelectOptions(function(options) {
      return response.render('members/create', { instructorOptions: options })
    })
  },

  post(request, response) {    
    //Organiza os dados do body por chaves
    const keys = Object.keys(request.body) 

    for (key of keys) {
      if (request.body[key] == "") {
        return response.send('Por favor preencha todos os campos');
      }
    }

    Member.create(request.body, function(member) {

      return response.redirect(`/members/${member.id}`)

    })
  },

  show(request, response) {
    Member.find(request.params.id, function(member) {
      if(!member) return response.send('Instrutor não encontrado!')

      member.age = age(member.birth)
      member.created_at = date(member.created_at).format

      return response.render('members/show', { member })
    })

  },

  edit(request, response) {
    Member.find(request.params.id, function(member) {
      if(!member) return response.send('Instrutor não encontrado!')

      member.birth = date(member.birth).iso

      Member.instructorsSelectOptions(function(options) {
        return response.render('members/edit', { member, instructorOptions: options })
      })
    })

  },

  put(request, response) {
    //Organiza os dados do body por chaves
    const keys = Object.keys(request.body) 

    for (key of keys) {
      if (request.body[key] == "") {
        return response.send('Por favor preencha todos os campos');
      }
    }
    
    Member.update(request.body, function() {

      return response.redirect(`/members/${request.body.id}`)
    })

  },

  delete(request, response) {
    Member.delete(request.body.id, function() {

      return response.redirect(`/members`)
    })

  }
}
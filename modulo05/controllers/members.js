// file sistem paa salvar arquivos
const fs = require('fs');

//pega todos os dados dentro do data.json e coloca na variavel data
const data = require('../data.json');

//desestrutura o Obj age importando ele(e funções) de outro arquivo
const { date, date_nasc } = require('../utils');


exports.index = function(request, response) {
  return response.render('members/index', { members: data.members })
}

exports.show = function(request, response) {
  //pega o id que foi enviado pela url /:id e colca dentro do obj id
  const { id } = request.params;

  //variavel para receber todo o obj que a função find encontrar
  const foundMember = data.members.find( function(member) {

    //compara se o id que veio do req.params pe igual ao id do array member
    return id == member.id;
  });

  //se não encontrar nenhum member com id igual 
  if (!foundMember) return response.send('Instrutor não encontrado');

  
  //espalha tudo que tem dentro do foundMember, sobresquevendo com as alterações abaixo
  const member = {
    ... foundMember,
    birth: date(foundMember.birth).birthDay
    
  }
  console.log(member.hoje);

  //rederiza a pagina , enviando o dado member, com o obj encontrado para a pág show.njk
  return response.render('members/show', { member })
}

exports.create = function(request, response) {
  return response.render('members/create')
}


exports.post = function(request, response) {
  
  //Organiza os dados do body por chaves
  const keys = Object.keys(request.body) 

  for (key of keys) {
    if (request.body[key] == "") {
      return response.send('Por favor preencha todos os campos');
    }
  }

  //transforma o campo birth em data timestamp
  birth = Date.parse(request.body.birth)
    
  let id = 1
  const lastMember = data.members[data.members.length -1]

  if (lastMember) {
    id = lastMember.id + 1
  }

  //pega a variavel data .com o array "members". adiciona novas variaveis do req.body no array
  data.members.push({
    id,
    ...request.body,
    birth
  });

 
  //escreve no arquivo já criando o data, transforma em json(2 = epaçamento quebrando a linha), função se tiver erro 
  fs.writeFile('data.json', JSON.stringify(data, null, 2 ), function(err) {
    if(err) return response.send('Erro na escrita do arquivo');
    
    return response.redirect(`/members/${id}`);
  });
  
}


exports.edit = function(request, response) {

  //pega o id que foi enviado pela url /:id e colca dentro do obj id
  const { id } = request.params;

  //variavel para receber todo o obj que a função find encontrar
  const foundMember = data.members.find( function(member) {

    //compara se o id que veio do req.params pe igual ao id do array member
    return id == member.id;
  });

  //se não encontrar nenhum member com id igual 
  if (!foundMember) return response.send('Instrutor não encontrado');

  const member = {
    ...foundMember,
    birth: date_nasc(foundMember.birth)
  }

   return response.render('members/edit', { member })
}


exports.put = function(request, response) {
  const { id } = request.body
  let index = 0

  const foundMember = data.members.find(function(member, foundIndex) {
    if (id == member.id) {
      index == foundIndex
      return true
    }
  })
  if(!foundMember) return response.send('Instrutor não encontrado!')

  const member = {
    ...foundMember,
    ...request.body,
    birth: Date.parse(request.body.birth),
    id: Number(request.body.id)
  }

  data.members[index] = member

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
    if(err) return response.send('Erro de escrita!');

    return response.redirect(`/members/${id}`);
  })
}



exports.delete = function(request, response) {
  const { id } = request.body

  const filteredMembers = data.members.filter( function(member) {
    return member.id != id
  })

  data.members = filteredMembers

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
    if(err) return response.send("Erro na escrita do arquivo!")
  })

  return response.redirect('/members')
}

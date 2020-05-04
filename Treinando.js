var identificador = document.querySelector('#menu identificador');
var quantidade = document.querySelector('#menu quantidade');
var valor= document.querySelector('#menu valor');
var botao = document.getElementById('botao');
var paragrafo = document.getElementById('paragrafo');

function RecebePeças(){  
  var identificador = document.getElementById('identificador').value;    
  var paragrafo = document.getElementById('paragrafo');    
  var quantidade = document.getElementById('quantidade').value;
  var valor = document.getElementById('valor').value;
  var total = 0;
  var total = Number(quantidade) * Number(valor);
  
  paragrafo.innerHTML = paragrafo.innerHTML + 
  `A peça ${identificador} deu total de 
  ${total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} ` + "<br><br>";
};


var prod1 = document.querySelector('#pagamentos prod1');
var prod2 = document.querySelector('#pagamentos prod2');
var prod3 = document.querySelector('#pagamentos prod3');
var prod4 = document.querySelector('#pagamentos prod4');
var prod5 = document.querySelector('#pagamentos prod5');
var pagamento = document.querySelector('#pagamentos pagamento');
var paragraphElement = document.querySelector('#pagamentos p');

var buttonElement = document.querySelector('#pagamentos button');

function calcularTroco(){
    var prod1 = document.getElementById('prod1').value;
    var prod2 = document.getElementById('prod2').value;
    var prod3 = document.getElementById('prod3').value;
    var prod4 = document.getElementById('prod4').value;
    var prod5 = document.getElementById('prod5').value;
    var pagamento = document.getElementById('pagamento').value;
    var soma = Number(prod1) + Number(prod2) + Number(prod3) + Number(prod4) + Number(prod5);
    var troco = pagamento - soma;

    console.log(soma);
    
    paragraphElement.innerHTML = paragraphElement.innerHTML + troco + "<br>";
    //paragraphElement.innerHTML = paragraphElement.innerHTML + soma + "<br>";

}
buttonElement.onclick = calcularTroco;

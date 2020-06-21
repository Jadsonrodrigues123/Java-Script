var precolitro = document.querySelector('#gasolina precolitro');
var pagamento = document.querySelector('#gasolina pagamento');
var paragraphElement = document.querySelector('#gasolina p');
var buttonElement = document.querySelector('#gasolina button');

function calculaGasolina(){
    var precolitro = document.getElementById('precolitro').value;
    var pagamento = document.getElementById('pagamento').value;
    var litro = 0;

    var litro = Number(pagamento) / Number(precolitro);

    paragraphElement.innerHTML = paragraphElement.innerHTML +litro.toFixed(1)+ "   litros <br>";
    
}
buttonElement.onclick = calculaGasolina;
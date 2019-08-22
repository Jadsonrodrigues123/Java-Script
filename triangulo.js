var inputAltura = document.querySelector('#triangulo inputAltura');
var inputBase = document.querySelector('#triangulo inputBase');
var buttonElement = document.querySelector('#triangulo button');
var paragraphElement = document.querySelector('#triangulo p');

function calcularAerea(){
    var inputAltura = document.getElementById('inputAltura').value;
    var inputBase = document.getElementById('inputBase').value;
    var area = inputAltura * inputBase;

    
    paragraphElement.innerHTML = paragraphElement.innerHTML + area + "<br>";
}

buttonElement.onclick = calcularAerea;
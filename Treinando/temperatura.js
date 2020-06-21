var celsius = document.querySelector('#temperatura celsius');
var paragraphElement = document.querySelector('#temperatura p');
var buttonElement = document.querySelector('#temperatura button');

function calcularTemperatura(){
    var celsius = document.getElementById('celsius').value;
    var constante = 1.8;
    var resultado = celsius * constante + 32;

    console.log(celsius);
    paragraphElement.innerHTML = paragraphElement.innerHTML + resultado +"<br>";
       
}

buttonElement.onclick = calcularTemperatura;
var inputNum1 = document.querySelector('#media num1');
var inputNum2 = document.querySelector('#media num2');
var inputNum3 = document.querySelector('#media num3');
var inputNum4 = document.querySelector('#media num4');
var buttonElement = document.querySelector('#media button');
var paragraphElement= document.querySelector('#media p');

function calcularMedia(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var num3 = document.getElementById('num3').value;
    var num4 = document.getElementById('num4').value;
    var media = (Number(num1) + Number(num2) + Number(num3) + Number(num4)) / 4 ;

    paragraphElement.innerHTML = paragraphElement.innerHTML + media + "<br>" ;

     console.log(media);
}
buttonElement.innerHTML.onclick = calcularMedia

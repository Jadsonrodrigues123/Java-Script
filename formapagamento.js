//var avista = document.querySelector('#formaspag avista');
//var parcelado = document.querySelector('#formaspag parcelado');
//var dividido = document.querySelector('#formaspag dividido');
//       calcularFormaspag()
var buttonElement = document.querySelector('#formaspag button');

function calcularFormaspag(){
    var valor       = document.getElementById('valor').value;
    var resultado   = document.getElementById('pagar');
    var avista      = document.getElementById('avista');
    var parcelado2  = document.getElementById('parcelado2');
    var parcelado3  = document.getElementById('parcelado3');
    var dividido    = document.getElementById('dividido');
    var desconto    = 0;
    var juros       = 0;

    if (valor>0) {
    // aplicando os 10% pagando a vsta
        if (avista.checked){
            desconto = valor * 0.10;
            valor = Number(valor) - Number(desconto);  
            
            resultado.value = "Desc: " +desconto.toLocaleString('pt-BR', 
            {style:'currency', currency:'BRL'})+ ". Pagar: "
            +valor.toLocaleString('pt-BR', {style:'currency', currency:'BRL'});
        }
        if (parcelado2.checked) {
            parcelado2 = Number(valor) / 2;
            
            resultado.value = "Parcel: " +parcelado2.toLocaleString('pt-BR',
             {style:'currency', currency:'BRL'})+ ".  Pagar: "
             +valor.toLocaleString('pt-BR', {style:'currency', currency:'BRL'});
        }
        if (parcelado3.checked) {
            parcelado3 = Number(valor) / 3;
            

            resultado.value = "Parcel: " +parcelado3.toLocaleString('pt-BR',
             {style:'currency', currency:'BRL'})+ ".  Pagar: "
             +valor.toLocaleString('pt-BR', {style:'currency', currency:'BRL'});

        }
        
            //Aplicando os juros quando divide em 10 vezes
        if (dividido.checked) {
            juros = valor  * 0.05;
            valor = Number(valor) + Number(juros);

            resultado.value = "Juros: " +juros+ ".  Pagar: "+ valor.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'});

        }
    }        
            console.log(desconto);
            console.log(resultado);
            console.log(juros);
            console.log(valor);
            console.log(parcelado2);
            console.log(parcelado3);
            
    
}
buttonElement.onclick = calcularFormaspag;
//valor.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})
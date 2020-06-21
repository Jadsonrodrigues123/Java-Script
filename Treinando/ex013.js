var agora = new Date()
var diaSem = agora.getDay()

diaSem = 45
/*
    Domingo
    Segunda-feira
    Terça-feira
    Quarta-feira
    Quinta-feira
    Sexta-feira
    Sábado
*/
console.log(diaSem)
switch (diaSem) {
    case 0:
        console.log(`Domingo`)
        break
    case 1:
        console.log(`Segunda`)
        break
    case 3:
        console.log(`Terça`)
        break
    case 4:
        console.log(`Quarta`)
        break
    case 5:
        console.log(`Quinta`)
        break
    case 6:
        console.log(`Sexta`)
        break
    case 7:
        console.log(`Sábado`)
        break

    default:
        console.log(`[ERRO] Dia invalido!`)
        break
}
function calcular () {
    let txtdia = document.getElementById('txtdia')
    let txtmes = document.getElementById('txtmes')
    let txtano = document.getElementById('txtano')

    let dia = Number(txtdia.value)
    let mes = Number(txtmes.value)
    let ano = Number(txtano.value)

    let bissexto = 3

    const date = new Date();   // objeto date armazena data e hora

    const anoAtual = date.getFullYear(); // captura o ano atual do computador
    console.log(anoAtual);

    const mesAtual = date.getMonth() + 1; //captura o mes atual e add +1 pois indice começa em 0
    console.log(mesAtual); 

    const diaAtual = date.getDate(); //captura o dia atual
    console.log(diaAtual);

    // testes avisos erro dia
    if (dia == 0) { 
        avisoum.innerHTML = `This field is required`
    } else if (dia > 31 || dia < 0) {
        avisoum.innerHTML = `Must be a valid day`
    } else {
        avisoum.innerHTML = ``
    }

    // testes aviso erro mes
    if (mes == 0) { 
        avisodois.innerHTML = `This field is required`
    } else if (mes > 12 || mes < 0) {
        avisodois.innerHTML = `Must be a valid month`
    } else {
        avisodois.innerHTML = ``
    }

    // testes dos meses que não tem 31 dias exceto fevereiro
    if (mes == 4 || mes == 6 || mes == 9 || mes == 11 && dia > 30) {
        avisoum.innerHTML = `This date is not valid`
        avisodois.innerHTML = `This date is not valid`
    }
        
    // teste de fevereiro ano bissexto e aviso de ano invalido
        if (ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0)
        { 
            bissexto = 1 //ano bissexto
        } else {
            bissexto = 0 //ano não bissexto
        }


        if (ano == 0) { 
            avisotres.innerHTML = `This field is required`
        } else if (ano > anoAtual) { // mas esse não é o unico caso que a data fica no futuro, testar outros
            avisotres.innerHTML = `Must be in the past`
        } else if (ano < 0) {
            avisotres.innerHTML = `Must be a valid year`
        } else if (bissexto == 0 && mes == 2 && dia >= 29) { //ano não bissexto com dia maior ou igual a 29 dá erro
            avisoum.innerHTML = `This date is not valid`
            avisodois.innerHTML = `This date is not valid`
            avisotres.innerHTML = `This date is not valid`
        } else if (bissexto == 1 && mes == 2 && dia > 30) { //ano bissexto com dia maior que 30 dá erro
            avisoum.innerHTML = `This date is not valid`
            avisodois.innerHTML = `This date is not valid`
            avisotres.innerHTML = `This date is not valid`
        } else {
            avisoum.innerHTML = ``
            avisodois.innerHTML = ``
            avisotres.innerHTML = ``
        }

        if (dia > diaAtual && mes == mesAtual && ano == anoAtual) { // faz o teste se o dia não está no futuro mesmo o mes e o ano estando corretos
            avisoum.innerHTML = `Must be in the past`
        } 
    
        if (dia <= diaAtual && mes > mesAtual && ano == anoAtual) { // faz o teste se o mes não está no futuro mesmo o ano e dia estando corretos
            avisodois.innerHTML = `Must be in the past`
        } 

// testes de erros finalizados, fazer calculo dia mes e ano

let diaFinal = diaAtual - dia
let mesFinal = mesAtual - mes
let anoFinal = anoAtual - ano

//subtação de datas igual a subtração de valores -- precisamos considerar o 'empresta 1' quando data inserida for maior que data atual

if (diaFinal >= 0 && mesFinal >= 0 && anoFinal >= 0) { // se todos os atuais forem maiores que os inseridos
    resdia.innerHTML = diaFinal
    resmes.innerHTML = mesFinal
    resano.innerHTML = anoFinal
} else if (diaFinal < 0 && mesFinal > 0 &&  anoFinal >= 0) { // se o dia inserido for menor que o dia atual, o mes deve ganhar -1 e o dia +30
    resdia.innerHTML = diaFinal +30 //ganha 30 dias
    resmes.innerHTML = mesFinal -1 // perde 1 mes pois emprestou 30 dias
    resano.innerHTML = anoFinal
} else if (diaFinal < 0 && mesFinal == 0 &&  anoFinal >= 0) { // se o dia inserido for menor que o dia atual, e se o mes for igual ele 'empresta dois' então precisaria ganhar 12 meses do ano
    resdia.innerHTML = diaFinal +30 //ganha 30 dias
    resmes.innerHTML = mesFinal -1 +12 // perde 1 mes pois emprestou 30 dias
    resano.innerHTML = anoFinal -1
} else if (diaFinal < 0 && mesFinal < 0 &&  anoFinal >= 0) { // se o dia inserido for menor que o dia atual, e o mes inserido for menor que o mes atual, o ano deve ganhar +1
    resdia.innerHTML = diaFinal +30
    resmes.innerHTML = mesFinal -1 +12 //perde 1 mes pois emprestou 30 dias, e ganha 12 meses 
    resano.innerHTML = anoFinal -1 //perde 1 ano pois 'emprestou' 12 meses
} else if (diaFinal >=0 && mesFinal < 0 &&  anoFinal >= 0) { // se o dia inserido esiver ok mas o mes precisar do empresta 1 do ano
    resdia.innerHTML = diaFinal
    resmes.innerHTML = mesFinal +12 //ganha 12 meses pois esta negativo
    resano.innerHTML = anoFinal -1 //perde 1 ano pois 'emprestou' 12 meses
} 
}
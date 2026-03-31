'use strict'

function criarListaNumeros(quantidade){
    let listaNumeros = []
    for (let  i = 1; i <= quantidade; i++){
        listaNumeros.push(i)
    }
return listaNumeros
}

function gerarAdi(number){
    let listaAdi = []

    for (let  i = 1; i <= number; i++){
    listaAdi.push(i + number)
    }
    return listaAdi
    }

function gerarSub(number){
    let listaSub = []

    for (let i = 1; i <= number; i++){
    listaSub.push(number - i)
    }

    return listaSub
}

function gerarMult(number){
    let listaMult = []

    for (let i = 1; i <= number; i++){
    listaMult.push(number * i)
    }
    return listaMult
}

function gerarDivi(number){
    let listaDivi = []
    for (let i = 1; i <= number; i++){
        listaDivi.push(Number(number / i).toFixed(2))
    }
    return listaDivi
}

function criarLinha(num, adi ,sub, mult ,div){
    const tbody = document.getElementById("tbody")

    const tr = document.createElement("tr")
    const tdNum = document.createElement("td")
    tdNum.textContent = num

    const tdAdi = document.createElement("td")
    tdAdi.textContent = adi

    const tdSub = document.createElement("td")
    tdSub.textContent = sub

    const tdMult = document.createElement("td")
    tdMult.textContent = mult

    const tdDiv = document.createElement("td")
    tdDiv.textContent = div

    tr.replaceChildren(tdNum, tdAdi, tdSub, tdMult, tdDiv)
    tbody.appendChild(tr)
}

function handleClick(){
    const number = Number(document.getElementById("number").value)
    const listaNumeros = criarListaNumeros(number)
    const listaAdicao = gerarAdi(number)
    const listaSubtracacao = gerarSub(number)
    const listaMultipli = gerarMult(number)
    const listaDivi = gerarDivi(number)
    
    for(let i = 0; i < number; i++)
        criarLinha(listaNumeros[i], listaAdicao[i], listaSubtracacao[i], listaMultipli[i], listaDivi[i])
}

console.log(gerarAdi)
console.log(gerarSub)
console.log(gerarMult)
console.log(gerarDivi)
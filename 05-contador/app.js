'use strict'

function criarListaNumeros(quantidade){
    let listaNumeros = []
    for (let  i = 1; i <= quantidade; i++){
        listaNumeros.push(i)
    }
return listaNumeros
}


function criarListaPares(quantidade){
    let listaPares = []
    let par = 2
    
    for (let i = 1; i <= quantidade; i++){
        listaPares.push(par)
        par = par + 2

    }
return listaPares
}

/* OUTRA OPÇÃO
function criarListaPares(quantidade){
    let listaPares = []
    let par = 2
    
    for (let i = 1; i <= quantidade; i++){
        listaPares.push(i * 2 - 1)
    }
return listaPares
}
*/

function criarListaImpares(quantidade){
    let listaImpares = []
    let impar = 1

    for (let i = 1; i <= quantidade; i++){
        listaImpares.push(i * 2 - 1)
    }
    return listaImpares
}

function criarListaMultiplos(quantidade){
    let listaMultiplos = []
    let multiplo = 1

    for (let i = 1; i <= quantidade; i++){
        listaMultiplos.push(i * 5)
    }
    return listaMultiplos
}

function criarListaPotencias(quantidade){
    let listaPotencias = []
    let potencia = 1

    for (let i = 1; i <= quantidade; i++){
        listaPotencias.push(2 ** (i -1))
    }
    return listaPotencias
}

function criarLinha(Num,par,impar,mult,pot){
    const tbody = document.getElementById("tbody")

    const tr = document.createElement("tr")
    const tdNum = document.createElement("td")
    tdNum.textContent = Num

    const tdPar = document.createElement("td")
    tdPar.textContent = par

    const tdImpar = document.createElement("td")
    tdImpar.textContent = impar

    const tdMult = document.createElement("td")
    tdMult.textContent = mult

    const tdPot = document.createElement("td")
    tdPot.textContent = pot

    tr.replaceChildren(tdNum, tdPar, tdImpar, tdMult, tdPot)
    tbody.appendChild(tr)
}
function handleClick(){
    const quantidade = Number(document.getElementById("quantidade").value)
    const listaNumeros = criarListaNumeros(quantidade)
    const listaPares = criarListaPares(quantidade)
    const listaImpares = criarListaImpares(quantidade)
    const listaMultiplos = criarListaMultiplos(quantidade)
    const listaPotencias = criarListaPotencias(quantidade)
    
    for(let i = 0; i < quantidade; i++)
        criarLinha(listaNumeros[i], listaPares[i], listaImpares[i], listaMultiplos[i], listaPotencias[i])
}

// console.log(criarListaNumeros(8))
// console.log(criarListaPares(8))
// console.log(criarListaImpares(8))
// console.log(criarListaMultiplos(8))
// console.log(criarListaPotencias(8))
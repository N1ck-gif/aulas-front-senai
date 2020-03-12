"use strict";

const notas = [2,8,5,0,8];
const cliente =[
    {nome: "fernando", idade: 43, cidade: "São Roque"},
    {nome: "nicolas", idade: 53, cidade: "JAndira"},
    {nome: "Jeferson", idade: 23, cidade: "Osasco"}
]

/*
    MAP - retorna um novo array do mesmo tamanho modificado ou não
    1° elemento
    2° indice
    3° array
*/ 

const notasAtualizadas = notas.map( nota => nota * 10 );

/*
    FILTER - retorna um novo array filtrando pela condição
    argumentos

    1° elemento
    2° indice
    3° array
*/ 
const notasAcimaDaMedia = notas.filter ( nota => nota => 5);

/*
    REDUCE - retorna um únio argumento
    argumentos:

    1° acumulador
    2º elemento
    3° indice
    4° array
*/ 
const notasTotal = notas.reduce (( acc,nota) => acc+nota);

// const notasPares100 = filter ( nota => nota % 2 == 0).map (nota => nota + 100);

const exibirDados = (el, arr) => {
    el.innerHTML += `
        <div class="card">
            <div class="titulo">
                Exibindo o Array
            </div>
            <div>
                ${arr[0].nome}
            </div>
        </div>
    `
}

const $resultados = document.getElementById('resultado');

exibirDados ( $resultados, notas);
exibirDados ( $resultados, notasAcimaDaMedia)

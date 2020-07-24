"use strict";

const dados = document.getElementById('input');
const add = document.getElementById('adicionar');
const atualizar = document.getElementById('atualizar');
const exclui = document.getElementById('excluir');
const divNomes = document.getElementById('nomes');

function adicionar() {
    
    var nomes = JSON.parse( localStorage.getItem("nomes") );
    nomes.push(dados.value);
    localStorage.setItem( "nomes", JSON.stringify(nomes) );

}

function listarNomes() {
    var nomes = JSON.parse( localStorage.getItem("nomes") );

    nomes.forEach(element => {
        divNomes.innerHTML += element;
    });
}

function excluir() {

    var nomes = JSON.parse( localStorage.getItem("nomes") );

    var inputNome = document.getElementById("input").value;

    const nomesAtuaizados = nomes.filter( element => element != inputNome );

    localStorage.setItem( "nomes", JSON.stringify(nomesAtuaizados) );

}

listarNomes();


add.addEventListener('click', adicionar);
exclui.addEventListener('click', excluir);

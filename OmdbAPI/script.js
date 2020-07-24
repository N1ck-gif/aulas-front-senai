"use strict"

const btn = document.getElementById('botao');
const buscaTitulo = document.getElementById('buscaTitle');
const buscaAno = document.getElementById('buscaAno');
const img = document.getElementById('img');
const det = document.getElementsByClassName('detalhes');
const dados = document.getElementsByClassName('dados');


const getFilme = async () => {

    const url = `http://www.omdbapi.com/?apikey=49ac9aa3&t=${buscaTitulo.value}&y=${buscaAno.value}`;

    const getApi = await fetch( url );

    const filme = await getApi.json();

    dados[0].innerHTML = `Titulo: ${filme.Title}`;
    dados[1].innerHTML = `Ano: ${filme.Year}`;
    dados[2].innerHTML = `Lançamento: ${filme.Released}`;
    dados[3].innerHTML = `Duração: ${filme.Runtime}`;
    dados[4].innerHTML = `Gênero: ${filme.Genre}`;
    dados[5].innerHTML = `País: ${filme.Country}`;
    dados[6].innerHTML = `Atores: ${filme.Actors}`;
    
    img.innerHTML = `<img src='${filme.Poster}' id="posterImg">`;
}



btn.addEventListener('click', getFilme);

$(document).ready(function(){ 
    $('#botao').click(function(){
        $('#containerCard').slideToggle(500);
    });
});



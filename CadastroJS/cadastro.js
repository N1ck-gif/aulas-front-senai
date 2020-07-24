"use strict";

const $novo = document.getElementById("novo");
const $fechar = document.getElementById("fechar");
const $salvar = document.getElementById("salvar");

function exibirModal () {
    document.querySelector(".conteiner-modal").classList.add("exibirModal");
}

function fecharModal () {
    document.querySelector(".conteiner-modal").classList.remove("exibirModal");
}

function salvarAluno () {
    
    fecharModal();
}

$novo.addEventListener("click", exibirModal);
$fechar.addEventListener("click", fecharModal);
$salvar.addEventListener("click", salvarAluno);

const mascaras = {

    nome(value) {
        return value.replace(/[^a-zA-z À-ÿ]/g, "");
    }
}

document.querySelectorAll("input").forEach ( input => {

        const atributoDataJs = input.dataset.js;

        input.addEventListener("input", (evento) => {

            evento.target.value = mascaras[atributoDataJs](input.value);

        });
    }
);


const dataLoad = (data) => {
    const $registros = document.getElementById('registros')

    data.forEach(element => {
        const $tr = document.createElement("tr");
        $tr.innerHTML = `
                            <td>${element.codigo}</td>
                            <td>${element.aluno}</td>
                            <td>${element.email}</td>
                            <td>${element.celular}</td>
                            <td>${element.cidade}</td>
                            <td>
                                <button class="botao" id="editar-${element.codigo}">Editar</button>
                                <button class="botao" id="deletar" onclick="deleteAluno('${element.id}')">Apagar</button>
                            </td>
                            `;

        $registros.appendChild($tr);
    });
}

// PEGANDO DADOS DA API

const getAlunos = async ( url ) => {
    const pegarAlunos = await fetch(url);
    const jsonAlunos = await pegarAlunos.json();
    
    return jsonAlunos.data;
    // dataLoad(jsonAlunos.data);
}

// PEGA E TRANSFORMA OS DADOS PARA SEREM EXBIDOS NA TABELA 
const showAlunos = async () => {
    const alunos = await getAlunos ( 'http://localhost/Nicolas/apiphp-master/alunos/' );

    const codigo = 12;
    const produto = 'teclado';

    const produtos = {
        'código' : codigo,
        'produto' : produto
    }

    // Utilizando o map e criando um objeto na forma de desestruturação
    const formatAlunos = alunos.map( ( {id:codigo, nome:aluno, email, celular, cidade} ) => 
                                                            ({ codigo, aluno, email, celular, cidade }) );

     dataLoad( formatAlunos );
}

showAlunos();



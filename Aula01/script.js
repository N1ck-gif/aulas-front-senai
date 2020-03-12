const $calcular = document.getElementById('calcular');
const $exibir = document.getElementById('exibir');
const $container = document.querySelector('#container');

//Função para calcular a media
const calcularMedia = (n1,n2) => (parseInt(n1) + parseInt(n2)) /2;

//Função verifica status com o if ternário
const verificarSituacao = (media) => 5 ? "Aprovado" : "Reprovado";

//Função normal
function exibirMedia() {
    const $nome = document.getElementById('nome');
    const nota1 = document.getElementById('nota1').value;
    const nota2 = document.getElementById('nota2').value;
    const $media = document.getElementById('media');
    const $situacao = document.getElementById('situacao');
    
    const media = calcularMedia(nota1, nota2);

    $situacao.value = verificarSituacao ( media );

    // if (media>=5) {
    //     $situacao.value = "Aprovado";
    //     $situacao.classList.remove  ("reprovado");
    //     $situacao.classList.add ("aprovado");
    // } else{
    //     $situacao.value = "Reprovado";
    //     $situacao.classList.remove ('aprovado');
    //     $situacao.classList.add ('reprovado');
    // }
    $media.value = media;

}
// Função Arrow function
const defineConceito = () => {
    //Chama o valor da media para fazer o conceito
    const media = document.getElementById('media').value;
    const $conceito = document.getElementById('conceito');
    if(media == 10) {
        $conceito.value = "A";
    } else if (media >= 8 && media <= 9) {
        $conceito.value = "B";
    } else if (media >= 5 && media <= 8) {
        $conceito.value = "C";
    } else if (media >= 3 && media <= 5) {
        $conceito.value = "D";
    } else if (media >= 0 && media <= 3) {
        $conceito.value = "E";
    }
}

const exibirResultado = () => {
    exibirMedia();
    defineConceito();
}

const exibir = (el) => el.classList.add('exibir');

$calcular.addEventListener('click', exibirResultado);
$exibir.addEventListener('click',( ) => exibir ( $container ));


"use strict";

//o replace está achando achando tudo o que não é letra, e apaga, utilizando o '^' vc nega
// \D - tudo oq não é número, deleta
// Objeto masks carrega os atributos "texto" e "celular" para fazer a formatação
const masks = {
    texto : value => value.replace(/[^a-zA-Z]/, ''),
    celular : value => value.replace( /[^0-9]/g, '')
                            .replace(/(.{2})(.{5})(.{4})/, '($1) $2 - $3')
                            .replace(/(.{17})(.*)/, '$1')

};

export const validar = elemento => {
        elemento.addEventListener('input', ( evento ) => {
        const $input = evento.target;
        const typeMask = $input.dataset.type;
        $input.value = masks[typeMask]($input.value);
    });

const emailValidator = elemento => {
    elemento.addEventListener('blur', () => {
        if( elemento.value.match(/.*@.*\..*/) ) {
            alert("verifique o e-mail");
        }
    })
}
    
}
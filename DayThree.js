const prompt = require('prompt-sync')({sigint: true});
let area = '';
let linguagem = '';

const nome = prompt('Antes de começarmos, me informe seu nome: ');

const inicioJogo = prompt(`Olá ${nome}, vamos jogar? Responda sim ou nao: `);

if (inicioJogo === 'sim') {
    console.log(`Ok, vamos lá ${nome}`);
    decideArea();
    especializaArea();
} else {
    console.log(`Tudo bem, quem sabe na próxima...`);
}

function decideArea() {
    console.log('Você deseja seguir em qual área de programação? ');
    area = prompt('Responda Front end ou Back end: ');

    if(area === 'Front end') {
        console.log('Na área de Front-End, o que você deseja aprender? ')
        linguagem = prompt('Responda react ou vue: ');
    } else if (area === 'Back end') {
        console.log('Na área de Back-End, o que você deseja aprender? ')
        linguagem = prompt('Responda #C ou Java: ');
    } else {
        console.log('Você não informou uma área válida.');
    }

}

function especializaArea() {
    console.log(`Legal, ${nome}! Vi aqui que você deseja estudar ${linguagem}. Você pretende se epecializar ou se tornar Fullstack? `)
    const especialidade = prompt('Responda 1 para seguir se especializando ou 2 para se tornar Fullstack ')

    if(especialidade == 1) {
        console.log(`Que bacana! `);
    } else if(especialidade == 2) {
        console.log(`Uau, essa é uma escolha e tanto! `);
    } else {
        console.log('Você não informou uma opção válida.');
    }
}

let mensagem = prompt('Você deseja aprender mais alguma tecnologia? Responda sim ou nao ');
while (mensagem === 'sim') {
    let tecnologia = prompt('Qual?');
    console.log(`${tecnologia} é realmente interessante!`)
    mensagem = prompt('Você deseja aprender mais alguma tecnologia? Responda sim ou nao ');
}


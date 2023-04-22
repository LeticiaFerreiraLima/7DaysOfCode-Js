const prompt = require('prompt-sync')({sigint: true});
let numeroSorteado = Math.floor(Math.random() * 10);


for (tentativas = 0; tentativas < 3; tentativas++) {
    const chute = prompt('Tente advinhar qual número estou pensado: ');

    if(chute == numeroSorteado) {
        console.log('Parabéns, você acertou!');
        tentativas = 3;
        
    } else {
        console.log('Ops, você errou. Tente novamente.');
    }    
}
console.log(`O número certo era: ${numeroSorteado}`);

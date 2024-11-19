import cesar from './cesar.js';

const mensagem = "professor bruno vicente";
const chave = 5;

const mensagemCifrada = cesar.criptografia(mensagem, chave, cesar.cifraLetra);
console.log("Mensagem Cifrada:", mensagemCifrada);

const mensagemDecifrada = cesar.criptografia(mensagemCifrada, chave, cesar.decifraLetra);
console.log("Mensagem Decifrada:", mensagemDecifrada);

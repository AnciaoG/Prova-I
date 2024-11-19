function criptografia(mensagem, chave, converter) {
    return mensagem
        .split("") 
        .map((letra) => converter(letra, chave)) 
        .join(""); 
}

function cifraLetra(letra, chave) {
    const alfabeto = "abcdefghijklmnopqrstuvwxyz";

    if (alfabeto.includes(letra)) {
        const index = alfabeto.indexOf(letra);
        return alfabeto[(index + chave) % 26];
    } else {
        return letra;
    }
}

function decifraLetra(letra, chave) {
    const alfabeto = "abcdefghijklmnopqrstuvwxyz";

    if (alfabeto.includes(letra)) {
        const index = alfabeto.indexOf(letra);
        return alfabeto[(index - chave + 26) % 26]; 
    } else {
        return letra; 
    }
}

export default { criptografia, cifraLetra, decifraLetra };

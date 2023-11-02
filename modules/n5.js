const {
  getInput
} = require('./input');

function verificaPalindromo(str) {
  return str === str.split('').reverse().join('');
}

function gerarAnagramas(input) {
  const anagramas = [];

  function getPermuta(str) {
    if (str.length === 1) {
      return [str];
    }

    const permuta = [];
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      const sobra = str.slice(0, i) + str.slice(i + 1);
      const subPermuta = getPermuta(sobra);

      for (const subP of subPermuta) {
        permuta.push(char + subP);
      }
    }

    return permuta;
  }

  const permuta = getPermuta(input);

  for (const p of permuta) {
    if (!anagramas.includes(p)) {
      anagramas.push(p);
    }
  }

  return anagramas;
}


async function Execute () {

  const input = await getInput('\nEntre com a frase:\n');
  let output = gerarAnagramas(input).filter(a => verificaPalindromo(a));

  return String(output.length > 0);
}

module.exports = Execute;
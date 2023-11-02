const {
  getInput
} = require('./input');

function verificaPalindromo(str) {
  return str === str.split('').reverse().join('');
}

async function Execute () {

  let palindromo = '';

  const input = await getInput('\nEntre com a frase:\n');
  for(let maxSize = input.length; maxSize >= 0; maxSize--){
    const qntSubstrings = (input.length - maxSize);

    for(let i = 0; i <= qntSubstrings; i++){
      const substring = input.slice(i, maxSize+i)
      if(verificaPalindromo(substring)){
        palindromo = substring;
        break;
      }
    }

    if(!!palindromo) break;
  }

  return palindromo;
}

module.exports = Execute;
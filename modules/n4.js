const {
  getInput
} = require('./input');

function Captalize (string) {
  let result = string;
  for(let i = 0; i < string.length; i++){
    if(/[a-z]/.test(string[i])) {
      result = (i > 0 ? string.slice(0, i) : '') + string[i].toUpperCase() + string.slice(i+1);
      break;
    }
  }

  return result;
}

async function Execute () {

  const input = await getInput('\nEntre com a frase:\n');
  let output = '';

  input.split(/[.!?]/).forEach(frase => {
    output += ('.' + Captalize(frase))
  })

  return output.slice(1);
}

module.exports = Execute;
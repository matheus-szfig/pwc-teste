const {
  getInput
} = require('./input');

async function Execute () {

  const mappedChars = [];
  let output = '';

  const input = await getInput('\nEntre com a frase:\n');

  input.split('').forEach((char) => {
    if(!mappedChars.includes(char)){
      mappedChars.push(char);
      return output += char;
    }
  })

  return output;
}

module.exports = Execute;
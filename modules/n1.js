const {
  getInput
} = require('./input');

async function Execute () {
  const input = await getInput('\nEntre com a frase:\n');

  const output = String(input).split(' ').reverse().reduce((out, element) => `${out} ${element}`, '');

  return output.slice(1);
}

module.exports = Execute;
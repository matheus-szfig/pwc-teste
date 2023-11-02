const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const getInput = (prompt) => new Promise(exec => {
  reader.question(prompt, (answer) => {
    exec(answer);
  })
})

const closeInput = () => reader.close();

module.exports = {
  getInput,
  closeInput
}
const {
  getInput,
  closeInput
} = require('./modules/input');

const menuText = 'Digite o numero do exercicio que deseja executar (1-5) ou digite 0 para sair:\n'

const possibleOptions = {
  '1':require('./modules/n1'),
  '2':require('./modules/n2'),
  '3':require('./modules/n3'),
  '4':require('./modules/n4'),
  '5':require('./modules/n5')
}

async function parseOption (option) {
  if(!Object.keys(possibleOptions).includes(option)) {
    console.log('Essa opção não é válida!');
    return;
  }

  const output = await possibleOptions[option]();
  console.log('output:', output, '\n');
}

async function main () {
  let option = await getInput(menuText);

  while(option !== '0'){
    await parseOption(option);
    option = await getInput(menuText);
  }

  closeInput();
}

main();
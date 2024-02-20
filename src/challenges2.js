// Desafio 11

function arrayIsInvalid(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (array.some((number) => number < 0 || number > 9)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  if (array.some((number) => array.filter((num) => num === number).length >= 3)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return false;
}

function generatePhoneNumber(array) {
  if (typeof arrayIsInvalid(array) === 'string') {
    return arrayIsInvalid(array);
  }
  const codigoArea = array.slice(0, 2).join('');
  const parteCentral = array.slice(2, 7).join('');
  const parteFinal = array.slice(7).join('');

  return `(${codigoArea}) ${parteCentral}-${parteFinal}`;
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};

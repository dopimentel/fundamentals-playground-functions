// Desafio 1
function compareTrue(parametro1, parametro2) {
  if (parametro1 === true && parametro2 === true) {
    return true;
  } else {
    return false;
  }
}
// Desafio 2
function calcArea(base, height) {
  let altura = height
  return (base * altura) / 2;
  
  
}

// Desafio 3
function splitSentence(frase) {
let arrayPalavras = frase.split (" ")
  return arrayPalavras 
}

// Desafio 4
function concatName(arrayString) {
let retorno = arrayString[arrayString.length - 1] + ", " + arrayString[0];
 
 return retorno;
}
concatName(['captain', 'my', 'captain']);

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};

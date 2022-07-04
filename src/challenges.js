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
  let altura = height;
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(frase) {
  let arrayPalavras = frase.split(' ');
  return arrayPalavras;
}

// Desafio 4
function concatName(arrayString) {
  let retorno = arrayString[arrayString.length - 1] + ', ' + arrayString[0];

  return retorno;
}
concatName(['captain', 'my', 'captain']);

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(arrayMaior) {
  let maior = 0;
  maior = Math.max.apply(null, arrayMaior);
  let cont = 0;
  for (let index of arrayMaior) {
    if (index === maior) {
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let resultado = '';
  let distancia1 = mouse - cat1;
  let distancia2 = mouse - cat2;

  if (Math.abs(distancia1) > Math.abs(distancia2)) {
    return 'cat2';
  } else if (Math.abs(distancia1) < Math.abs(distancia2)) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
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

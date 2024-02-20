// Desafio 1
function compareTrue(parametro1, parametro2) {
  if (parametro1 === true && parametro2 === true) {
    return true;
  }
  return false;
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
  let retorno = `${arrayString[arrayString.length - 1]}, ${arrayString[0]}`;

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
  let distancia1 = mouse - cat1;
  let distancia2 = mouse - cat2;

  if (Math.abs(distancia1) > Math.abs(distancia2)) {
    return 'cat2';
  } if (Math.abs(distancia1) < Math.abs(distancia2)) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8

function isFizzBuzz(num) {
  return num % 15 === 0;
}

function isFizz(num) {
  return num % 3 === 0;
}

function isBuzz(num) {
  return num % 5 === 0;
}
function fizzBuzz(numeros) {
  return numeros.map((num) => {
    if (isFizzBuzz(num)) {
      return 'fizzBuzz';
    } if (isFizz(num)) {
      return 'fizz';
    } if (isBuzz(num)) {
      return 'buzz';
    }
    return 'bug!';
  });
}

// Desafio 9
function encode(frase) {
  let vogais = ['a', 'e', 'i', 'o', 'u'];
  let numeros = [1, 2, 3, 4, 5];
  const letters = frase.split('');
  return letters.map((letter) => {
    if (vogais.includes(letter)) {
      return numeros[vogais.indexOf(letter)];
    }
    return letter;
  }).join('');
}

console.log(encode('hi there!'));

function decode(frase) {
  let vogais = ['a', 'e', 'i', 'o', 'u'];
  let numeros = [1, 2, 3, 4, 5];
  const letters = frase.split('');
  return letters.map((letter) => {
    if (numeros.includes(Number(letter))) {
      return vogais[numeros.indexOf(Number(letter))];
    }
    return letter;
  }).join('');
}

// Desafio 10
function techList(list, name) {
  if (list.length === 0) {
    return 'Vazio!';
  }
  return list.sort().map((tech) => ({ tech, name }));
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

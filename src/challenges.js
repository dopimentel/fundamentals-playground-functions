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
function fizzBuzz(numeros) {
  let resultado = [];
  for (let num of numeros) {
    if (num % 3 === 0 && num %5 === 0) {
    resultado.push('fizzBuzz');
  } else if (num % 3 === 0 && num %5 !== 0) {
    resultado.push('fizz');
  } else if (num % 3 !== 0 && num %5 === 0) {
    resultado.push('buzz');
  } else if (num % 3 !== 0 && num %5 !== 0) {
    resultado.push('bug!');
  }
  }

  return resultado
}


// Desafio 9
function encode(frase) {
  // seu código aqui
  let vogais = ['a', 'e', 'i', 'o', 'u'];
  let numeros = [1, 2, 3, 4, 5];
  let resultado = [];
  for (let index = 0; index < frase.length; index +=1) {
    frase[index]

    for (let index2 = 0; index2 < vogais.length; index2 +=1) {

      if (frase[index] === vogais[index2]) {

        resultado.push(numeros[index2]);
    }      
    }
    resultado.push(frase[index]);
  } 
  console.log(resultado);
}

  
  encode('hi there!');
  
  




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

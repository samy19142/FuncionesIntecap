// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
const getCharacter = (cadena = "") => cadena.length;
console.log(getCharacter("hola"));

// 2)Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
const getSizeCharacter = (cadena = "", cantidadLetras = 1) =>
  cadena.slice(0, cantidadLetras);
console.log(getSizeCharacter("hola", 2));

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
const getArrayDelimiter = (cadena = "", delimitador) =>
  cadena.split(delimitador);
console.log(getArrayDelimiter("hola como estas", " "));

// 4) Programa una fucion para que calcule el precio de un producto aplicando un descuento, pe. miFuncion(1000, 20) devolverá 800.
const getDiscount = (precioNormal, descuento) => {
  const desc = precioNormal * (descuento / 100);
  const precioFinal = precioNormal - desc;
  return precioFinal;
};

console.log(getDiscount(1000, 20));

// 5) Calcular la edad de una persona, pe. miFuncion(new Date(1988,09,01)) devolverá 34 años.
const getAge = (fechaNacimiento) => {
  const fechaActual = new Date();
  const anioNacimiento = fechaNacimiento.getFullYear();
  const anioActual = fechaActual.getFullYear();
  const edad = anioActual - anioNacimiento;
  return parseInt(edad);
};

console.log(getAge(new Date("1995/11/12")));

// 6) Programa que convierte decimal a romano hasta el número 1000.  mifuncion(15)  devolver:  el 15 es XV
const getRomanNumer = (numero = 1) => {
  if ((numero, 1 | (numero > 1000))) {
    console.log("el numero debe ser menor a mil");
    return "Número fuera de rango";
  }
  const diccionarioRomano = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let resultado = "";

  for (const clave in diccionarioRomano) {
    const valor = diccionarioRomano[clave];
    while (numero >= valor) {
      resultado += clave;
      numero -= valor;
    }
  }

  return resultado;
};

console.log(getRomanNumer(0));
// 7) progrma conviete decimal a binario. ejemplo: 1000 = 1111101000.
const getDecimalToBinary = (numero = 1) => {
  if (isNaN(numero)) {
    return "No es un número";
  }
  if (numero < 0) {
    return "0";
  }

  let binario = "";
  while (numero > 0) {
    binario = (numero % 2) + binario;
    numero = Math.floor(numero / 2);
  }

  return binario;
};

console.log(getDecimalToBinary(1000));

// 8) Programa que devuelva el número de vocales de una cadena de texto. Ejemplo: "Hola Mundo" = 4 vocales.
const getCountVocal = (cadena = "") => {
  const vocales = "aeiou";
  if (!cadena) {
    return "Debe ingresar una cadena de texto";
  }
  cadena = cadena.toLocaleLowerCase();
  let contador = 0;
  for (let i = 0; i < cadena.length; i++) {
    if (vocales.includes(cadena[i])) {
      contador++;
    }
  }
  return contador;
};

console.log(getCountVocal("Hola Mundo"));

// 9) Programa que valide si una palabra es palíndromo o no. Ejemplo: "Salas" = true, "Hola" = false.
const validatePalindrome = (cadena = "") => {
  if (!cadena) {
    return "Debe ingresar una palabra";
  }
  let reversarTexto = cadena.split("").reverse().join("");
  console.log(reversarTexto);

  if (cadena === reversarTexto) {
    return `La palabra ${cadena} es palindromo`;
  } else {
    return `La palabra ${cadena} no es palindromo`;
  }
};

console.log(validatePalindrome("salas"));

// 10) Programa que elimine los espacios de una cadena de texto. Ejemplo: "Hola Mundo" = "HolaMundo".
const deleteBlankSpaces =(cadena="")=>cadena.replace(/\s/g, '');
console.log(deleteBlankSpaces('hola mundo'));

// 11) Programa que tome la primera letra de cada palabra y lo devuelva en mayúsculas. Ejemplo: "Yoni Escobar". Resultado: "YE".

const getfirtLetter=(cadena="")=>{
    if(!cadena){
        return "Debe ingresar una palabra";
    }

    const palabras = cadena.split(' ');
    let iniciales='';
    
    for(const palabra of palabras){
        iniciales += palabra[0].toUpperCase();
    }

    return iniciales;
}

console.log(getfirtLetter('yoni escobar'));

// 12) Programa que devuelva la cantidad de palabras de una cadena de texto. Ejemplo: "Hola Mundo" = 2 palabras.

const getSizeWords=(cadena="")=>{
    if(!cadena){
        return "Debe ingresar una palabra";
    }

    const totalPalabras = cadena.split(' ').length;

    return totalPalabras;
}
  
console.log(getSizeWords('samuel armando saravia'));

// 13) Programa que devuelva el texto con la primera letra de cada palabra en mayúscula. Ejemplo: "hola mundo" = "Hola Mundo".
const getFirstLetterUpper=(texto)=> {
    const palabras = texto.split(" ");  
    let resultado = "";
  
    for (const palabra of palabras) {
      if (palabra.length > 0) {
        resultado += palabra[0].toUpperCase() + palabra.slice(1) + " ";
      }
    }
  
    return resultado.trim();
  }

  console.log(getFirstLetterUpper('samuel armando saravia'));
// 14) Programa que devuelva la cadena de texto invertida. Ejemplo: "Hola Mundo" = "odnuM aloH".
const getReverseText=(texto)=> {
    return texto.split('').reverse().join('');
  }

  console.log(getReverseText('Hola Mundo'));

// 15) Programa que pase un arreglo de números y devuelva la suma de todos los números. Ejemplo: suma(10, 20, 30, 40, 50) = "La suma de todos los números es 150".
const getSumaTotal=(...numeros)=> {
    const sumaTotal = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
    return `La suma total es: ${sumaTotal}.`;
  }

  console.log(getSumaTotal(...[10,20,30,40,50]))
// 16) Programa que pase un arreglo de edades y devuelva la mayor y la menor. Ejemplo: edades(10, 20, 30, 40, 50) = "La edad mayor es 50 y la edad menor es 10".

const getMinAndMax=(...edades)=>{
  const min= Math.min(...edades);
  const max= Math.max(...edades);

  return `La edad Menor es: ${min} y la edad Mayor es: ${max}`
}

console.log(getMinAndMax(...[10,20,30,40,50,]))

// 17) programa de escala de notas de 0 a 10. Ejemplo: 0-5 = "Pésimo", 6-7 = "Regular", 8-9 = "Bueno", 10 = "Excelente".
const getNotes =(nota=0)=>{
  if(nota>=0 && nota<=5){
    return "Pesimo"
  }
  if(nota>=6 && nota<=7){
    return "Regular"
  }
  if(nota>=8 && nota<=9){
    return "Bueno"
  }
  if(nota>=10){
    return "Excelente"
  }
}

console.log(getNotes(5))

// 18) programa que devuelva el número de cifras de un número entero. Ejemplo: 1234 = 4 cifras.
const quantity =(number=0)=>{
  if (number===0) {
    return "Debe Ingresar un número mayor a cero"
  }
  return number.toString().length;
}
console.log(quantity(1234))

// 19) programa que muestre los numeros primos de 1 a 1000.
function esPrimo(numero) {
  if (numero <= 1) {
    return false;
  }
  if (numero <= 3) {
    return true;
  }
  if (numero % 2 === 0 || numero % 3 === 0) {
    return false;
  }
  let i = 5;
  while (i * i <= numero) {
    if (numero % i === 0 || numero % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  return true;
}

function mostrarNumerosPrimos() {
  for (let numero = 1; numero <= 1000; numero++) {
    if (esPrimo(numero)) {
      console.log(numero);
    }
  }
}

console.log(mostrarNumerosPrimos())




// 20) Programa que realice el juego de piedra, papel o tijera. Ejemplo: "Piedra" > "Tijera", "Tijera" > "Papel", "Papel" > "Piedra".

const Game ={
  piedra: {
    piedra:'Empate',
    papel:'Gana Papel',
    tijera:'Gana Piedra'
  },
  papel: {
    piedra:'Gana Papel',
    papel:'Empate',
    tijera:'Gana Tijera'
  },
  tijera: {
    piedra:'Gana Piedra',
    papel:'Gana Tijera',
    tijera:'Empate'
  },

}
const opciones={
PIEDRA:'piedra',
PAPEL:'papel',
TIJERA:'tijera'}

console.log(Game[opciones.PAPEL][opciones.PIEDRA]);

// //Resultado: juegoPiedraPapelTijera("piedra", "papel") = "Gana papel".

// 21) Programa con temporizador que muestre un mensaje cada cierto tiempo. Ejemplo: "Hola Mundo" cada 3 segundos.
const showMessage=()=> setInterval(()=>{console.log('Hola Mundo')},3000);

console.log(showMessage())


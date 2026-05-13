
export function addTwoNumbers(a, b/*aqui tambien va código*/) {
  //aqui va tu código
  console.log(a + b);
}

//funcion que reste dos numeros
export function restDosnumeros(a, b) {
  console.log(a - b);
  return a - b;
}


//función que divida dos números
export function divDosnumeros(a, b) {
  console.log(a / b);
  return a / b;
}

//función que reciba 3 números y los sume
export function sumTresnum(a, b, c) {
  console.log(a + b + c);
  return a + b + c;
}

//función que permita encadenar operaciones con 3 datos de entrada Ejemplo 1+2-3
export function encadOperaciones(a, b, c) {
  const resultado = (a + b) - c;
  console.log(resultado);
  return (a + b) - c;

}
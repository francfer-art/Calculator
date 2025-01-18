let addToScreen = (data) => {
  document.getElementById("screen").value += data;

  let sound = document.getElementById("click-sound");
  sound.currentTime = 0; // Reinicia el sonido para reproducirlo desde el inicio
  sound.play();
  
}

let clearScreen = () => {

  //let sound = document.getElementById("click-clean");
  let sound = new Audio("/audio/clean.mp3");
  sound.currentTime = 0; // Reinicia el sonido para reproducirlo desde el inicio
  sound.play();

  document.getElementById("screen").value = "";
}

let calculate = () => {
  let operation = document.getElementById("screen").value;

  console.log(operation);

  let result = realizarOperacion(operation);

  if (result == "Error!" || result == "División entre 0"){
    let sound = document.getElementById("click-error");
    sound.currentTime = 0; // Reinicia el sonido para reproducirlo desde el inicio
    sound.play();
  }
  else {
    let sound = document.getElementById("click-ok");
    sound.currentTime = 0; // Reinicia el sonido para reproducirlo desde el inicio
    sound.play();
  }
  document.getElementById("screen").value = result;
}   

//1º darle estilos y hacer una calculadora guay
//2º darle el comportamiento a la calculadora

/*
5+2 -> 5  |  2  | +  
623/2 -> 623  | 2  | /  
89-14 -> 89  |  14  |   -
*/

//EL OPERADOR SIEMPRE ES el primer caracter no numérico
//seguido de uno numérico

/*
  for (let i = 0; i < operation.length; i++){
      if(isNaN(operation[i]) == false && isNaN(operation[i + 1]) == true) 
  }
*/

/*
CASOS CORRECTOS
1+2
45-3
25/2
+45*-29
+3-+2
5/-3
4--3
-5*-3

*/

//1º busco la posicion del operador
//del primer simbolo no numerico seguido de uno numerico

//isNaN()

//encuentro la posición del operador

//53-2
//2º corto es string desde 0 al operador -> 53
//del operador hasta el final  -> 2
//la misma posiicon es el operador -> -

//3º realizar la operacion 53 menos 2 -> 51


/*
OPERACIONES INCORRECTAS

-- NO HAY DECIMALES -> 5/2 -> 2.5 -> borrar la pantalla
//pq con 5.2 NO PUEDO OPERAR

6

-9

// *9+3

/14-8

-9/*9


3+5+6 -> MAL no puede haber 3 parametros en la operacion

/8

4-/3

-*5


*/

function enncontrarPosOperador(operation) {
  let pos = -1;
  let count = 0;
  for (let i = 0; i < operation.length - 1; i++) {
      if (!isNaN(operation[i]) && isNaN(operation[i + 1])) {
          count++;
          pos = i + 1;
      }
  }
  if (count != 1 || pos == operation.length) {
      pos = -1;
  }
  return pos;
}
  

function obtenerOperacion(operation) {

  let pos = enncontrarPosOperador(operation);
  let operacion = "Error!";

  if (pos != -1) {
      operacion = operation[pos];
  }

  return operacion;
}

function obtenerPrimerNum(operation) {
  let pos = enncontrarPosOperador(operation);
  let num = operation.slice(0,pos);
  return parseInt(num);
}

function obtenerSegundoNum(operation) {
  let pos = enncontrarPosOperador(operation);
  let num = operation.slice(pos + 1,operation.length);
  return parseInt(num);
}

function realizarOperacion(operation) {
  let operador = obtenerOperacion(operation);
  let num1 = obtenerPrimerNum(operation);
  let num2 = obtenerSegundoNum(operation);
  let res = "Error!";
  console.log(operador);
  if (!isNaN(num1) && !isNaN(num2))
  {    
      switch(operador){
          case("+"):
              res = parseInt(num1 + num2);
              break;
          case("-"):
              res = parseInt(num1 - num2);
              break;
          case("*"):
              res = num1 * num2;
              break;
          case("/"):
              res = "División entre 0";
              if (num2 != 0) {
                  res = num1 / num2;
              }
              break;
          default:
              res = "Error!";
              break;
      }
  }
  return res;
}

// Espera a que el DOM esté cargado
document.addEventListener("DOMContentLoaded", function() {
    // Obtén la referencia al elemento <p> con el id "mensaje"
    let mensajeElement = document.getElementById("mensaje");
    // Cambia el contenido del elemento <p>
    mensajeElement.textContent = "El enlace entre HTML y JavaScript en el header ha sido exitoso!";
  }); // Display a message in the console
  console.log("¡Hola! Estás imprimiendo un mensaje por consola");

  // Use prompt to get user input and store it in a variable
  var userInput = prompt("Ingrese informacion:");

  // Display the user input in the console
  console.log("Información ingresada: " + userInput);
  // Prompt the user for their name
  var userName = prompt("Please enter your name:");

  // Greet the user with a personalized message
  alert("Hello, " + userName + "! Nice to meet you.");
  // Prompt the user for their year of birth
  var birthYear = prompt("Please enter your year of birth:");

  // Calculate the user's age based on the current year
  var currentYear = new Date().getFullYear();
  var age = currentYear - birthYear;

  // Print a message to the console with the user's age
  alert("Tienes " + age + " years.");

  // Declarar una variable 'producto' y asignarle un valor de texto representando el nombre del producto.
var producto = "Camiseta";

// Declarar una variable 'cantidadProducto' y asignarle un valor numérico inicial que representa la cantidad en stock.
var cantidadProducto = 100;

// Simular una venta del producto reduciendo 'cantidadProducto' en una cantidad de elección (por ejemplo, 10).
var cantidadVenta = 10;
cantidadProducto -= cantidadVenta;

// Definir una variable 'maximoInventario' y asignarle un valor numérico constante representando la cantidad máxima en inventario.
var maximoInventario = 150;

console.log("Producto: " + producto);
console.log("Cantidad en Stock: " + cantidadProducto);
console.log("Simulación de Venta: Se vendieron " + cantidadVenta + " unidades.");
console.log("Inventario Máximo Permitido: " + maximoInventario);

//Práctica Variables y Operaciones
let codigoDescuentoSecreto = "DESCUENTO10";
let intentosCodigo = 0;

function verificarCodigoDescuento(ingresado) {
  intentosCodigo++;
  if (ingresado === codigoDescuentoSecreto) {
    console.log("¡Felicidades! El código de descuento es correcto.");
  } else {
    console.log("Lo siento, el código de descuento es incorrecto.");
  }
  if (intentosCodigo >= maxIntentosCodigo) {
    console.log("Lo siento, has superado el número máximo de intentos.");
  } else {
    console.log("Todavía tienes " + (maxIntentosCodigo - intentosCodigo) + " intentos restantes.");
  }
}

let maxIntentosCodigo = 5;

verificarCodigoDescuento("DESCUENTO10");
verificarCodigoDescuento("descuento10");
verificarCodigoDescuento("otro_codigo");

//Actividad Cálculo Moneda

let cantidadDolares = 100;
let tipoCambio = 0.85; // por ejemplo, asumimos que 1 dólar es igual a 0.85 euros

let cantidadEuros = cantidadDolares * tipoCambio;
console.log("La cantidad equivalente a " + cantidadDolares + " dólares es " + cantidadEuros + " euros.");

//Actividad Longitud de palabra

let palabra = "hola";
let longitudPalabra = palabra.length;
console.log("La longitud de la palabra " + palabra + " es " + longitudPalabra + ".");

//Actividad Operaciones aritméticas

// Suma
let num1 = 10;
let num2 = 20;
let suma = num1 + num2;
console.log("La suma de " + num1 + " y " + num2 + " es " + suma + ".");

// Resta
let resta = num1 - num2;
console.log("La resta de " + num1 + " y " + num2 + " es " + resta + ".");

// Multiplicación
let multiplicacion = num1 * num2;
console.log("La multiplicación de " + num1 + " y " + num2 + " es " + multiplicacion + ".");

// División
let division = num1 / num2;
console.log("La división de " + num1 + " por " + num2 + " es " + division + ".");

// Resto de la división
let resto = num1 % num2;
console.log("El resto de la división de " + num1 + " entre " + num2 + " es " + resto + ".");

// Incremento
let numero = 10;
numero++;
console.log("El valor de la variable incrementada es " + numero + ".");

// Decremento
numero--;
console.log("El valor de la variable decrementada es " + numero + ".");

// Cuadrado
numero = 10;
let cuadrado = numero * numero;
console.log("El valor de " + numero + " elevado al cuadrado es " + cuadrado + ".");

// Redondeo
let decimal = 12.8;
let redondeado = Math.round(decimal);
console.log("El valor redondeado de " + decimal + " es " + redondeado + ".");

// Número aleatorio
let minimo = 10;
let maximo = 50;
let numeroAleatorio = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
console.log("El número aleatorio entre " + minimo + " y " + maximo + " es " + numeroAleatorio + ".");
// Cálculo de volumen de paquetes para enviar
let anchoPaquete = 20;
let altoPaquete = 30;

const profundidadPaquete = 10;

let volumenPaquete = anchoPaquete * altoPaquete * profundidadPaquete;
console.log("El volumen del paquete es: " + volumenPaquete + " cm3");
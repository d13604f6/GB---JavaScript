// Espera a que el DOM estÃ© cargado
document.addEventListener("DOMContentLoaded", function() {
    // ObtÃ©n la referencia al elemento <p> con el id "mensaje"
    let mensajeElement = document.getElementById("mensaje");
    // Cambia el contenido del elemento <p>
    mensajeElement.textContent = "El enlace entre HTML y JavaScript en el header ha sido exitoso!";
  }); // Display a message in the console
  console.log("Â¡Hola! EstÃ¡s imprimiendo un mensaje por consola");

  // Use prompt to get user input and store it in a variable
  var userInput = prompt("Ingrese informacion:");

  // Display the user input in the console
  console.log("InformaciÃ³n ingresada: " + userInput);
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

// Declarar una variable 'cantidadProducto' y asignarle un valor numÃ©rico inicial que representa la cantidad en stock.
var cantidadProducto = 100;

// Simular una venta del producto reduciendo 'cantidadProducto' en una cantidad de elecciÃ³n (por ejemplo, 10).
var cantidadVenta = 10;
cantidadProducto -= cantidadVenta;

// Definir una variable 'maximoInventario' y asignarle un valor numÃ©rico constante representando la cantidad mÃ¡xima en inventario.
var maximoInventario = 150;

console.log("Producto: " + producto);
console.log("Cantidad en Stock: " + cantidadProducto);
console.log("SimulaciÃ³n de Venta: Se vendieron " + cantidadVenta + " unidades.");
console.log("Inventario MÃ¡ximo Permitido: " + maximoInventario);

//PrÃ¡ctica Variables y Operaciones
let codigoDescuentoSecreto = "DESCUENTO10";
let intentosCodigo = 0;

function verificarCodigoDescuento(ingresado) {
  intentosCodigo++;
  if (ingresado === codigoDescuentoSecreto) {
    console.log("Â¡Felicidades! El cÃ³digo de descuento es correcto.");
  } else {
    console.log("Lo siento, el cÃ³digo de descuento es incorrecto.");
  }
  if (intentosCodigo >= maxIntentosCodigo) {
    console.log("Lo siento, has superado el nÃºmero mÃ¡ximo de intentos.");
  } else {
    console.log("TodavÃ­a tienes " + (maxIntentosCodigo - intentosCodigo) + " intentos restantes.");
  }
}

let maxIntentosCodigo = 5;

verificarCodigoDescuento("DESCUENTO10");
verificarCodigoDescuento("descuento10");
verificarCodigoDescuento("otro_codigo");

//Actividad CÃ¡lculo Moneda

let cantidadDolares = 100;
let tipoCambio = 0.85; // por ejemplo, asumimos que 1 dÃ³lar es igual a 0.85 euros

let cantidadEuros = cantidadDolares * tipoCambio;
console.log("La cantidad equivalente a " + cantidadDolares + " dÃ³lares es " + cantidadEuros + " euros.");

//Actividad Longitud de palabra

let palabra = "hola";
let longitudPalabra = palabra.length;
console.log("La longitud de la palabra " + palabra + " es " + longitudPalabra + ".");

//Actividad Operaciones aritmÃ©ticas

// Suma
let num1 = 10;
let num2 = 20;
let suma = num1 + num2;
console.log("La suma de " + num1 + " y " + num2 + " es " + suma + ".");

// Resta
let resta = num1 - num2;
console.log("La resta de " + num1 + " y " + num2 + " es " + resta + ".");

// MultiplicaciÃ³n
let multiplicacion = num1 * num2;
console.log("La multiplicaciÃ³n de " + num1 + " y " + num2 + " es " + multiplicacion + ".");

// DivisiÃ³n
let division = num1 / num2;
console.log("La divisiÃ³n de " + num1 + " por " + num2 + " es " + division + ".");

// Resto de la divisiÃ³n
let resto = num1 % num2;
console.log("El resto de la divisiÃ³n de " + num1 + " entre " + num2 + " es " + resto + ".");

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

// NÃºmero aleatorio
let minimo = 10;
let maximo = 50;
let numeroAleatorio = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
console.log("El nÃºmero aleatorio entre " + minimo + " y " + maximo + " es " + numeroAleatorio + ".");
// CÃ¡lculo de volumen de paquetes para enviar
let anchoPaquete = 20;
let altoPaquete = 30;

const profundidadPaquete = 10;

let volumenPaquete = anchoPaquete * altoPaquete * profundidadPaquete;
console.log("El volumen del paquete es: " + volumenPaquete + " cm3");

//Actividad Condicionales: If

let calificacion = prompt("Ingresa tu calificación");
calificacion = Number(calificacion);

if (calificacion >= 70) {
  console.log("Felicidades, ¡aprobaste el examen!");
} else {
  console.log("Lo siento, no aprobaste el examen. ¡Sigue estudiando!");
}
//Actividad Condicionales: If ternario
let precioProducto = prompt("Ingresa el precio del producto");
precioProducto = Number(precioProducto);

let precioFinal = (precioProducto >= 1000) ? (precioProducto * 0.9) : precioProducto;

console.log("El precio final con el descuento aplicado es: $" + precioFinal);
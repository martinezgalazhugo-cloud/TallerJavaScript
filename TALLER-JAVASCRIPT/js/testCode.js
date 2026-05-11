// --- Ejemplo de var, const y let ---
// --- var (No recomendado) ---
var nombre = "Juan";
var nombre = "Pedro"; // Permite redeclarar (propenso a errores)
if (true) {
  var nombre = "Luis"; // Cambia la variable global/función
}
console.log(nombre); // "Luis"
// --- let (Para variables que cambian) ---
let edad = 25;
edad = 26; // Se puede reasignar
if (true) {
  let edad = 30; // Solo vive dentro de este bloque { }
  console.log(edad); // 30
}
console.log(edad); // 25 (mantiene su valor fuera del bloque)
// --- const (Para valores constantes) ---
const PI = 3.1416;
// PI = 3.15; // Error: No se puede reasignar

//Formulario, validaciones y registro
//Seleccionar elementos del formulario
const formularioRegistro = document.querySelector("#formulario-registro");
const inputNombre = document.querySelector("#nombre");
const inputCorreo = document.querySelector("#correo");
const listaInscritos = document.querySelector("#lista-inscritos");

const inscritos = [];

//Función para validar correo institucional
function validarCorreoInstitucional(correo) {
  const expresion = /^[0-9]{8,11}@ues\.mx$/i;
  return expresion.test(correo);
}

//Función para mostrar inscritos
function mostrarInscritos() {
  listaInscritos.innerHTML = "";

  if (inscritos.length === 0) {
    listaInscritos.innerHTML = "<li>No hay alumnos inscritos todavia.</li>";
    return;
  }

  inscritos.forEach(function (inscrito) {
    const item = document.createElement("li");

    item.textContent = `${inscrito.nombre} - ${inscrito.correo}` - `(${inscrito.taller})`;

    listaInscritos.appendChild(item);
  });
}

//Evento del Formulario
formularioRegistro.addEventListener("submit", function (evento) {
  evento.preventDefault();
  const nombre = inputNombre.value.trim();
  const correo = inputCorreo.value.trim();
  if (nombre === "" || correo === "") {
    mostrarMensaje("Todos los campos son obligatorios.", "error");
    return;
  }
  if (tallerSeleccionado === null) {
    mostrarMensaje("Debes seleccionar un taller antes de registrar.",
      "error");
    return;
  }
  if (!validarCorreoInstitucional(correo)) {
    mostrarMensaje(
      "El correo debe tener el formato institucional. Ejemplo: 12345678901@ues.mx",
      "error"
    );
    return;
  }
  const correoDuplicado = inscritos.some(function (inscrito) {
    return inscrito.correo.toLowerCase() === correo.toLowerCase();
  });
  if (correoDuplicado) {
    mostrarMensaje("Este correo ya fue registrado en un taller.", "error");
    return;
  }
  const cuposDisponibles =
    tallerSeleccionado.cupo - tallerSeleccionado.inscritos;
  if (cuposDisponibles <= 0) {
    mostrarMensaje(
      "El taller seleccionado ya no tiene cupo disponible.",
      "error",

    );
    return;
  }
  const nuevoRegistro = {
    nombre: nombre,
    correo: correo,
    taller: tallerSeleccionado.nombre,
  };
  inscritos.push(nuevoRegistro);
  tallerSeleccionado.inscritos++;
  mostrarInscritos();
  mostrarTalleres();
  mostrarMensaje("Alumno registrado correctamente.", "exito");
  formularioRegistro.reset();
  tallerSeleccionado = null;
});

//Seleccion el buscador
const buscador = document.querySelector("#buscador");

//Evento del buscador
buscador.addEventListener("input", function () {
  const textBusqueda = buscador.value.toLowerCase();

  const talleresFiltrados = talleres.filter(function (taller) {
    return taller.nombre.toLowerCase().includes(textBusqueda);
  });

  mostrarTalleres(talleresFiltrados);
});

//




//Evento submit del formulario
import { talleres } from "./datosTalleres.js";

//Utilizar backticks para escribir texto en varias lineas
console.log("Todo esta funcionando correctamente");

/* Comentario multilinea 

const nombreTaller = "JavaScript: fundamentos para avanzar hacia frameworks";
const duracionHoras = 4;
const modalidad = "Precencial";

console.log(nombreTaller);
console.log(duracionHoras);
console.log(modalidad);
*/

//seleccion de contenedor
const contenedorTalleres = document.querySelector("#lista-talleres");

const inputTallerseleccionado = document.querySelector("#taller-seleccionado");
const mensaje = document.querySelector("#mensaje");

let tallerSeleccionado = null;

function mostrarMensaje(texto, tipo) {
  mensaje.textContent = texto;
  mensaje.className = `mensaje ${tipo}`;
}

contenedorTalleres.addEventListener("click", function (evento) {
  if (evento.target.classList.contains("btn-seleccionar")) {
    const idTaller = Number(evento.target.dataset.id);
    tallerSeleccionado = talleres.find(function (taller) {
      return taller.id === idTaller;
    });
    inputTallerseleccionado.value = tallerSeleccionado.nombre;

    mostrarMensaje(`Taller seleccionado: ${tallerSeleccionado.nombre}`, "info");
  }
});

//funcion
/*
function mostrarTalleres() {
    contenedorTalleres.innerHTML = "";

    talleres.forEach(function (taller){
        const tarjeta = document.createElement("article");

        tarjeta.classList.add("tarjeta");

        tarjeta.innerHTML = 
        `<h3>${taller.nombre}</h3> 
        <p><strong>Instructor:</strong> ${taller.instructor}</p>
        <p><strong>Categoria:</strong> ${taller.categoria}</p>
        <p>${taller.descripcion}</p>
        <p><strong>Cupo:</strong> ${taller.inscritos} / ${taller.cupo}</p>
        `;

        contenedorTalleres.appendChild(tarjeta);
    });
}

mostrarTalleres();
*/

function mostrarTalleres(lista = talleres) {
  contenedorTalleres.innerHTML = "";

  if (lista.length === 0) {
    contenedorTalleres.innerHTML = "<p>No se encontraron talleres.</p>";
    return;
  }

  lista.forEach(function (taller) {
    const cuposDisponibles = taller.cupo - taller.inscritos;
    const hayCupo = cuposDisponibles > 0;

    const tarjeta = document.createElement("article");
    tarjeta.classList.add("tarjeta");

    tarjeta.innerHTML = ` 
      <h3>${taller.nombre}</h3> 
      <p><strong>Instructor:</strong> ${taller.instructor}</p> 
      <p><strong>Categoría:</strong> ${taller.categoria}</p> 
      <p>${taller.descripcion}</p> 
 
      <p class="${hayCupo ? "cupo-disponible" : "cupo-lleno"}"> 
        ${hayCupo ? `Cupos disponibles: ${cuposDisponibles}` : "Cupo lleno"} 
      </p> 
 
      <button  
        class="btn-seleccionar"  
        data-id="${taller.id}" 
        ${hayCupo ? "" : "disabled"} 
      > 
        Seleccionar taller 
      </button> 
    `;

    contenedorTalleres.appendChild(tarjeta);
  });
}

mostrarTalleres()

console.log(talleres[0].nombre);
console.log(talleres[1].nombre);
console.log(talleres[2].nombre);
console.log(talleres[3].nombre);
console.log(talleres[4].nombre);

console.log(talleres);

mostrarTalleres();
mostrarInscritos();

"use strict";

let botonOfuscar = document.querySelector("#botonOfuscar");

botonOfuscar.addEventListener("click", () => {
  ofuscar();
});

function ofuscar() {
  let urls = document.querySelector("#inputURLs");
  let arregloURLS;
  let nuevo = [];
  let divMostrar = document.querySelector(".resultado");

  divMostrar.querySelectorAll("*").forEach(n => n.remove());
  arregloURLS = urls.value.split("\n");

  if (arregloURLS[arregloURLS.length - 1] == "") {
    arregloURLS.pop();
  }

  arregloURLS.forEach(e => {
    let resultado = e.split("/");
    nuevo.push(resultado);
  });
  nuevo.forEach(e => {
    let cambio = e.splice(0, 1, "hxxp:");
    let cambioPunto = e[2].split(".");
    cambio = e.splice(2, 1, cambioPunto.join("[.]"));
    return cambio;
  });

  let union = nuevo.map(e => {
    return e.join("/");
  });

  union.forEach(e => {
    let parrafo = document.createElement("p");
    parrafo.innerHTML = e;
    divMostrar.appendChild(parrafo);
  });
}

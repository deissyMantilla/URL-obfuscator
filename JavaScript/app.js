"use strict";

let botonOfuscar = document.querySelector("#botonOfuscar");
let botonLimpiar = document.querySelector("#limpiar");
let urls = document.querySelector("#inputURLs");

botonOfuscar.addEventListener("click", () => {
  ofuscar();
});

botonLimpiar.addEventListener("click", () => (urls.value = ""));

function ofuscar() {
  let arregloURLS;
  let nuevo = [];
  let divMostrar = document.querySelector(".resultado");

  divMostrar.querySelectorAll("*").forEach(n => n.remove());
  arregloURLS = urls.value.split("\n");

  arregloURLS.forEach((e, ubicacion) => {
    if (e == "" || e == "null") {
      arregloURLS.splice(ubicacion, 1);
    }
  });

  nuevo = arregloURLS.map(e => {
    let urlConCambioHxxp = e.replace("http", "hxxp");
    let urlCambioPunto = urlConCambioHxxp.replace(/\./gi, "[.]");
    return urlCambioPunto;
  });

  nuevo.forEach(e => {
    let parrafo = document.createElement("div");
    parrafo.innerHTML = e;
    parrafo.className = "parrafo";
    divMostrar.appendChild(parrafo);
  });
}

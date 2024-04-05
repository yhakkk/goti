let contador = 0;

function AgregarTexto() {
  let texto = document.getElementById("texto").value;
  if (!texto =="") {
      let lista = document.getElementById("lista");
      let agregar = document.createElement("div");
      let boton = document.createElement("button")
      agregar.id = "div-" + contador;
      boton.id = "boton-" + contador;
      boton.textContent = "Modificar"
      boton.style = "margin:0;";
      contador += 1;
      agregar.innerHTML = texto + "<button style='margin:0 ;' onclick='BorrarDiv(\"" + agregar.id + "\")'>Realizado</button>";
      agregar.appendChild(boton);
      lista.appendChild(agregar);
    }
    GuardarListaEnLocalStorage();

  }

  function LLamarPuerta() {
    // Crear un nuevo elemento de audio
    let timbre = new Audio('C:/Users/tomi_/OneDrive/Escritorio/Cosas Anterior PC/Universidad/TODOLIST/Timbre de aeropuerto - Sonido  Sound.mp3');
    
    // Reproducir el sonido del timbre
    timbre.play();
}

// Obtener referencia al botón de la puerta
let botonPuerta = document.getElementById("puerta");

// Agregar un event listener para llamar a la función LLamarPuerta() cuando se haga clic en el botón
botonPuerta.addEventListener("click", LLamarPuerta);

function BorrarDiv(idDiv) {
  let Divcreado = document.getElementById(idDiv);
  Divcreado.remove();
  GuardarListaEnLocalStorage();

}

function ModificarTexto(){
 
}


function GuardarListaEnLocalStorage() {
  let lista = document.getElementById("lista");
  localStorage.setItem("listaTareas", lista.innerHTML);
}
window.addEventListener("DOMContentLoaded", function() {
  let lista = document.getElementById("lista");
  let listaGuardada = localStorage.getItem("listaTareas");
  if (listaGuardada) {
    lista.innerHTML = listaGuardada;
  }
});
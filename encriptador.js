let texto = document.querySelector(".texto");
let mensaje = document.querySelector(".mensaje");

const removeAccents = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

function convertirTextoMinuscula() {
  let textoTransformado = removeAccents(texto.value).toLowerCase();
  return textoTransformado;
}
function encriptar() {
  let texto = convertirTextoMinuscula();

  let textoTransform = Array.from(texto);
  for (let i = 0; i < textoTransform.length; i++) {
    switch (textoTransform[i]) {
      case "a":
        textoTransform[i] = "ai";
        break;
      case "e":
        textoTransform[i] = "enter";
        break;
      case "i":
        textoTransform[i] = "imes";
        break;
      case "o":
        textoTransform[i] = "ober";
        break;
      case "u":
        textoTransform[i] = "ufat";
        break;
    }
  }
  return textoTransform.join("");
}
function desencriptar() {
  let texto = convertirTextoMinuscula();
  let nuevaCadena = texto.replaceAll("ai", "a");
  nuevaCadena = nuevaCadena.replaceAll("enter", "e");
  nuevaCadena = nuevaCadena.replaceAll("imes", "i");
  nuevaCadena = nuevaCadena.replaceAll("ober", "o");
  nuevaCadena = nuevaCadena.replaceAll("ufat", "u");
  return nuevaCadena;
}

function ocultarElementos() {
  document.querySelector(".mensaje").style.background = "none";
  document.querySelector(".info2").style.visibility = "hidden";
  document.querySelector(".info3").style.visibility = "hidden";
  document.querySelector(".btn-C").style.visibility = "visible";
}

function mostrarTextoEnc() {
  if (!(texto.value == "")) {
    ocultarElementos();
    var mensaje1 = mensaje.value = encriptar();
  }
}

function mostrarTextoDes() {
  if (!(texto.value == "")) {
    ocultarElementos();
    mensaje.value = desencriptar();
  }
}

function copyMessage() {
  var mensajeCopy = mensaje;
  mensajeCopy.select();
  navigator.clipboard.writeText(mensajeCopy.value);
  texto.value = "";
  texto.focus();
}

const reload = document.getElementById("reload");
reload.addEventListener("click", (_) => {
  // el _ es para indicar la ausencia de parametros
  //codigo recuperado de: https://developer.mozilla.org/es/docs/Web/API/Location/reload
  location.reload();
  mensaje.value = "";
});

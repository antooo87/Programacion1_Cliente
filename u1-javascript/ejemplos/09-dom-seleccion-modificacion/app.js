// --- selección de elementos ---
// querySelector devuelve el PRIMER elemento que coincide con el selector CSS
const parrafoObjetivo = document.querySelector("#parrafo-objetivo");
console.log(parrafoObjetivo);

// querySelectorAll devuelve TODOS los elementos que coinciden, como una
// NodeList (parecida a un array, se puede recorrer con forEach)
const todosLosParrafos = document.querySelectorAll("p");
console.log(todosLosParrafos);

// --- textContent vs innerHTML ---
const campoTexto = document.querySelector("#campo-texto");
const salidaTextContent = document.querySelector("#salida-textcontent");
const salidaInnerHtml = document.querySelector("#salida-innerhtml");

function compararTextContentVsInnerHtml() {
  const texto = campoTexto.value;

  // textContent trata el valor como TEXTO PLANO, siempre, sin excepciones.
  // Si el usuario escribe "<b>hola</b>", se ve literalmente esa etiqueta
  // como texto, no se interpreta como HTML. Es la opción segura para
  // mostrar cualquier dato que venga de un usuario o de fuera de la página.
  salidaTextContent.textContent = texto;

  // innerHTML interpreta el valor como HTML. Si el usuario escribe
  // "<b>hola</b>", aquí sí se renderiza en negrita. El problema es que
  // si el texto viniera de un usuario malicioso, podría meter un
  // <script> o un atributo con JS y ejecutarse en la página: eso es un
  // ataque XSS (Cross-Site Scripting). Por eso innerHTML solo se usa con
  // contenido que controlamos nosotros, nunca con datos de usuario.
  salidaInnerHtml.innerHTML = texto;
}

campoTexto.addEventListener("input", compararTextContentVsInnerHtml);

// --- classList ---
const botonClase = document.querySelector("#boton-clase");
botonClase.addEventListener("click", () => {
  // toggle añade la clase si no la tiene, y la quita si ya la tiene
  parrafoObjetivo.classList.toggle("destacado");
});

// --- setAttribute y createElement ---
const botonCrear = document.querySelector("#boton-crear");
const listaElementos = document.querySelector("#lista-elementos");
let contadorElementos = 0;

botonCrear.addEventListener("click", () => {
  contadorElementos = contadorElementos + 1;

  // createElement crea un nodo nuevo que todavía no está en la página
  const nuevoElemento = document.createElement("li");

  // textContent para el contenido: es texto, no HTML de confianza
  nuevoElemento.textContent = `Elemento número ${contadorElementos}`;

  // setAttribute para poner atributos HTML, como data-* o id
  nuevoElemento.setAttribute("data-indice", contadorElementos);

  // hasta que no se "engancha" al DOM con appendChild, no se ve en pantalla
  listaElementos.appendChild(nuevoElemento);
});

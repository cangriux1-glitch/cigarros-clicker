
const boton = document.getElementById("b1");   // 🖐 Guardamos el botón
const contadorSpan = document.getElementById("contador"); // 🖐 Guardamos el lugar donde mostramos el contador
let contador = 0; // 🔢 Variable que llevará la cuenta

boton.addEventListener("click", function() {  // 👆 Cuando se haga click en el botón
    contador = contador + 1;                  // ➕ Sumamos 1 al contador
    contadorSpan.innerText = contador;        // 🖨 Actualizamos el número que se ve en pantalla
const sonido = new Audio("blip.mp3")
sonido.currentime =
sonido.play();
});
function mostrarTab(id) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('activa'));
  document.getElementById(id).classList.add('activa');
}
const btnIrATab2 = document.getElementById('btnIrATab2');
const btnVolverATab1 = document.getElementById('btnVolverATab1');

btnIrATab2.addEventListener('click', () => mostrarTab('tab2'));
btnVolverATab1.addEventListener('click', () => mostrarTab('tab1'));

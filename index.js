const nombre = 'amian Prácticas';
document.getElementById('nombre').innerText = `${nombre}`;
const contenedor = document.getElementById('resultado');

let valor = 1;
let texto = '';

function generateFizz(initial, valueEnd) {
  contenedor.innerHTML = ''; // Clean

  let delay = 0;

  for (let i = initial; i <= valueEnd; i++) {
    (function (num) {
      setTimeout(() => {
        if (i % 3 === 0 && i % 5 === 0) {
          texto = 'FIZZBUZZ';
        } else if (i % 3 === 0) {
          texto = 'FIZZ';
        } else if (i % 5 === 0) {
          texto = 'BUZZ';
        } else {
          texto = i;
        }

        const box = document.createElement('div');

        if (texto === 'FIZZBUZZ') box.className = 'fizzbuzz';
        else if (texto === 'FIZZ') box.className = 'fizz';
        else if (texto === 'BUZZ') box.className = 'buzz';

        box.textContent = texto;
        contenedor.appendChild(box);
      }, delay);
    })(i);
    delay += 100; // 100ms entre cada número
  }
}

generateFizz(1, 100);

//inputs y botón
const inputBegin = document.getElementById('initial-value');
const inputEnd = document.getElementById('ending-value');
const playButton = document.getElementById('play');

//VALIDACIÓN DINÁMICA
function validarInputs() {
  const begin = parseInt(inputBegin.value);
  const end = parseInt(inputEnd.value);

  if (isNaN(begin) || isNaN(end) || begin < 1 || end < 1 || begin > end) {
    playButton.disabled = true;
  } else {
    playButton.disabled = false;
  }
}

inputBegin.addEventListener('input', validarInputs);
inputEnd.addEventListener('input', validarInputs);

//FUNCIONALIDAD DEL BOTÓN
playButton.addEventListener('click', () => {
  const begin = parseInt(inputBegin.value);
  const end = parseInt(inputEnd.value);

  generateFizz(begin, end);
});

/*
lo habia armado con while pero con el setTimeout habia conflictos
Porque for (let i = ... ) crea una nueva copia de i en cada iteración, y setTimeout la captura correctamente.
En cambio, while usa siempre la misma initial, y para cuando los setTimeout se ejecutan... ya cambió.

ademas el timeOut tarda demasiado por lo que tengo que usar un
IIFE = Immediately Invoked Function Expression.

Es una función que declarás y llamás al instante.

Se usa para crear un scope propio, separado del contexto exterior(porque el scope del i no se guarda a tiempo y termina siendo un 101 constante en el I
Porque cuando el bucle itera rápido, los setTimeout programados no capturan el valor de i en el momento, sino que apuntan a la misma variable i, que al final del bucle vale 101.
*/

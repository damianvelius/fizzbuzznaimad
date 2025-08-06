const nombre = 'amian Prácticas';
document.getElementById('nombre').innerText = `${nombre}`;
const contenedor = document.getElementById('resultado');

/*Funtions */
/*funcion que controla la generacion de cada valor del fizz con un timeOut para darle una pequeña animacion*/
function generateFizz(initial, valueEnd) {
  contenedor.innerHTML = ''; // Clean
  let delay = 0;

  for (let i = initial; i <= valueEnd; i++) {
    setTimeout(() => {
      const box = generateBox(i);
      contenedor.appendChild(box);
    }, delay);
    delay += 100; // 100ms entre cada número
  }
}

/*funcion que se encarga de crear una box con el contenido fizz */
function generateBox(num) {
  const box = document.createElement('div');
  if (num % 3 === 0 && num % 5 === 0) {
    box.className = 'fizzbuzz';
    box.textContent = 'FIZZBUZZ';
  } else if (num % 3 === 0) {
    box.className = 'fizz';
    box.textContent = 'FIZZ';
  } else if (num % 5 === 0) {
    box.className = 'buzz';
    box.textContent = 'BUZZ';
  } else {
    box.textContent = num;
  }
  return box;
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

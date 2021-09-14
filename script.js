const generatedLetter = document.getElementById('carta-gerada');

const input = document.getElementById('carta-texto');
const button = document.getElementById('criar-carta');

function removeOldLetter() {
  while (generatedLetter.firstChild) {
    const toRemove = generatedLetter.firstChild;
    generatedLetter.removeChild(toRemove);
  }
}

function generateLetter() {
  if (input.value === '' || input.value === ' ' || `${input.value}`.includes('  ')) {
    const word = document.createElement('span');
    const letter = 'Por favor, digite o conteúdo da carta.';
    word.innerText = letter;
    generatedLetter.appendChild(word);
  } else {
    removeOldLetter();
    const letter = input.value;
    const letterWords = `${letter}`.split(' ');
    for (let i = 0; i < letterWords.length; i += 1) {
      const word = document.createElement('span');
      word.innerText = letterWords[i];
      word.className = 'word';
      generatedLetter.appendChild(word);
    }
  }
}

button.addEventListener('click', generateLetter);
input.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    generateLetter();
  }
});

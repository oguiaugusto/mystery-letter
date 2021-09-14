const generatedLetter = document.getElementById('carta-gerada');

const input = document.getElementById('carta-texto');
const button = document.getElementById('criar-carta');

function generateLetter() {
  while (generatedLetter.firstChild) {
    const toRemove = generatedLetter.firstChild;
    generatedLetter.removeChild(toRemove);
  }
  const letter = input.value;
  const letterWords = `${letter}`.split(' ');
  for (let i = 0; i < letterWords.length; i += 1) {
    const word = document.createElement('span');
    word.innerText = letterWords[i];
    word.className = 'word';
    generatedLetter.appendChild(word);
  }
}

button.addEventListener('click', generateLetter);
input.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    generateLetter();
  }
});

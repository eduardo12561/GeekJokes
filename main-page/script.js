const joke = document.getElementById('joke');
const button = document.getElementById('button');

const toJson = response => response.json()
const dataHtml = data => joke.innerHTML = data.joke

function getRandomJoke () {
  fetch('https://geek-jokes.sameerkumar.website/api?format=json')
    .then(toJson)
    .then(dataHtml);
    
}

button.addEventListener('click', getRandomJoke)


const titulo = document.querySelector('h1',);
typeWriter(titulo);

function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArray.forEach((letra, i) => {
      setTimeout(() => 
          elemento.innerHTML += letra , 75 * i)
  });
}




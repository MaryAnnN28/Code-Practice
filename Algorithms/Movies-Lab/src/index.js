const FILMS_URL = "http://localhost:3000/films"
const FILM1_URL = "http://localhost:3000/films/1"

document.addEventListener("DOMContentLoaded", () => {
  fetchMovie
})

function fetchMovie() {
  fetch(FILM1_URL)
    .then(resp => resp.json())
    .then(movie => console.log(movie))
}


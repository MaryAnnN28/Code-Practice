const FILMS_URL = "http://localhost:3000/films"
const FILM1_URL = "http://localhost:3000/films/1"

document.addEventListener("DOMContentLoaded", () => {
  fetchMovie()
})

function fetchMovie() {
  fetch(FILM1_URL)
    .then(resp => resp.json())
    .then(movie => renderMovie(movie))
  }
  
  
  function renderMovie(movie) {
    const movieTitle = document.getElementById('title')
    movieTitle.innerText = movie.title
  
  const movieRuntime = document.getElementById('runtime')
  movieRuntime.innerText = movie.runtime
  
  const movieDescription = document.getElementById('film-info')
  movieDescription.innerText = movie.description
  
  const movieShowtime = document.getElementById('showtime')
  movieShowtime.innerText = movie.showtime
  
  const moviePoster = document.getElementById('poster')
  moviePoster.src = movie.poster
  
  const ticketsAvailable = document.getElementById('ticket-num')
  ticketsAvailable.innerText = movie.capacity - movie.tickets_sold
  
  const buyTicketBtn = document.querySelector('#buy-ticket')
  buyTicketBtn.addEventListener("click", handleTicket(movie))
}

function handleTicket(movie) {
  const buyTicket = document.getElementById('buy-ticket')
  buyTicket.addEventListener("click", (event) => {
    
    let buyMovieTicket = {
      tickets_sold: movie.tickets_sold + 1
    }
    
    let reqPack = {
      headers: { "Content-Type": "application/json" },
      method: "PATCH",
      body: JSON.stringify(buyMovieTicket)
    }
    
    fetch(FILM1_URL, reqPack)
    .then(resp => resp.json())
    .then((movie) => renderMovie(movie))
  })
}

function fetchMovieList() {
  fetch("http://localhost:3000/films")
    .then(resp => resp.json())
    .then(movies => renderMovieList(movies))
}

function renderMovieList(movies) {
  const movieList = document.querySelector('#films')
  const movieName = document.getElementById('film-item')
        movieName.innerHTML = ""
  movies.title.forEach(title => {
    const movieLi = document.createElement('li')
          movieLi.innerText = title
  })

  movieName.appendChild(movieLi)
  movieList.append(movieName)

}
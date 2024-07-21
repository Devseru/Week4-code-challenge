
        document.addEventListener("DOMContentLoaded", () => {
            const filmsList = document.getElementById("films");
            const poster = document.getElementById("poster");
            const title = document.getElementById("title");
            const description = document.getElementById("description");
            const runtime = document.getElementById("runtime");
            const showtime = document.getElementById("showtime");
            const availableTickets = document.getElementById("available-tickets");
            const buyTicketButton = document.getElementById("buy-ticket");

            let currentFilm = null;

            fetch("http://localhost:3000/films")
                .then(response => response.json())
                .then(films => {
                    films.forEach(film => {
                        const filmItem = document.createElement("li");
                        filmItem.textContent = film.title;
                        filmItem.classList.add("film");
                        filmItem.addEventListener("click", () => displayFilmDetails(film));
                        filmsList.appendChild(filmItem);
                    });

                    // Display the first film's details
                    if (films.length > 0) {
                        displayFilmDetails(films[0]);
                    }
                });

            // Display film details
            function displayFilmDetails(film) {
                currentFilm = film;
                poster.src = film.poster;
                title.textContent = film.title;
                description.textContent = film.description;
                runtime.textContent = film.runtime;
                showtime.textContent = film.showtime;
                updateAvailableTickets(film);

                buyTicketButton.disabled = film.capacity - film.tickets_sold <= 0;
                buyTicketButton.textContent = film.capacity - film.tickets_sold > 0 ? "Buy Ticket" : "Sold Out";
            }

            function updateAvailableTickets(film) {
                const available = film.capacity - film.tickets_sold;
                availableTickets.textContent = available;
            }

            buyTicketButton.addEventListener("click", () => {
                if (currentFilm && currentFilm.tickets_sold < currentFilm.capacity) {
                    currentFilm.tickets_sold += 1;
                    updateAvailableTickets(currentFilm);

                    if (currentFilm.capacity - currentFilm.tickets_sold <= 0) {
                        buyTicketButton.disabled = true;
                        buyTicketButton.textContent = "Sold Out";
                    }
                }
            });
        });
    

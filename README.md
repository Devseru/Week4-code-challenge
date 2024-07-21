# Flatdango: A Movie Ticket Booking Web App
Flatdango is a web application that allows users to browse movies and purchase tickets. It's built with HTML, CSS, and JavaScript for a user-friendly interface. The application retrieves movie data from a local JSON server, ensuring smooth operation without an external database.

# What you can do with Flatdango:
See details of the top movie right when you open the app.
Browse a list of all movies currently showing.
Click on any movie to get a detailed view, including poster, runtime, showtime, and available tickets.
Purchase tickets for a movie as long as they're not sold out.
See the number of tickets update dynamically as they are purchased.
Know when a movie is sold out - the app will disable ticket purchases and display "Sold Out".

# Setting Up Flatdango:
## To run Flatdango on your machine, you'll need Node.js and npm installed. Here's how to get started:
Clone the Flatdango repository from GitHub.
Install JSON Server globally if you don't have it already.
Start the JSON Server using the provided db.json file (this acts as your movie data storage).
Open index.html in your browser to start using the application.

# Using Flatdango:
The first movie's details are displayed upon opening the app.
The left sidebar shows a list of all available movies. Click on a title to see its details.
To buy a ticket, click the "Buy Ticket" button. This will reduce the available ticket count.
If a movie is sold out, the button will be disabled and change text to "Sold Out".

# What's under the hood:
HTML: Provides the structure and content of the web page.
CSS: Defines the visual style of the application.
JavaScript: Makes the application interactive by handling user actions and updating the display.
JSON Server: Acts as a local server that stores and serves movie data in JSON format.

# Future plans for Flatdango:
Allow purchased tickets to be saved by updating the JSON server data.
Implement a feature to remove movies from the list.
Enhance the user interface with more styling and responsiveness for different screen sizes.

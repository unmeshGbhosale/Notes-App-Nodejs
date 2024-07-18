# Notes Web App

This is a simple Notes Web App built using Node.js and Express.js. The app allows users to add notes with a title and details. The notes are saved as files in the backend and can be viewed on the frontend.

## Features

- Add a title and details for each note.
- Save notes as files on the server.
- Display the list of notes on the frontend.
- View the full details of each note by clicking "Read More".

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/unmeshGbhosale/Notes-App-Nodejs
    ```
2. Navigate to the project directory:
    ```bash
    cd Notes-App-Nodejs
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the server:
    ```bash
    npm start
    ```
2. Open your web browser and go to `http://localhost:3000` to view the app.

## Routes

- **GET /**: Home page displaying the list of notes.
- **POST /add-note**: Endpoint to add a new note. The note is saved as a file on the server.
- **GET /file/:filename/:title**: Endpoint to view the details of a specific note.

## Adding a Note

1. On the home page, enter the title and details of the note in the respective text boxes.
2. Press the "Submit" button. This will create a file on the server with the note's title and details.
3. The note will be displayed on the home page.

## Viewing a Note

1. On the home page, click the "Read More" button next to a note.
2. A new route will open, displaying the details of the note.

## Technologies Used

- Node.js
- Express.js
- HTML
- CSS
- JavaScript

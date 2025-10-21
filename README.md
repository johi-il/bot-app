# Bot Army React App

This project is a simple React application for managing a collection of bots.  
Users can view all available bots, enlist bots into their personal army, release them, or permanently discharge them from service.

---

## Features

- **View All Bots:**  
  Fetches and displays a list of bots from a backend API.

- **Add to Army:**  
  Click on any bot in the collection to add it to your personal army.  
  A bot can only be added once.

- **Release a Bot:**  
  Click on a bot in your army to release it.  
  This removes the bot from the army but keeps it in the main collection.

- **Discharge a Bot:**  
  Click the red "x" button on a bot in your army to permanently remove it from both the backend and the frontend.

---

## Project Structure

src/
│
├── components/
│ ├── App.js
│ ├── BotCollection.js
│ ├── BotCollectionChild.js
│ ├── YourBotArmy.js
│ └── db.json
│
├── index.js
└── App.css

---

## API Endpoints

The application uses a simple JSON server for its backend.

DELETE /bots/:id
Removes a bot from the backend.

Example response:

{}

Installation and Setup

    Clone this repository:

git clone https://github.com/johi-il/bot-app
cd bot-army

Install dependencies:

npm install

Start the JSON server:

json-server --watch src/components/db.json --port 3000

Run the React app:

npm start

Open your browser and visit:

    http://localhost:5173

    (or whatever port your React app uses)

### How It Works

    The App component manages the state for both the full bot list (bots) and the user’s army (army).

    BotCollection fetches bot data from the backend and renders each bot using the BotCollectionChild component.

    YourBotArmy displays the user’s selected bots.

    The onAddBot, onReleaseBot, and onDischargeBot functions handle the interaction logic.

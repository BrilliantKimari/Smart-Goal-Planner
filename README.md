# Smart Goal Planner

Smart Goal Planner is a modern, responsive React application designed to help you plan, track, and achieve your financial savings goals with ease. Whether you're saving for a big purchase, an emergency fund, or any other financial target, this app provides a clean and intuitive interface to manage your goals effectively.

## Features

- Add new savings goals with details including name, target amount, category, and deadline
- Update your progress by depositing amounts towards each goal
- Delete goals you no longer want to track
- Visual progress bars to quickly see how close you are to your targets
- Deadline tracking with warnings for upcoming deadlines and overdue goals
- Overview dashboard showing total goals, total saved amount, and completed goals
- Responsive and clean user interface built with modern React practices

## Technologies Used

- React 18 with functional components and hooks
- Fetch API for RESTful communication
- json-server for local REST API simulation
- Vite as the build tool and development server
- Tailwind CSS for styling

## Project Structure

```
.
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── GoalForm.jsx
│   │   ├── GoalItem.jsx
│   │   ├── GoalList.jsx
│   │   └── Overview.jsx
│   ├── App.jsx
│   ├── db.json
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

Clone the repository and install dependencies:

```sh
npm install
```

### Running the App

Start the development server:

```sh
npm run dev
```

### Linting

Run the linter:

```sh
npm run lint
```

### Building for Production

Build the production-ready app:

```sh
npm run build
```

### Preview Production Build

Preview the production build locally:

```sh
npm run preview
```

## API & Data

The app expects a REST API at `http://localhost:3000/goals`. For local development, you can use [json-server](https://github.com/typicode/json-server) to simulate the API:

```sh
npm install -g json-server
json-server --watch src/db.json --port 3000
```

## How It Works

- Use the form to add new financial goals with target amounts and deadlines.
- Track your progress by depositing amounts towards each goal.
- Visual progress bars and deadline warnings help you stay on track.
- The overview section summarizes your total goals, savings, and completed goals.

## Owner

Brilliant Kimari

---

This project is a practical demonstration of React skills, state management, REST API integration, and responsive UI design.

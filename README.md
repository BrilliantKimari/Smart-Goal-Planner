# Smart Goal Planner

A simple React application for planning and tracking your financial goals.

## Features

- Add, update, and delete savings goals
- Track progress with visual indicators
- Overview of total goals, savings, and completed goals
- Responsive and clean UI

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

```sh
npm install
```

### Running the App

Start the development server:

```sh
npm run dev
```

### Linting

```sh
npm run lint
```

### Building for Production

```sh
npm run build
```

### Preview Production Build

```sh
npm run preview
```

## API & Data

- The app expects a REST API at `http://localhost:3000/goals`.
- For local development, you can use [json-server](https://github.com/typicode/json-server):

```sh
npm install -g json-server
json-server --watch src/db.json --port 3000
```

## License


## Owner Brilliant Kimari
# Lichess Fullstack Application

This project is a full-stack application that interacts with the Lichess API to display user profiles, leaderboards, and tournaments. It consists of a backend built with TypeScript and Express, and a frontend built with React.

## Features

- Display user profiles from Lichess
- Show leaderboards with top players
- List ongoing and upcoming tournaments

## Project Structure

```
lichess-fullstack-app
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── routes
│   │   ├── services
│   │   ├── app.ts
│   │   └── types
│   ├── package.json
│   └── tsconfig.json
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── App.tsx
│   │   └── types
│   ├── package.json
│   └── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the backend server:
   ```
   npm run start
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the frontend application:
   ```
   npm run start
   ```

### API Endpoints

- **GET /api/leaderboard** - Fetch the leaderboard data.
- **GET /api/profile/:username** - Fetch user profile data.
- **GET /api/tournaments** - Fetch tournament data.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.
import express from 'express';
import { json } from 'body-parser';
import { setLeaderboardRoutes } from './routes/leaderboardRoutes';
import { setProfileRoutes } from './routes/profileRoutes';
import { setTournamentRoutes } from './routes/tournamentRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(json());

setLeaderboardRoutes(app);
setProfileRoutes(app);
setTournamentRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
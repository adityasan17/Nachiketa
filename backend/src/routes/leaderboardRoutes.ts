import { Router } from 'express';
import { LeaderboardController } from '../controllers/leaderboardController';

export function setLeaderboardRoutes(app: Router) {
    const leaderboardController = new LeaderboardController();
    app.get('/api/leaderboard', leaderboardController.getLeaderboard.bind(leaderboardController));
    app.get('/api/leaderboard/top', leaderboardController.getTopPlayers.bind(leaderboardController));
}
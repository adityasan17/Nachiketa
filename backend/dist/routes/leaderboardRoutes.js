"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setLeaderboardRoutes = void 0;
const leaderboardController_1 = require("../controllers/leaderboardController");
function setLeaderboardRoutes(app) {
    const leaderboardController = new leaderboardController_1.LeaderboardController();
    app.get('/api/leaderboard', leaderboardController.getLeaderboard.bind(leaderboardController));
    app.get('/api/leaderboard/top', leaderboardController.getTopPlayers.bind(leaderboardController));
}
exports.setLeaderboardRoutes = setLeaderboardRoutes;

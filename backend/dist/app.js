"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const leaderboardRoutes_1 = require("./routes/leaderboardRoutes");
const profileRoutes_1 = require("./routes/profileRoutes");
const tournamentRoutes_1 = require("./routes/tournamentRoutes");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.use((0, body_parser_1.json)());
(0, leaderboardRoutes_1.setLeaderboardRoutes)(app);
(0, profileRoutes_1.setProfileRoutes)(app);
(0, tournamentRoutes_1.setTournamentRoutes)(app);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

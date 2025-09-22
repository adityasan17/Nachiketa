"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setTournamentRoutes = void 0;
const tournamentController_1 = require("../controllers/tournamentController");
function setTournamentRoutes(app) {
    const tournamentController = new tournamentController_1.TournamentController();
    app.get('/api/tournaments', tournamentController.getTournaments.bind(tournamentController));
    app.get('/api/tournaments/:id', tournamentController.getTournamentDetails.bind(tournamentController));
}
exports.setTournamentRoutes = setTournamentRoutes;

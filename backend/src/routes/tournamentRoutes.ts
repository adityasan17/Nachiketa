import { Router } from 'express';
import { TournamentController } from '../controllers/tournamentController';

export function setTournamentRoutes(app: Router) {
    const tournamentController = new TournamentController();
    app.get('/api/tournaments', tournamentController.getTournaments.bind(tournamentController));
    app.get('/api/tournaments/:id', tournamentController.getTournamentDetails.bind(tournamentController));
}
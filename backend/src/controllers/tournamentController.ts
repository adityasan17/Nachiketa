import { Request, Response } from 'express';
import { LichessService } from '../services/lichessService';

export class TournamentController {
    private lichessService: LichessService;

    constructor() {
        this.lichessService = new LichessService();
    }

    async getTournaments(req: Request, res: Response) {
        try {
            const tournaments = await this.lichessService.fetchTournaments();
            if (!Array.isArray(tournaments)) {
                return res.status(502).json({ message: 'Invalid response from Lichess API.' });
            }
            res.status(200).json(tournaments);
        } catch (error: any) {
            res.status(500).json({ message: 'Error fetching tournaments', details: error?.message });
        }
    }

    async getTournamentDetails(req: Request, res: Response) {
        const { id } = req.params;
        try {
            // Uncomment and implement fetchTournamentDetails in LichessService if needed
            // const tournamentDetails = await this.lichessService.fetchTournamentDetails(id);
            // if (!tournamentDetails) {
            //     return res.status(404).json({ message: 'Tournament not found.' });
            // }
            // res.status(200).json(tournamentDetails);
            res.status(501).json({ message: 'Not implemented' });
        } catch (error: any) {
            res.status(500).json({ message: 'Error fetching tournament details', details: error?.message });
        }
    }
}
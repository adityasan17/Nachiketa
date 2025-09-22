import { Request, Response } from 'express';
import { LichessService } from '../services/lichessService';

export class LeaderboardController {
    private lichessService: LichessService;

    constructor() {
        this.lichessService = new LichessService();
    }

    // Returns all leaderboards (by variant) with username, title, rating
    async getLeaderboard(req: Request, res: Response) {
        try {
            const leaderboards = await this.lichessService.fetchLeaderboard();
            if (!leaderboards || typeof leaderboards !== 'object') {
                return res.status(502).json({ message: 'Invalid response from Lichess API.' });
            }
            res.status(200).json(leaderboards);
        } catch (error: any) {
            res.status(500).json({ message: 'Error fetching leaderboard', details: error?.message });
        }
    }

    // Returns top 10 players for each variant
    async getTopPlayers(req: Request, res: Response) {
        try {
            const leaderboards = await this.lichessService.fetchLeaderboard();
            if (!leaderboards || typeof leaderboards !== 'object') {
                return res.status(502).json({ message: 'Invalid response from Lichess API.' });
            }
            const top: Record<string, any[]> = {};
            for (const variant in leaderboards) {
                top[variant] = Array.isArray(leaderboards[variant])
                    ? leaderboards[variant].slice(0, 10)
                    : [];
            }
            res.status(200).json(top);
        } catch (error: any) {
            res.status(500).json({ message: 'Error fetching top players', details: error?.message });
        }
    }
}
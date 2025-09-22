import { Request, Response } from 'express';
import axios from 'axios';

export class ProfileController {
    async getUserProfile(req: Request, res: Response) {
        const { username } = req.params;
        try {
            // Fetch user profile
            const profileRes = await axios.get(`https://lichess.org/api/user/${username}`);
            const profile = profileRes.data;

            // Fetch user stats
            const statsRes = await axios.get(`https://lichess.org/api/user/${username}/stats`);
            const stats = statsRes.data;

            // Ratings
            const ratings: Record<string, number> = {};
            if (stats?.perfs && typeof stats.perfs === 'object') {
                for (const key in stats.perfs) {
                    if (
                        stats.perfs[key] &&
                        typeof stats.perfs[key].rating === 'number'
                    ) {
                        ratings[key] = stats.perfs[key].rating;
                    }
                }
            }

            // Number of games played (sum of all games in stats)
            let totalGames = 0;
            if (stats?.perfs && typeof stats.perfs === 'object') {
                for (const key in stats.perfs) {
                    if (
                        stats.perfs[key] &&
                        typeof stats.perfs[key].games === 'number'
                    ) {
                        totalGames += stats.perfs[key].games;
                    }
                }
            }

            res.json({
                username: profile?.username,
                bio: profile?.bio || '',
                profileImage: profile?.profile?.icon || null,
                ratings,
                numberOfGames: totalGames
            });
        } catch (error: any) {
            res.status(404).json({ error: 'User not found or Lichess API error.', details: error?.message });
        }
    }
}
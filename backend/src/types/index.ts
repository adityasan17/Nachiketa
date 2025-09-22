export interface UserProfile {
    id: string;
    username: string;
    rating: number;
    gamesPlayed: number;
    wins: number;
    losses: number;
    draws: number;
}

export interface LeaderboardEntry {
    username: string;
    rating: number;
    rank: number;
}

export interface Tournament {
    id: string;
    name: string;
    startTime: number;
    endTime: number;
    players: number;
    status: string;
}
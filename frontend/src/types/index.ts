export interface UserProfileProps {
    username: string;
    rating: number;
    gamesPlayed: number;
    wins: number;
    losses: number;
}

export interface LeaderboardProps {
    entries: LeaderboardEntry[];
}

export interface LeaderboardEntry {
    username: string;
    rating: number;
    rank: number;
}

export interface TournamentProps {
    tournaments: Tournament[];
}

export interface Tournament {
    id: string;
    name: string;
    date: string;
    players: number;
    status: string;
}
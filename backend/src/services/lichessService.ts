import axios from 'axios';

export class LichessService {
    private baseUrl: string;

    constructor() {
        this.baseUrl = 'https://lichess.org/api';
    }

    async fetchUserProfile(username: string): Promise<any> {
        const response = await axios.get(`${this.baseUrl}/user/${username}`);
        return response.data;
    }

    async fetchLeaderboard(): Promise<any> {
        const response = await axios.get(`${this.baseUrl}/player`);
        return response.data;
    }

    async fetchTournaments(): Promise<any> {
        const response = await axios.get(`${this.baseUrl}/tournament`);
        return response.data;
    }
}
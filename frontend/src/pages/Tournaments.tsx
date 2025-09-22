import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Tournaments: React.FC = () => {
    const [tournaments, setTournaments] = useState([]);

    useEffect(() => {
        const fetchTournaments = async () => {
            try {
                const response = await axios.get('https://lichess.org/api/tournaments');
                setTournaments(response.data);
            } catch (error) {
                console.error('Error fetching tournaments:', error);
            }
        };

        fetchTournaments();
    }, []);
    
    if (!tournament) return <div>No data available</div>;

    return (
        <div>
            <h1>Tournaments</h1>
            <ul>
                {tournaments.map((tournament) => (
                    <li key={tournament.id}>
                        <h2>{tournament.name}</h2>
                        <p>{tournament.description}</p>
                        <p>Date: {new Date(tournament.date).toLocaleDateString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tournaments;
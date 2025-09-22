import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Welcome to the Lichess Fullstack App</h1>
            <p>Explore user profiles, leaderboards, and tournaments.</p>
            <nav>
                <ul>
                    <li>
                        <Link to="/leaderboards">View Leaderboards</Link>
                    </li>
                    <li>
                        <Link to="/profile">View User Profile</Link>
                    </li>
                    <li>
                        <Link to="/tournaments">View Tournaments</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;
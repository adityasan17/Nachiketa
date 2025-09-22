import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile: React.FC = () => {
    const [userProfile, setUserProfile] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await axios.get('/api/profile'); // Adjust the endpoint as necessary
                setUserProfile(response.data);
            } catch (err) {
                setError('Error fetching user profile');
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>{userProfile.username}</h1>
            <p>Rating: {userProfile.rating}</p>
            <p>Games Played: {userProfile.gamesPlayed}</p>
            {/* Add more user profile details as needed */}
        </div>
    );
};

export default Profile;
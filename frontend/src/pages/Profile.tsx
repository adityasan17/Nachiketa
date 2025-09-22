import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
    const [userProfile, setUserProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchUserProfile = async () => {
        try {
            const response = await axios.get('/api/profile'); // Adjust the endpoint as necessary
            setUserProfile(response.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUserProfile();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

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
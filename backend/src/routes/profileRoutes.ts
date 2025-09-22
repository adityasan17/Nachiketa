import { Router } from 'express';
import { ProfileController } from '../controllers/profileController';

export function setProfileRoutes(app: Router) {
    const profileController = new ProfileController();
    app.get('/api/profile/:username', profileController.getUserProfile.bind(profileController));
    // Uncomment and implement getUserGames if needed
    // app.get('/api/profile/:username/games', profileController.getUserGames.bind(profileController));
}
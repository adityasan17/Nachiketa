"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setProfileRoutes = void 0;
const profileController_1 = require("../controllers/profileController");
function setProfileRoutes(app) {
    const profileController = new profileController_1.ProfileController();
    app.get('/api/profile/:username', profileController.getUserProfile.bind(profileController));
    // Uncomment and implement getUserGames if needed
    // app.get('/api/profile/:username/games', profileController.getUserGames.bind(profileController));
}
exports.setProfileRoutes = setProfileRoutes;

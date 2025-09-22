"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileController = void 0;
const axios_1 = __importDefault(require("axios"));
class ProfileController {
    getUserProfile(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const { username } = req.params;
            try {
                // Fetch user profile
                const profileRes = yield axios_1.default.get(`https://lichess.org/api/user/${username}`);
                const profile = profileRes.data;
                // Fetch user stats
                const statsRes = yield axios_1.default.get(`https://lichess.org/api/user/${username}/stats`);
                const stats = statsRes.data;
                // Ratings
                const ratings = {};
                if (stats && typeof stats === 'object' && stats.perfs) {
                    for (const key in stats.perfs) {
                        if (stats.perfs[key] &&
                            typeof stats.perfs[key].rating === 'number') {
                            ratings[key] = stats.perfs[key].rating;
                        }
                    }
                }
                // Number of games played (sum of all games in stats)
                let totalGames = 0;
                if (stats && typeof stats === 'object' && stats.perfs) {
                    for (const key in stats.perfs) {
                        if (stats.perfs[key] &&
                            typeof stats.perfs[key].games === 'number') {
                            totalGames += stats.perfs[key].games;
                        }
                    }
                }
                res.json({
                    username: profile === null || profile === void 0 ? void 0 : profile.username,
                    bio: profile === null || profile === void 0 ? void 0 : profile.bio,
                    profileImage: ((_a = profile === null || profile === void 0 ? void 0 : profile.profile) === null || _a === void 0 ? void 0 : _a.icon) || null,
                    ratings,
                    numberOfGames: totalGames
                });
            }
            catch (error) {
                res.status(404).json({ error: 'User not found or Lichess API error.' });
            }
        });
    }
}
exports.ProfileController = ProfileController;

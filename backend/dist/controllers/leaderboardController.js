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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaderboardController = void 0;
const lichessService_1 = require("../services/lichessService");
class LeaderboardController {
    constructor() {
        this.lichessService = new lichessService_1.LichessService();
    }
    getLeaderboard(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const leaderboard = yield this.lichessService.fetchLeaderboard();
                res.status(200).json(leaderboard);
            }
            catch (error) {
                res.status(500).json({ message: 'Error fetching leaderboard', error });
            }
        });
    }
    getTopPlayers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const topPlayers = yield this.lichessService.fetchLeaderboard();
                const top = topPlayers.slice(0, 10); // Get top 10 players
                res.status(200).json(top);
            }
            catch (error) {
                res.status(500).json({ message: 'Error fetching top players', error });
            }
        });
    }
}
exports.LeaderboardController = LeaderboardController;

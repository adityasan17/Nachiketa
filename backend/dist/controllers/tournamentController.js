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
exports.TournamentController = void 0;
const lichessService_1 = require("../services/lichessService");
class TournamentController {
    constructor() {
        this.lichessService = new lichessService_1.LichessService();
    }
    getTournaments(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tournaments = yield this.lichessService.fetchTournaments();
                res.status(200).json(tournaments);
            }
            catch (error) {
                res.status(500).json({ message: 'Error fetching tournaments', error });
            }
        });
    }
    getTournamentDetails(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                // Implement fetchTournamentDetails in LichessService if needed
                // const tournamentDetails = await this.lichessService.fetchTournamentDetails(id);
                // res.status(200).json(tournamentDetails);
                res.status(501).json({ message: 'Not implemented' });
            }
            catch (error) {
                res.status(500).json({ message: 'Error fetching tournament details', error });
            }
        });
    }
}
exports.TournamentController = TournamentController;

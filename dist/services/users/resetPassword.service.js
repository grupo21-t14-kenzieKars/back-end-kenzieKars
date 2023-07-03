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
const data_source_1 = __importDefault(require("../../data-source"));
const AppError_1 = require("../../errors/AppError");
const entities_1 = require("../../entities");
const RecoveryPwdService = (token, data) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.default.getRepository(entities_1.User);
    const user = yield userRepository.findOneBy({ reset_token: token });
    if (!user) {
        throw new AppError_1.AppError("User not found!", 404);
    }
    if (user.reset_token_date && (new Date().getTime() - user.reset_token_date.getTime()) / (1000 * 60 * 60) > 1) {
        throw new AppError_1.AppError("Expired token", 401);
    }
    user.password = data;
    user.reset_token = null;
    yield userRepository.save(user);
    return;
});
exports.default = RecoveryPwdService;

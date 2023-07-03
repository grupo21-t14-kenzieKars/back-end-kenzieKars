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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const AppError_1 = require("../../errors/AppError");
const bcryptjs_1 = require("bcryptjs");
const entities_1 = require("../../entities");
const loginService = ({ email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.default.getRepository(entities_1.User);
    const user = yield userRepository.findOneBy({
        email: email,
    });
    if (!user) {
        throw new AppError_1.AppError("Email or passsword invalid", 404);
    }
    const pass = yield (0, bcryptjs_1.compare)(password, user.password);
    if (!pass) {
        throw new AppError_1.AppError("Email or passsword invalid");
    }
    const token = jsonwebtoken_1.default.sign({
        is_seller: user.is_seller,
        user_id: user.id
    }, process.env.SECRET_KEY, {
        expiresIn: '24h',
        subject: user.id.toString()
    });
    return { token: token };
});
exports.default = loginService;

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
const data_source_1 = __importDefault(require("../data-source"));
const entities_1 = require("../entities");
const AppError_1 = require("../errors/AppError");
const ensureEmailCpfIsValidMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    const userRepository = data_source_1.default.getRepository(entities_1.User);
    if (user.email) {
        const uniqueEmail = yield userRepository.findOneBy({
            email: user.email
        });
        if (uniqueEmail) {
            throw new AppError_1.AppError("Email already registered", 409);
        }
    }
    if (user.cpf) {
        const uniqueCpf = yield userRepository.findOneBy({
            cpf: user.cpf
        });
        if (uniqueCpf) {
            throw new AppError_1.AppError("Cpf already registered", 409);
        }
    }
    return next();
});
exports.default = ensureEmailCpfIsValidMiddleware;

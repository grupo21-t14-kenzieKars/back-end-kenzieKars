"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const AppError_1 = require("../errors/AppError");
const ensureauthMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        throw new AppError_1.AppError("Invalid token");
    }
    const splitToken = token.split(" ")[1];
    jsonwebtoken_1.default.verify(splitToken, process.env.SECRET_KEY, (error, decoded) => {
        if (error) {
            throw new AppError_1.AppError("Invalid token");
        }
        const user = {
            user_id: decoded.user_id,
            is_seller: decoded.is_seller,
        };
        res.locals.user = user;
        return next();
    });
};
exports.default = ensureauthMiddleware;

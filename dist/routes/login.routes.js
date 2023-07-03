"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middlewares_1 = require("../middlewares");
const login_schema_1 = __importDefault(require("../schemas/login.schema"));
const login_controller_1 = __importDefault(require("../controllers/login/login.controller"));
const loginRouter = (0, express_1.Router)();
loginRouter.post("", (0, middlewares_1.verifySchemaMiddleware)(login_schema_1.default), login_controller_1.default);
exports.default = loginRouter;

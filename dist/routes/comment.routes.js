"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createComment_controller_1 = __importDefault(require("../controllers/comments/createComment.controller"));
const ensureAuthMiddleware_1 = __importDefault(require("../middlewares/ensureAuthMiddleware"));
const middlewares_1 = require("../middlewares");
const comments_schema_1 = require("../schemas/comments.schema");
const commentRouter = (0, express_1.Router)();
commentRouter.post("/:id", ensureAuthMiddleware_1.default, middlewares_1.ensureUuidIsValidMiddleware, (0, middlewares_1.verifySchemaMiddleware)(comments_schema_1.carCommentSchema), createComment_controller_1.default);
exports.default = commentRouter;

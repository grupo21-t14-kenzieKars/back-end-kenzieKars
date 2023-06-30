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
const createComment_service_1 = __importDefault(require("../../services/comments/createComment.service"));
const createCommentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { content } = req.body;
    const carId = req.params.id;
    const userId = res.locals.user.user_id;
    const response = yield (0, createComment_service_1.default)(content, carId, userId);
    return res.status(201).json(response);
});
exports.default = createCommentController;

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
const comments_entity_1 = require("../../entities/comments.entity");
const comments_schema_1 = require("../../schemas/comments.schema");
const entities_1 = require("../../entities");
const AppError_1 = require("../../errors/AppError");
const createCommentService = (content, carId, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const carCommentRepository = data_source_1.default.getRepository(comments_entity_1.CarComment);
    const carRepository = data_source_1.default.getRepository(entities_1.Car);
    const userRepository = data_source_1.default.getRepository(entities_1.User);
    const findUser = yield userRepository.findOneBy({ id: userId });
    const findCar = yield carRepository.findOneBy({ id: carId });
    if (!findCar) {
        throw new AppError_1.AppError("Car not found!");
    }
    const newComment = carCommentRepository.create({
        user: {
            id: userId
        },
        car: {
            id: carId
        },
        content: content
    });
    yield carCommentRepository.save(newComment);
    const validatedComment = comments_schema_1.carCommentReturnSchema.parse(newComment);
    return validatedComment;
});
exports.default = createCommentService;

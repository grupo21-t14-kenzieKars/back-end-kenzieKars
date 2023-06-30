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
const entities_1 = require("../../entities");
const data_source_1 = __importDefault(require("../../data-source"));
const car_schema_1 = require("../../schemas/car.schema");
const comments_schema_1 = require("../../schemas/comments.schema");
const listCarByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const carRepository = data_source_1.default.getRepository(entities_1.Car);
    const car = yield carRepository.findOne({
        where: { id: id },
        relations: {
            user: true,
            images: true,
            comments: {
                user: true
            }
        }
    });
    const getCar = car_schema_1.carSchema.parse(car);
    const comments = comments_schema_1.carCommentListSchema.parse(car === null || car === void 0 ? void 0 : car.comments);
    const carWithComments = Object.assign(Object.assign({}, getCar), { comments });
    return carWithComments;
});
exports.default = listCarByIdService;

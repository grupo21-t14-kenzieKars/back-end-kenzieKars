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
const entities_1 = require("../../entities");
const AppError_1 = require("../../errors/AppError");
const car_schema_1 = require("../../schemas/car.schema");
const carImages_entity_1 = require("../../entities/carImages.entity");
const updateCarService = (idCar, carUpdateData) => __awaiter(void 0, void 0, void 0, function* () {
    const carRepository = data_source_1.default.getRepository(entities_1.Car);
    const imagesRepository = data_source_1.default.getRepository(carImages_entity_1.Images);
    const findCar = yield carRepository.findOne({ where: {
            id: idCar,
        }, relations: {
            images: true
        } });
    if (!findCar) {
        throw new AppError_1.AppError("Car not found ", 404);
    }
    const imagesInfo = imagesRepository.create(Object.assign(Object.assign({}, findCar.images), carUpdateData.images));
    const updatedCar = carRepository.create(Object.assign(Object.assign(Object.assign({}, findCar), carUpdateData), { images: imagesInfo }));
    yield carRepository.save(updatedCar);
    const newCar = car_schema_1.carRequestSchema.parse(updatedCar);
    return newCar;
});
exports.default = updateCarService;

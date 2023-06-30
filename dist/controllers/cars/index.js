"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uptadeCarController = exports.listCarsController = exports.listCarByIdController = exports.deleteCarController = exports.createCarController = void 0;
const createCar_controller_1 = __importDefault(require("./createCar.controller"));
exports.createCarController = createCar_controller_1.default;
const deleteCar_controller_1 = __importDefault(require("./deleteCar.controller"));
exports.deleteCarController = deleteCar_controller_1.default;
const updateCar_controller_1 = __importDefault(require("./updateCar.controller"));
exports.uptadeCarController = updateCar_controller_1.default;
const listCarById_controller_1 = __importDefault(require("./listCarById.controller"));
exports.listCarByIdController = listCarById_controller_1.default;
const listCars_controller_1 = __importDefault(require("./listCars.controller"));
exports.listCarsController = listCars_controller_1.default;

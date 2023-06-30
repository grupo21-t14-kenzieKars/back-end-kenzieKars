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
Object.defineProperty(exports, "__esModule", { value: true });
const cars_1 = require("../../services/cars");
const createCarController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const userId = res.locals.user.user_id;
    const response = yield (0, cars_1.createCarService)(data, userId);
    return res.status(201).json(response);
});
exports.default = createCarController;

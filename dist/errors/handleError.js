"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const AppError_1 = require("./AppError");
const handleError = (error, req, res, _) => {
    if (error instanceof AppError_1.AppError) {
        return res.status(error.statusCode).json({ message: error.message });
    }
    if (error instanceof zod_1.ZodError) {
        return res.status(400).json(error.flatten().fieldErrors);
    }
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
};
exports.default = handleError;

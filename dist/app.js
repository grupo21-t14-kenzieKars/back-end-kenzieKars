"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const handleError_1 = __importDefault(require("./errors/handleError"));
const car_routes_1 = __importDefault(require("./routes/car.routes"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const login_routes_1 = __importDefault(require("./routes/login.routes"));
const comment_routes_1 = __importDefault(require("./routes/comment.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/car", car_routes_1.default);
app.use("/user", user_routes_1.default);
app.use("/login", login_routes_1.default);
app.use("/comment", comment_routes_1.default);
app.use(handleError_1.default);
exports.default = app;

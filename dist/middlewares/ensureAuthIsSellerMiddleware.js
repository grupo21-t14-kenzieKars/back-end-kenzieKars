"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requireSellerMiddleware = (req, res, next) => {
    const user = res.locals.user;
    if (!user || !user.isSeller) {
        return res.status(403).json({
            message: "Access denied",
        });
    }
    return next();
};
exports.default = requireSellerMiddleware;

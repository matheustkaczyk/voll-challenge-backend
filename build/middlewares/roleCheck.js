"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (role) => {
    return (req, res, next) => {
        if (req.user.role === role) {
            next();
        }
        else {
            res.status(403).json({
                message: "You don't have the required permissions to perform this action"
            });
        }
    };
};

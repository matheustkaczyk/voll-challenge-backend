"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (role) => {
    return (req, res, next) => {
        if (req.user.role === role) {
            next();
        }
        else {
            res.status(403).end();
        }
    };
};

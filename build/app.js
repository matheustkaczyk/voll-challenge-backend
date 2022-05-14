"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const auth_routes_1 = __importDefault(require("./controllers/auth/auth-routes"));
const user_routes_1 = __importDefault(require("./controllers/user/user-routes"));
const product_routes_1 = __importDefault(require("./controllers/product/product-routes"));
const sale_routes_1 = __importDefault(require("./controllers/sale/sale-routes"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const cors_1 = __importDefault(require("cors"));
exports.app = (0, express_1.default)();
const corsOptions = {
    origin: ['http://localhost:3000', 'http://localhost:3001/docs'],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
};
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)(corsOptions));
exports.app.use('/auth', auth_routes_1.default);
exports.app.use('/user', user_routes_1.default);
exports.app.use('/products', product_routes_1.default);
exports.app.use('/sale', sale_routes_1.default);
exports.app.use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(require('../swagger.json')));

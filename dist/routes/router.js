"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const school_route_1 = __importDefault(require("./school.route"));
const router = express_1.default.Router();
exports.default = () => {
    (0, school_route_1.default)(router);
    return router;
};
//# sourceMappingURL=router.js.map
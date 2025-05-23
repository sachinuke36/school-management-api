"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("./config/db")); // adjust path as needed
(async () => {
    try {
        const [rows] = await db_1.default.query('SELECT 1');
        console.log('✅ DB connected:', rows);
    }
    catch (err) {
        console.error('❌ Connection error:', err);
    }
})();
//# sourceMappingURL=test.js.map
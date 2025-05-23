"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.add_school = add_school;
exports.default = listSchools;
const distance_1 = __importDefault(require("../utils/distance"));
const db_1 = __importDefault(require("../config/db"));
async function add_school(req, res) {
    const { name, address, latitude, longitude } = req.body;
    if (!name || !address || isNaN(latitude) || isNaN(longitude))
        return res.status(400).json({ error: "Invalid input fields" });
    try {
        const response = await db_1.default.execute('INSERT INTO schoolInfo (name, address, latitude, longitude) VALUES (?, ?, ?, ?)', [name, address, latitude, longitude]);
        return res.status(201).json({ message: 'School added successfully' });
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).json({ error: 'Database error' });
    }
}
async function listSchools(req, res) {
    const userLat = parseFloat(req.query.latitude);
    const userLon = parseFloat(req.query.longitude);
    if (isNaN(userLat) || isNaN(userLon)) {
        return res.status(400).json({ error: 'Invalid coordinates' });
    }
    try {
        const [rows] = await db_1.default.execute('SELECT * FROM schoolInfo');
        const schools = Array.isArray(rows) ? rows : [];
        const sorted = schools.map((school) => ({
            ...school,
            distance: (0, distance_1.default)(userLat, userLon, school.latitude, school.longitude)
        })).sort((a, b) => a.distance - b.distance);
        return res.json(sorted);
    }
    catch (error) {
        res.status(500).json({ error: 'Database error' });
    }
}
;
//# sourceMappingURL=school.controller.js.map
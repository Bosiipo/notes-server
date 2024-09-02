"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const { DATABASE_URL } = process.env;
const connection = {};
async function dbConnect() {
    if (connection.isConnected) {
        return;
    }
    const db = await mongoose.connect(DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    connection.isConnected = db.connections[0].readyState;
}
exports.default = dbConnect;
//# sourceMappingURL=index.js.map
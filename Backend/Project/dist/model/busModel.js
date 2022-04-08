"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.busModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.pluralize(null);
let busSchema = new mongoose_1.default.Schema({
    bid: String,
    from: String,
    to: String,
    type: String,
    cap: Number,
    date: Date,
    driver: String,
    clerk: String
});
exports.busModel = mongoose_1.default.model("bus", busSchema);

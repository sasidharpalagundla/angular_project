"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.passModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.pluralize(null);
let passSchema = new mongoose_1.default.Schema({
    pid: String,
    name: String,
    age: Number,
    loc: String,
    from: String,
    to: String,
    seat: Number,
    date: Date,
});
exports.passModel = mongoose_1.default.model("pass", passSchema);

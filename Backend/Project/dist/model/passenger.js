"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.passModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.pluralize(null);
let passSchema = new mongoose_1.default.Schema({
    _id: Number,
    pass: String
});
exports.passModel = mongoose_1.default.model("passenger", passSchema);

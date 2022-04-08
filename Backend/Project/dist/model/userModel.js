"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.pluralize(null);
let userSchema = new mongoose_1.default.Schema({
    uid: String,
    name: String,
    pass: String,
    role: String,
});
exports.userModel = mongoose_1.default.model("user", userSchema);

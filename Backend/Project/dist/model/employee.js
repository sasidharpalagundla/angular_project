"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.pluralize(null);
let employeeSchema = new mongoose_1.default.Schema({
    _id: Number,
    ename: String,
    erole: String,
});
exports.employeeModel = mongoose_1.default.model("employee", employeeSchema);

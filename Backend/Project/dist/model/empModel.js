"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.empModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.pluralize(null);
let empSchema = new mongoose_1.default.Schema({
    eid: String,
    name: String,
    role: String,
    sal: Number,
    leaves: Number,
    status: String,
    routeId: String,
});
exports.empModel = mongoose_1.default.model("emp", empSchema);

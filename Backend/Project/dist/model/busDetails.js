"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.pluralize(null);
let busSchema = new mongoose_1.default.Schema({
    _id: Number,
    regNum: Number,
    from: String,
    to: String,
    model: String,
    seating: Number,
    price: Number,
    datePurc: String,
});
exports.BusModel = mongoose_1.default.model("busDetails", busSchema);

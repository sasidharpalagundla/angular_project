"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bRouteModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.pluralize(null);
let bRouteSchema = new mongoose_1.default.Schema({
    rid: String,
    from: String,
    to: String,
});
exports.bRouteModel = mongoose_1.default.model("bRoute", bRouteSchema);

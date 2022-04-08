"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePass = exports.updatePass = exports.storePass = exports.findAllPass = void 0;
const repository = __importStar(require("../repository/passRepo"));
let findAllPass = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let result = yield repository.findAllPass();
    try {
        res.json(result);
    }
    catch (ex) {
        res.json(ex);
    }
});
exports.findAllPass = findAllPass;
let storePass = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let pass = req.body;
    try {
        let result = yield repository.storePass(pass);
        //res.json(result);
        res.json({ "msg": "Record inserted successfully" });
    }
    catch (ex) {
        //res.json(ex);
        res.json({ "msg": "Record didn't inserted" });
    }
});
exports.storePass = storePass;
let updatePass = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let pass = req.body;
    let result = yield repository.updatePass(pass);
    try {
        if (result.modifiedCount > 0) {
            res.send("Record updated successfully");
        }
        else if (result.matchedCount > 0) {
            res.send("Record exist but didn't update");
        }
        else {
            res.send("Record didn't update");
        }
    }
    catch (ex) {
        res.send(ex);
    }
});
exports.updatePass = updatePass;
let deletePass = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let pid = (req.params.pid);
    let result = yield repository.deletePass(pid);
    try {
        if (result.deletedCount > 0) {
            res.send("Record deleted successfully");
        }
        else {
            res.send("Record not present");
        }
    }
    catch (ex) {
        res.send(ex);
    }
});
exports.deletePass = deletePass;

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
exports.deleteEmp = exports.updateEmp = exports.storeEmp = exports.findAllEmp = void 0;
const repository = __importStar(require("../repository/empRepo"));
let findAllEmp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let result = yield repository.findAllEmp();
    try {
        res.json(result);
    }
    catch (ex) {
        res.json(ex);
    }
});
exports.findAllEmp = findAllEmp;
let storeEmp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let emp = req.body;
    try {
        let result = yield repository.storeEmp(emp);
        res.json({ "msg": "Record inserted successfully" });
    }
    catch (ex) {
        res.json({ "msg": "Record didn't inserted" });
    }
});
exports.storeEmp = storeEmp;
let updateEmp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let emp = req.body;
    let result = yield repository.updateEmp(emp);
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
exports.updateEmp = updateEmp;
let deleteEmp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let eid = (req.params._id);
    let result = yield repository.deleteEmp(eid);
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
exports.deleteEmp = deleteEmp;

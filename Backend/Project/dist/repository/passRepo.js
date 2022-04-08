"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePass = exports.updatePass = exports.storePass = exports.findAllPass = void 0;
const passModel_1 = require("../model/passModel");
let findAllPass = () => {
    return passModel_1.passModel.find({});
};
exports.findAllPass = findAllPass;
let storePass = (pass) => {
    return passModel_1.passModel.insertMany(pass);
};
exports.storePass = storePass;
let updatePass = (pass) => {
    console.log("pass", pass);
    return passModel_1.passModel.updateOne({ pid: pass.pid }, { $set: { name: pass.name, loc: pass.loc, from: pass.from, to: pass.to, seat: pass.seat } });
};
exports.updatePass = updatePass;
let deletePass = (pid) => {
    return passModel_1.passModel.deleteOne({ pid: pid });
};
exports.deletePass = deletePass;

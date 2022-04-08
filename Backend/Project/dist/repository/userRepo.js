"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeUser = exports.findAllUser = void 0;
const userModel_1 = require("../model/userModel");
let findAllUser = () => {
    return userModel_1.userModel.find({});
};
exports.findAllUser = findAllUser;
let storeUser = (user) => {
    return userModel_1.userModel.insertMany(user);
};
exports.storeUser = storeUser;

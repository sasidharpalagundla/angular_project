"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBus = exports.updateBus = exports.storeBus = exports.findBusByRoute = exports.findBusById = exports.findAllBus = void 0;
const busModel_1 = require("../model/busModel");
let findAllBus = () => {
    return busModel_1.busModel.find({});
};
exports.findAllBus = findAllBus;
let findBusById = (bid) => {
    return busModel_1.busModel.find(bid);
};
exports.findBusById = findBusById;
let findBusByRoute = (bfrom, bto) => {
    return busModel_1.busModel.find({}, { bfrom: 1, bto: 1 });
};
exports.findBusByRoute = findBusByRoute;
let storeBus = (bus) => {
    return busModel_1.busModel.insertMany(bus);
};
exports.storeBus = storeBus;
let updateBus = (bus) => {
    return busModel_1.busModel.updateOne({ bid: bus.bid }, { $set: { from: bus.from, to: bus.to, type: bus.type, cap: bus.cap, date: bus.date, driver: bus.driver, clerk: bus.clerk } });
};
exports.updateBus = updateBus;
let deleteBus = (id) => {
    return busModel_1.busModel.deleteOne({ bid: id });
};
exports.deleteBus = deleteBus;

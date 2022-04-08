"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRoute = exports.updateRoute = exports.storeRoute = exports.findRouteById = exports.findAllRoutes = void 0;
const bRouteModel_1 = require("../model/bRouteModel");
let findAllRoutes = () => {
    return bRouteModel_1.bRouteModel.find({});
};
exports.findAllRoutes = findAllRoutes;
let findRouteById = (bRoute) => {
    return bRouteModel_1.bRouteModel.find({ rid: bRoute.rid });
};
exports.findRouteById = findRouteById;
let storeRoute = (bRoute) => {
    return bRouteModel_1.bRouteModel.insertMany(bRoute);
};
exports.storeRoute = storeRoute;
let updateRoute = (bRoute) => {
    return bRouteModel_1.bRouteModel.updateOne({ rid: bRoute.rid }, { $set: { from: bRoute.from, to: bRoute.to } });
};
exports.updateRoute = updateRoute;
let deleteRoute = (rid) => {
    return bRouteModel_1.bRouteModel.deleteOne({ _id: rid });
};
exports.deleteRoute = deleteRoute;

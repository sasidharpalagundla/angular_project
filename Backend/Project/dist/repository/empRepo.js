"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEmp = exports.updateEmp = exports.storeEmp = exports.findAllEmp = void 0;
const empModel_1 = require("../model/empModel");
let findAllEmp = () => {
    return empModel_1.empModel.find({});
};
exports.findAllEmp = findAllEmp;
let storeEmp = (emp) => {
    return empModel_1.empModel.insertMany(emp);
};
exports.storeEmp = storeEmp;
let updateEmp = (emp) => {
    return empModel_1.empModel.updateOne({ eid: emp.eid }, { $set: { name: emp.name, sal: emp.sal, role: emp.role, leaves: emp.leaves, status: emp.status, routeId: emp.routeId } });
};
exports.updateEmp = updateEmp;
let deleteEmp = (eid) => {
    return empModel_1.empModel.deleteOne({ eid: eid });
};
exports.deleteEmp = deleteEmp;

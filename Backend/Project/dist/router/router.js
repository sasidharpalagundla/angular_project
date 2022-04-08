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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const bRouteCnt = __importStar(require("../controller/bRouteCnt"));
const busCnt = __importStar(require("../controller/busCnt"));
const empCnt = __importStar(require("../controller/empCnt"));
const passCnt = __importStar(require("../controller/passCnt"));
const userCnt = __importStar(require("../controller/userCnt"));
const express_1 = __importDefault(require("express"));
let router = express_1.default.Router();
//---------------------------------------------------------------------------
//http://localhost:9090/findAllRoutes
router.get("/findAllRoutes", bRouteCnt.findAllRoutes);
//http://localhost:9090/findRouteById
router.get("/findRouteById", bRouteCnt.findRouteById);
//http://localhost:9090/storeRoute
router.post("/storeRoute", bRouteCnt.storeRoute);
//http://localhost:9090/updateRoute
router.put("/updateRoute", bRouteCnt.updateRoute);
//http://localhost:9090/deleteRoute
router.delete("/deleteRoute/:rid", bRouteCnt.deleteRoute);
//---------------------------------------------------------------------------
//http://localhost:9090/findAllBus
router.get("/findAllBus", busCnt.findAllBus);
//http://localhost:9090/findBusById
router.get("/findBusById/:bid", busCnt.findBusById);
//http://localhost:9090/findBusByRoute
router.get("/findBusById/:from/:to", busCnt.findBusByRoute);
//http://localhost:9090/storeBus
router.post("/storeBus", busCnt.storeBus);
//http://localhost:9090/updateBus
router.put("/updateBus", busCnt.updateBus);
//http://localhost:9090/deleteBus
router.delete("/deleteBus/:bid", busCnt.deleteBus);
//---------------------------------------------------------------------------
//http://localhost:9090/findAllEmp
router.get("/findAllEmp", empCnt.findAllEmp);
//http://localhost:9090/storeEmp
router.post("/storeEmp", empCnt.storeEmp);
//http://localhost:9090/updateEmp
router.put("/updateEmp", empCnt.updateEmp);
//http://localhost:9090/deleteEmp
router.delete("/deleteEmp/:_id", empCnt.deleteEmp);
//---------------------------------------------------------------------------
//http://localhost:9090/findAllPass
router.get("/findAllPass", passCnt.findAllPass);
//http://localhost:9090/sorePass 
router.post("/storePass", passCnt.storePass);
//http://localhost:9090/updatePass
router.put("/updatePass", passCnt.updatePass);
//http://localhost:9090/deletePass
router.delete("/deletePass/:pid", passCnt.deletePass);
//---------------------------------------------------------------------------
//http://localhost:9090/findAllUser
router.get("/findAllUser", userCnt.findAllUser);
//http://localhost:9090/storeUser
router.post("/storeUser", userCnt.storeUser);
module.exports = router;

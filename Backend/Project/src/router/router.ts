import * as bRouteCnt from '../controller/bRouteCnt';
import * as busCnt from '../controller/busCnt';
import * as empCnt from '../controller/empCnt';
import * as passCnt from '../controller/passCnt';
import * as userCnt from '../controller/userCnt'
import express from 'express';

let router = express.Router();


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

//---------------------------------------------------------------------------

export = router;
import * as repository from '../repository/BrRepo';
import { bRoute } from '../model/bRoute';
import { Request, Response } from "express";

export let findAllRoutes = async (req: Request, res: Response) => {
    let result = await repository.findAllRoutes();
    try {
        res.json(result);
    } catch (ex) {
        res.json(ex);
    }
}

export let findRouteById = async (req: Request, res: Response) => {
    let route: bRoute = req.body;
    let result = await repository.findRouteById(route);
    try {
        res.json(result);
    } catch (ex) {
        res.json(ex);
    }
}

export let storeRoute = async (req: Request, res: Response) => {
    let route: bRoute = req.body;
    try {
        let result = await repository.storeRoute(route);
        //res.json(result);
        res.json({ "msg": "Record inserted successfully" });
    } catch (ex) {
        //res.json(ex);
        res.json({ "msg": "Record didn't inserted" });
    }
}

export let updateRoute = async (req: Request, res: Response) => {
    let route: bRoute = req.body;
    let result = await repository.updateRoute(route);
    try {
        if (result.modifiedCount > 0) {
            res.send("Record updated successfully")
        } else if (result.matchedCount > 0) {
            res.send("Record exist but didn't update")
        } else {
            res.send("Record didn't update")
        }
    } catch (ex) {
        res.send(ex);
    }
}

export let deleteRoute = async (req: Request, res: Response) => {
    let rid: String = (req.params._id);
    let result = await repository.deleteRoute(rid);
    try {
        if (result.deletedCount > 0) {
            res.send("Record deleted successfully")
        } else {
            res.send("Record not present")
        }
    } catch (ex) {
        res.send(ex);
    }
}
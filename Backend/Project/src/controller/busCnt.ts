import * as repository from '../repository/busRepo';
import { bus } from '../model/bus';
import { Request, Response } from "express";

export let findAllBus = async (req: Request, res: Response) => {
    let result = await repository.findAllBus();
    try {
        res.json(result);
    } catch (ex) {
        res.json(ex);
    }
}

export let findBusById = async (req: Request, res: Response) => {
    let bid: String = eval(req.params.bid);
    let result = await repository.findBusById(bid);
    try {
        res.json(result);
    } catch (ex) {
        res.json(ex);
    }
}

export let findBusByRoute = async (req: Request, res: Response) => {
    let from: string = req.params.from;
    let to: string = req.params.to;
    let result = await repository.findBusByRoute(from, to);
    try {
        res.json(result);
    } catch (ex) {
        res.json(ex);
    }
}

export let storeBus = async (req: Request, res: Response) => {
    let bus: bus = req.body;
    try {
        let result = await repository.storeBus(bus);
        //res.json(result);
        res.json({ "msg": "Record inserted successfully" });
    } catch (ex) {
        //res.json(ex);
        res.json({ "msg": "Record didn't inserted" });
    }
}

export let updateBus = async (req: Request, res: Response) => {
    let bus: bus = req.body;
    let result = await repository.updateBus(bus);
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

export let deleteBus = async (req: Request, res: Response) => {
    let bid: String = (req.params.bid);
    let result = await repository.deleteBus(bid);
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
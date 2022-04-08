import { Request, Response } from "express";
import { pass } from "../model/pass";
import * as repository from '../repository/passRepo';

export let findAllPass = async (req: Request, res: Response) => {
    let result = await repository.findAllPass();
    try {
        res.json(result);
    } catch (ex) {
        res.json(ex);
    }
}

export let storePass = async (req: Request, res: Response) => {
    let pass: pass = req.body;
    try {
        let result = await repository.storePass(pass);
        //res.json(result);
        res.json({ "msg": "Record inserted successfully" });
    } catch (ex) {
        //res.json(ex);
        res.json({ "msg": "Record didn't inserted" });
    }
}

export let updatePass = async (req: Request, res: Response) => {
    let pass: pass = req.body;
    let result = await repository.updatePass(pass);
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

export let deletePass = async (req: Request, res: Response) => {
    let pid: String = (req.params.pid);
    let result = await repository.deletePass(pid);
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
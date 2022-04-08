import { Request, Response } from "express";
import { emp } from "../model/emp";
import * as repository from '../repository/empRepo'

export let findAllEmp = async (req: Request, res: Response) => {
    let result = await repository.findAllEmp();
    try {
        res.json(result);
    } catch (ex) {
        res.json(ex);
    }

}
export let storeEmp = async (req: Request, res: Response) => {
    let emp: emp = req.body;
    try {
        let result = await repository.storeEmp(emp);
        res.json({ "msg": "Record inserted successfully" });
    } catch (ex) {
        res.json({ "msg": "Record didn't inserted" });
    }
}
export let updateEmp = async (req: Request, res: Response) => {
    let emp: emp = req.body;
    let result = await repository.updateEmp(emp);
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
export let deleteEmp = async (req: Request, res: Response) => {
    let eid: String = (req.params._id);
    let result = await repository.deleteEmp(eid);
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
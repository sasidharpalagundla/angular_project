import * as repository from '../repository/userRepo'
import { user } from '../model/user';
import { Request, Response } from "express";

export let findAllUser = async (req: Request, res: Response) => {
    let result = await repository.findAllUser();
    try {
        res.json(result);
    } catch (ex) {
        res.json(ex);
    }
}

export let storeUser = async (req: Request, res: Response) => {
    let user: user = req.body;
    try {
        let result = await repository.storeUser(user);
        res.json({ "msg": "Record inserted successfully" });
    } catch (ex) {
        res.json({ "msg": "Record didn't inserted" });
    }
}
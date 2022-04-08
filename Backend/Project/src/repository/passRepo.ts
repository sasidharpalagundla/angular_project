import { pass } from "../model/pass";
import { passModel } from "../model/passModel";

export let findAllPass = () => {
    return passModel.find({})
}

export let storePass = (pass: pass) => {
    return passModel.insertMany(pass)
}

export let updatePass = (pass: pass) => {
    console.log("pass", pass)
    return passModel.updateOne({ pid: pass.pid },
        { $set: { name: pass.name, loc: pass.loc, from: pass.from, to: pass.to, seat: pass.seat } });
}

export let deletePass = (pid: String) => {
    return passModel.deleteOne({ pid: pid });
}

import { emp } from "../model/emp";
import { empModel } from "../model/empModel";

export let findAllEmp = () => {
    return empModel.find({})
}

export let storeEmp = (emp: emp) => {
    return empModel.insertMany(emp)
}

export let updateEmp = (emp: emp) => {
    return empModel.updateOne({ eid: emp.eid },
        { $set: { name: emp.name, sal: emp.sal, role: emp.role, leaves: emp.leaves, status: emp.status, routeId: emp.routeId } });
}

export let deleteEmp = (eid: String) => {
    return empModel.deleteOne({ eid: eid });
}
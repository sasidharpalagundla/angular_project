import { bRoute } from "../model/bRoute";
import { bRouteModel } from "../model/bRouteModel";

export let findAllRoutes = () => {
    return bRouteModel.find({})
}
export let findRouteById = (bRoute: bRoute) => {
    return bRouteModel.find({ rid: bRoute.rid })
}
export let storeRoute = (bRoute: bRoute) => {
    return bRouteModel.insertMany(bRoute)
}
export let updateRoute = (bRoute: bRoute) => {
    return bRouteModel.updateOne({ rid: bRoute.rid },
        { $set: { from: bRoute.from, to: bRoute.to } })
}
export let deleteRoute = (rid: String) => {
    return bRouteModel.deleteOne({ _id: rid });
}
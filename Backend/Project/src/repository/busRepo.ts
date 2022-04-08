import { bus } from "../model/bus";
import { busModel } from "../model/busModel";

export let findAllBus = () => {
    return busModel.find({})
}

export let findBusById = (bid: String) => {
    return busModel.find(bid)
}

export let findBusByRoute = (bfrom: string, bto: string) => {
    return busModel.find({}, { bfrom: 1, bto: 1 })
}

export let storeBus = (bus: bus) => {
    return busModel.insertMany(bus)
}

export let updateBus = (bus: bus) => {
    return busModel.updateOne({ bid: bus.bid },
        { $set: { from: bus.from, to: bus.to, type: bus.type, cap: bus.cap, date: bus.date, driver: bus.driver, clerk: bus.clerk } });
}

export let deleteBus = (id: String) => {
    return busModel.deleteOne({ bid: id });
}

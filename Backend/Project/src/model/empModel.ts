import mongoose from "mongoose";
mongoose.pluralize(null);

let empSchema = new mongoose.Schema({
    eid: String,
    name: String,
    role: String,
    sal: Number,
    leaves: Number,
    status: String,
    routeId: String,
})

export let empModel = mongoose.model("emp", empSchema);
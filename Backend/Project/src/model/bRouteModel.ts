import mongoose from "mongoose";
mongoose.pluralize(null);

let bRouteSchema = new mongoose.Schema({
    rid: String,
    from: String,
    to: String,
})

export let bRouteModel = mongoose.model("bRoute", bRouteSchema)
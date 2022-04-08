import mongoose from "mongoose";
mongoose.pluralize(null);

let passSchema = new mongoose.Schema({
    pid: String,
    name: String,
    age: Number,
    loc: String,
    from: String,
    to: String,
    seat: Number,
    date: Date,
})

export let passModel = mongoose.model("pass", passSchema)
import mongoose from 'mongoose';
mongoose.pluralize(null);

let busSchema = new mongoose.Schema({
    bid: String,
    from: String,
    to: String,
    type: String,
    cap: Number,
    date: Date,
    driver: String,
    clerk: String
})

export let busModel = mongoose.model("bus", busSchema)
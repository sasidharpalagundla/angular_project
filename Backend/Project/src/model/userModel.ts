import mongoose from "mongoose";
mongoose.pluralize(null);

let userSchema = new mongoose.Schema({
    uid: String,
    name: String,
    pass: String,
    role: String,
})

export let userModel = mongoose.model("user", userSchema)

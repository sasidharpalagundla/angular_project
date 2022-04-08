import mongoose from "mongoose";

let url = "mongodb://localhost:27017/project";

export let dbConnection =
    mongoose.connect(url).then(res => console.log("db is connected")).catch(err => console.log(err))

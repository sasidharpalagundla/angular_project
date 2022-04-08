import { user } from "../model/user";
import { userModel } from "../model/userModel";

export let findAllUser = () => {
    return userModel.find({})
}

export let storeUser = (user: user) => {
    return userModel.insertMany(user)
}

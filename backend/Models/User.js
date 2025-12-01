import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})

const UserModel = mongoose.model("user", UserSchema)

export default UserModel
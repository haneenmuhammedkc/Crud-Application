import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import UserModel from "./Models/User.js"
dotenv.config()

const Port=process.env.PORT

const app = express() 
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("MongoDB is Successfully Connected");
})

app.get('/',(req, res)=>{
    UserModel.find({})
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

app.get('/getUser/:id', (req, res)=>{
    const id = req.params.id;
    UserModel.findById({_id:id})
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

app.put('/updateUser/:id', (req, res)=>{
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id:id}, {
        name: req.body.name, 
        email: req.body.email, 
        age: req.body.age})
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

app.delete('/deleteUser/:id', (req, res)=>{
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})

app.post("/createUser",(req, res)=>{
    UserModel.create(req.body)
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
})

app.listen(Port,()=>{
    console.log("Server is Running");
})
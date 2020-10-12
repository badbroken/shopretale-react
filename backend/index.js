require('dotenv').config()
const express = require("express")
const mongoose = require('mongoose');
const User = require("./dbschema");
const app = express()
const PORT = process.env.server_port;


// Default Express Setting starts here
app.use(express.static("../frontend/public"))
app.use(express.urlencoded({extended: false}))
app.use(express.json({extended: false}))

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})

//Connection to Database from Backend Starts Here
//defining the url to database
const dburl = process.env.dburl

//Defining the async function to connect to database through mongoose
const connectDB = async () => {
    try {
        await mongoose.connect(dburl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
        console.log("MongoDB is connected")
    } catch (e) {
        console.log(e)
    }
}
connectDB()
//Connection to Database from Backend Ends Here



app.post("/api/", async (req , res) => {
    try {
        await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            retailName: req.body.retailName,
            email: req.body.email,
            retailSite: req.body.retailSite,
            phone: req.body.phone,
            address: req.body.address,
            hearAbout: req.body.hearAbout,
            occupation: req.body.occupation,
            userMessage: req.body.userMessage,
        })
        res.json({
            message: "User Registered"
        })
    } catch (e) {
        res.json({
            message: "Email already registered"
        })
    }
})


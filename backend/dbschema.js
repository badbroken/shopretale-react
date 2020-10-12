const mongoose = require("mongoose")
const Schema = mongoose.Schema;


const userSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    retailName: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    retailSite: {
      type: String
    },
    phone: {
        type: Number,
        unique: true
    },
    address:{
        type: String
    },
    hearAbout: {
        type: String
    },
    userMessage: {
        type: String
    }
});
const User = mongoose.model('User',userSchema)
module.exports = User;
const mongoose = require('mongoose');
const { Schema, model } = mongoose
const joi = require('joi');
const userschema = new Schema({
    UserName: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: String,
        required: false,
        default: "false"
    },
    Profile: {
        type: String,
        required: true
        // default: "https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk"
    },
    Status: {
        type: String,
        required: false,
        default: "Active"
    }


})


const usermodel = model('user', userschema)


const uservalidation = (uv) => {
    let user = joi.object({
        UserName: joi.string().required(),
        Email: joi.string().required().email(),
        Password: joi.string().required(),
    })

    return user.validate(uv)
}

const loginvalidation = (lv) => {
    let log = joi.object({
        Email: joi.string().required().email(),
        Password: joi.string().required()
    })

    return log.validate(lv)
}


module.exports = { usermodel, uservalidation, loginvalidation }
const mongoose = require('mongoose');

const joi = require('joi')

const { Schema, model } = mongoose;

const studentschema = new Schema({
    Name: {
        type: String,
        required: true
    },
    ClassID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'class'
    },
    UserID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    },
    Phone: {
        type: Number,
        required: true,
        unique:true
    },
    Gender: {
        type: String,
        required: true,
        enum: ["Female", "Male"]
    },
    Address: {
        type: String,
        required: true
    },
    AmountPaid: {
        type: Number,
        required: false,
        default: "0"
    },
    Balance: {
        type: Number,
        required: false,
        default: "30"
    },
    TotalAmount: {
        type: Number,
        required: false,
        default: "30"
    },
    Status: {
        type: String,
        required: false,
        default: "UnPaid",
        enum: ["UnPaid", "ParcialPaid", "FullPaid"]
    }
}, { timestamps: true })

const studentmodel = model('student', studentschema);
const studentvalidation = (sv) => {
    let student = joi.object({
        ClassID: joi.string().required(),
        UserID: joi.string().required(),
        Name: joi.string().required(),
        Phone: joi.string().required(),
        Gender: joi.string().required(),
        Address: joi.string().required(),
    })
    return student.validate(sv)
}


module.exports = { studentmodel, studentvalidation }
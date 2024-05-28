const mongoose = require('mongoose');

const joi = require('joi')

const { Schema, model } = mongoose;

const receiptschema = new Schema({
    // ClassID: {
    //     type: [mongoose.Schema.Types.ObjectId],
    //     required: true,
    //     ref: 'class'
    // },
    // UserID: {
    //     type: [mongoose.Schema.Types.ObjectId],
    //     required: true,
    //     ref: 'user'
    // },
    StudentID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'student'
    },
    ReceiptAmount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: false,
        default: "Paid",
    },
    Date: {
        type: Date,
        required: false,
        default: new Date,
    }
})



const receiptmodel = model('receipt', receiptschema);

const receiptvalidation = (rv) => {
    let receipt = joi.object({
        StudentID: joi.string().required(),
        // ClassID: joi.string().required(),
        // UserID: joi.string().required(),
        ReceiptAmount: joi.number().required(),
    })
    return receipt.validate(rv)
}


module.exports = { receiptmodel, receiptvalidation }
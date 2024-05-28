const mongoose = require('mongoose');

const joi = require('joi')

const { Schema, model } = mongoose;

const classschema = new Schema({
    ClassName: {
        type: String,
        required: true
    },

    ClassStatus: {
        type: String,
        required: true,
        enum: ["Active", "Pending", "Blocked"]
    },
    ClassDate: {
        type: Date,
        required: false,
        default: new Date
    },
    UserID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    },

})



const classmodel = model('class', classschema);
const classvalidation = (sv) => {
    let classs = joi.object({
        UserID: joi.string().required(),
        ClassName: joi.string().required(),
        ClassStatus: joi.string().required(),

    })
    return classs.validate(sv)
}


module.exports = { classmodel, classvalidation }
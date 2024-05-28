const mongoose = require('mongoose');

const joi = require('joi')

const { Schema, model } = mongoose;

const examschema = new Schema({
    StudentID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'student'
    },
    maadooyin: {
        type: [],
        required: true,
    },
}, { timestamps: true })

const exammodel = model('exam', examschema);
const examvalidation = (ev) => {
    let exam = joi.object({
        StudentID: joi.string().required(),
        maadooyin: joi.array().required(),

    })
    return exam.validate(ev)
}


module.exports = { exammodel, examvalidation }
const mongoose = require('mongoose');

const joi = require('joi')

const { Schema, model } = mongoose;

const teacherschema = new Schema({
    StudentID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'student'
    },
    TeacherPhone: {
        type: Number,
        required: true
    },
    TeacherName: {
        type: String,
        required: true,
    },
    Date: {
        type: Date,
        required: false,
        default: new Date,
    }
})



const teachermodel = model('teacher', teacherschema);

const teachervalidation = (tv) => {
    let teacher = joi.object({
        TeacherName: joi.string().required(),
        StudentID: joi.string().required(),
        // UserID: joi.string().required(),
        TeacherPhone: joi.number().required(),
    })
    return teacher.validate(tv)
}
module.exports = { teachermodel, teachervalidation }
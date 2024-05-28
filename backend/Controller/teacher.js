const { teachermodel, teachervalidation } = require("../model/teacher");
// const { receiptmodel } = require("../model/receiptmodel");
// const { studentmodel } = require("../model/studentmodel");
// const { usermodel } = require("../model/usermodel");
const getteacher = async (req, res) => {
    try {
        let { page } = req.query
        let getteacher = await teachermodel.find().populate({
            path: "StudentID",
            select: "_id Name Phone",
            module: "student"
        });
        res.status(200).json(getteacher)
    } catch (error) {

        res.send(error.message)

    }
}
const getteacherid = async (req, res) => {
    try {
        let getteacherID = await teachermodel.findById(req.params.id);
        res.status(201).json(getteacherID)
    } catch (error) {
        res.send(error.message)

    }
}
const postteacher = async (req, res) => {
    try {
        let { error } = teachervalidation(req.body)
        if (error) return res.send(error.message)
        let newteacher = new teachermodel(req.body)
        
        let currencyteacher = await newteacher.save()
        res.status(201).json({
            status: "Success",
            message: "Successfully Inserted teacher",
            Info: currencyteacher
        })
    } catch (error) {

        res.send(error.message)

    }
}
const putteacher = async (req, res) => {
    try {
        let { id } = req.params;
        let Edit = await teachermodel.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({
            status: "Success",
            message: "Successfully Update teacher",
            info: Edit
        })
    } catch (error) {
        res.send(error.message)

    }
}
const deleteteacher = async (req, res) => {
    try {
        let { id } = req.params
        // let StudentData = await studentmodel.findOne({ teacherID: id });
        // await studentmodel.findByIdAndDelete(StudentData)
        let Remove = await teachermodel.findByIdAndDelete(id);
        if (!Remove) return res.send("")
        res.status(200).json({
            status: "Success",
            message: "Successfully Remove teacher",
            info: Remove
        })
    } catch (error) {

        res.send(error.message)

    }
}


module.exports = {
    getteacher,
    getteacherid,
    postteacher,
    putteacher,
    deleteteacher
}
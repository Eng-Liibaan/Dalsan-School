const { exammodel, examvalidation } = require("../model/exammode");
const { receiptmodel } = require("../model/receiptmodel");
const { studentmodel } = require("../model/studentmodel");
const { usermodel } = require("../model/usermodel");
const getexam = async (req, res) => {
    try {
        let { page } = req.query
        let getexam = await exammodel.find().populate({
            path: "StudentID",
            select: "_id Name Phone",
            module: "student"
        });
        res.status(200).json(getexam)
    } catch (error) {

        res.send(error.message)

    }
}
const getexamid = async (req, res) => {
    try {
        let getexamID = await exammodel.findById(req.params.id);
        res.status(201).json(getexamID)
    } catch (error) {
        res.send(error.message)

    }
}
const postexam = async (req, res) => {
    try {
        let { error } = examvalidation(req.body)
        if (error) return res.send(error.message)
        let newexam = new exammodel(req.body)
        let currencyexam = await newexam.save()
        res.status(201).json({
            status: "Success",
            message: "Successfully Inserted exam",
            Info: currencyexam
        })
    } catch (error) {

        res.send(error.message)

    }
}
const putexam = async (req, res) => {
    try {
        let { id } = req.params;
        let Edit = await exammodel.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({
            status: "Success",
            message: "Successfully Update exam",
            info: Edit
        })
    } catch (error) {
        res.send(error.message)

    }
}
const deleteexam = async (req, res) => {
    try {
        let { id } = req.params
        let StudentData = await studentmodel.findOne({ examID: id });
        await studentmodel.findByIdAndDelete(StudentData)
        let Remove = await exammodel.findByIdAndDelete(id);
        if (!Remove) return res.send("")
        res.status(200).json({
            status: "Success",
            message: "Successfully Remove exam",
            info: Remove
        })
    } catch (error) {

        res.send(error.message)

    }
}


module.exports = {
    getexam,
    getexamid,
    postexam,
    putexam,
    deleteexam
}
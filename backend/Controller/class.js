const { classmodel, classvalidation } = require("../model/classmodel");
const { receiptmodel } = require("../model/receiptmodel");
const { studentmodel } = require("../model/studentmodel");
const { usermodel } = require("../model/usermodel");
const getclass = async (req, res) => {
    try {
        let { page } = req.query
        let getClass = await classmodel.find().populate({
            path: "UserID",
            select: "_id UserName Email",
            module: "user"
        });
        res.status(200).json(getClass)
    } catch (error) {

        res.send(error.message)

    }
}
const getclassid = async (req, res) => {
    try {
        let getclassID = await classmodel.findById(req.params.id);
        res.status(201).json(getclassID)
    } catch (error) {
        res.send(error.message)

    }
}
const postclass = async (req, res) => {
    try {
        let { error } = classvalidation(req.body)
        if (error) return res.send(error.message)
        let newclass = new classmodel(req.body)
        let UserData = await classmodel.findOne({ UserID: newclass.UserID });
        if (UserData) return res.send(`User is already Exist`)
        let currencyclass = await newclass.save()
        res.status(201).json({
            status: "Success",
            message: "Successfully Inserted Class",
            Info: currencyclass
        })
    } catch (error) {

        res.send(error.message)

    }
}
const putclass = async (req, res) => {
    try {
        let { id } = req.params;
        let Edit = await classmodel.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({
            status: "Success",
            message: "Successfully Update Class",
            info: Edit
        })
    } catch (error) {
        res.send(error.message)

    }
}
const deleteclass = async (req, res) => {
    try {
        let { id } = req.params
        let StudentData = await studentmodel.findOne({ ClassID: id });
        await studentmodel.findByIdAndDelete(StudentData)
        let Remove = await classmodel.findByIdAndDelete(id);
        if (!Remove) return res.send("")
        res.status(200).json({
            status: "Success",
            message: "Successfully Remove Class",
            info: Remove
        })
    } catch (error) {

        res.send(error.message)

    }
}


module.exports = {
    getclass,
    getclassid,
    postclass,
    putclass,
    deleteclass
}
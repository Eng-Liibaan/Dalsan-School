const { classmodel } = require('../model/classmodel');
const { receiptmodel } = require('../model/receiptmodel');
const { studentmodel, studentvalidation } = require('../model/studentmodel')
const getstudent = async (req, res) => {
    try {
        let { page } = req.query
        let getstudent = page ? await studentmodel.find().limit(page) : await studentmodel.find().populate({
            path: "ClassID",
            module: "class",
            select: "_id ClassName"
        }).populate({
            path: "UserID",
            module: "user",
            select: "_id UserName"

        });
        res.status(200).json(getstudent)
    } catch (error) {

        res.send(error.message)

    }
}
const getstudentid = async (req, res) => {
    try {
        let getstudentID = await studentmodel.findById(req.params.id);
        res.status(201).json(getstudentID)
    } catch (error) {
        res.send(error.message)

    }
}
const poststudent = async (req, res) => {
    try {
        let { error } = studentvalidation(req.body);
        if (error) return res.send(error.message)
        let newstudent = new studentmodel({
            Name: req.body.Name,
            Phone: req.body.Phone,
            Gender: req.body.Gender,
            Address: req.body.Address,
            ClassID: req.body.ClassID,
            UserID: req.body.UserID
        })
        let ClassData = await studentmodel.findOne({ ClassID: newstudent.ClassID });
        if (ClassData) return res.send(`Class is already exist`)
        let UserData = await studentmodel.findOne({ UserID: newstudent.UserID });
        if (UserData) return res.send(`user is already exist`)
        let UserData1 = await studentmodel.findOne({ Phone: newstudent.Phone });
        if (UserData1) return res.send(`Number  is already Taken`)
        let currencystudent = await newstudent.save()
        res.status(201).json({
            status: "Success",
            message: "Successfully Inserted Student",
            info: currencystudent
        })
    } catch (error) {

        res.send(error.message)

    }
}
const putstudent = async (req, res) => {
    try {

        let { id } = req.params;
        let Edit = await studentmodel.findByIdAndUpdate(id, { $set: req.body }, { new: true });
        res.status(200).json({
            status: "Success",
            message: "Successfully Update student",
            info: Edit
        })
    } catch (error) {
        res.send(error.message)

    }
}
const deletestudent = async (req, res) => {
    try {
        let { id } = req.params;
        let StudentData = await receiptmodel.find({ StudentID: id });
        await receiptmodel.deleteMany(StudentData._id)
        let Remove = await studentmodel.findByIdAndDelete(id);
        if (!Remove) return res.send("")
        res.status(200).json({
            status: "Success",
            message: "Successfully Remove Student",
            info: Remove
        })


    } catch (error) {

        res.send(error.message)

    }
}


module.exports = {
    getstudent,
    getstudentid,
    poststudent,
    putstudent,
    deletestudent
}
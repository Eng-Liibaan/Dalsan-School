const { receiptvalidation, receiptmodel } = require('../model/receiptmodel')
const { studentmodel } = require('../model/studentmodel')
const { classmodel } = require('../model/classmodel')
const { usermodel } = require('../model/usermodel')

const getreceipt = async (req, res) => {

    let getReceipt = await receiptmodel.find().populate({
        path: "StudentID",
        module: "student",
        select: "_id Name"
    });
    res.send(getReceipt)

}
const getreceiptid = async (req, res) => {
    let getReceiptId = await receiptmodel.findById(req.params.id);
    res.send(getReceiptId)

}

const postreceipt = async (req, res) => {
    let { error } = receiptvalidation(req.body)
    if (error) return res.send(error.message)
    const StudentData = await studentmodel.findOne({ _id: req.body.StudentID });
    if (!StudentData) return res.send("StudentData Lama Helin")
    const ClassData = await classmodel.findOne({ _id: StudentData.ClassID })
    if (!ClassData) return res.send("ClassData Lama Helin")
    const UserData = await usermodel.findOne({ _id: StudentData.UserID })
    if (!UserData) return res.send("UserData Lama Helin")
    let TotalAmountPaid = parseFloat(StudentData.AmountPaid + req.body.ReceiptAmount)
    let CurrencyBalance = parseFloat(StudentData.TotalAmount - TotalAmountPaid)
    let CurrencyStatus = ""
    if (StudentData.Balance == "0") {
        res.send(`Lacagta laga rabay waad wada dhiibtay`)
        return
    }

    if (TotalAmountPaid > StudentData.TotalAmount) {
        res.send(`Lacagta laga rabo waa ${StudentData.Balance}`)
        return
    }

    if (TotalAmountPaid < StudentData.TotalAmount) {
        CurrencyStatus = "ParcialPaid"

    }

    if (req.body.ReceiptAmount < 1) {
        res.send(`Fadlan soo Geli Lambar Ka Weyn ${req.body.ReceiptAmount}`)
        return
    }

    if (CurrencyBalance == "0") {
        CurrencyStatus = "FullPaid"
    }




    let newreceipt = await receiptmodel.create(req.body)
    let student = await studentmodel.findByIdAndUpdate(req.body.StudentID, {
        AmountPaid: TotalAmountPaid,
        Balance: CurrencyBalance,
        Status: CurrencyStatus
    }, { new: true })

    res.send({
        status: "Success",
        message: "Successfully Paid Money",
        info: student,
        info1: newreceipt
    })
}



const putreceipt = async (req, res) => {
    let { Increase } = req.body
    let Edit = await studentmodel.findByIdAndUpdate(req.params.id, {
        Balance: parseInt(Increase),
        TotalAmount: parseInt(Increase)
    }, { new: true })

    Edit.Status = "UnPaid"
    await Edit.save()
    res.send({
        status: "Success",
        message: "Successfully Increase Money Student",
        info: Edit
    })

}
const deletereceipt = async (req, res) => {
    let Remove = await receiptmodel.findByIdAndDelete(req.params.id);
    res.send({
        status: "Success",
        message: "Successfully Remove Receipt",
        info: Remove
    })

}
module.exports = { getreceipt, getreceiptid, postreceipt, putreceipt, deletereceipt }
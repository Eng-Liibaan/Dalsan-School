let jwt = require('jsonwebtoken');
require('dotenv').config()
const multer = require('multer');
const path = require('path');
let VerifyToken = (req, res, next) => {
    let access_token = req.headers.access_token
    if (access_token) {
        jwt.verify(access_token, process.env.token, (err, user) => {
            if (err) return res.send("Xogtada is invalid");
            req.user = user
        })
        next()
    } else {
        res.send('you dont have token !')
    }

}


const AuthorizationUser = (req, res, next) => {
    VerifyToken(req, res, () => {
        let { id } = req.params
        if (req.user.id === id) {
            next()
        } else {
            res.send("You are not Authorized !")
        }
    })
}
const AuthorizationAdmin = (req, res, next) => {
    VerifyToken(req, res, () => {
        if (req.user.role === "true") {
            next()
        } else {
            res.send("You are not Authorized !")
        }
    })
}


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images")
    },
    filename: (req, file, cb) => {
        let imagevalidation = file.fieldname + Date.now() + path.extname(file.originalname)
        cb(null, imagevalidation)
    }
})

const Upload = multer({
    storage: storage
}).single("Profile")
module.exports = { AuthorizationUser, AuthorizationAdmin, Upload }
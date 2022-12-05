const mongoose = require("mongoose");
const User = require('../model/user')

exports.show = async (req, res) => {
    res.status(200).send("Welcome to Home Page and enter mobile to continue")
}

exports.check = async (req, res) => {
    const mobile = await User.findOne({ mobile: req.body.mobile })
    try {
        if (!mobile) {
            // await User.create(req.body)
            console.log("Mobile number not registered in the database")
            res.status(200).render("signup")
        } else {
            console.log("Mobile already registered taking to the login page")
            res.status(200).render("login")
        }
    } catch (error) {
        console.log(error.message)
        res.status(400).send("Encountered an error")
    }
}
const express = require('express');
const router = express.Router()
const homeController = require('../controller/homeController')


router.route('/')
    .get(homeController.show)
    .post(homeController.check)

router.all('/*',(req,res)=>{
    res.status(404).json("Page not Found")
})


module.exports = router
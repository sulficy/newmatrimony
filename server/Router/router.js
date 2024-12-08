const express = require('express')
const router =express.Router()
const userController =require('../Controllers/userController')
const doctorController = require('../Controllers/doctorController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const multerMiddleware = require('../Middlewares/multerMiddleware')

router.post('/api/register',userController.register)
router.post('/api/login',userController.login)
// Add doctors
router.post('/api/dashboard/add-doctors', jwtMiddleware, multerMiddleware.single('doctorImg'), doctorController.addDocters);
// Get doctors
router.get('/api/dashboard/get-doctors',jwtMiddleware,doctorController.getAllDoctorDetails)

module.exports=router
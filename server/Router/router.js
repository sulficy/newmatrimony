const express = require('express')
const router =express.Router()
const userController =require('../Controllers/userController')
const doctorController = require('../Controllers/doctorController')
const reviewController = require('../Controllers/reviewController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const multerMiddleware = require('../Middlewares/multerMiddleware')
const appointmentController = require('../Controllers/appointmentController')

router.post('/api/register',userController.register)
router.post('/api/login',userController.login)
// Add doctors
router.post('/api/dashboard/add-doctors', jwtMiddleware, multerMiddleware.single('doctorImg'), doctorController.addDocters);
// Get doctors
router.get('/api/dashboard/get-doctors',jwtMiddleware,doctorController.getAllDoctorDetails)
// Add review
router.post('/api/review',jwtMiddleware,multerMiddleware.single('doctorImg'), reviewController.reviewPort)
//get review
router.get('/api/getreview',jwtMiddleware, reviewController.getReview)
//add appointment
router.post('/api/appointment', jwtMiddleware,multerMiddleware.single('doctorImg'), appointmentController.addAppointment);
//get appointment
router.get('/api/getappoint',jwtMiddleware, appointmentController.getAppointment)

module.exports = router
const userController=require("../controllers/userController.js");
const {validateRegister,validateLogging}=require("../validations/userValidation.js");
const express=require("express");
const router=express.Router();


//register
router.post('/user/register',validateRegister,userController.createUser);
//login
router.post('/user/login',validateLogging,userController.logUser);
//get
router.get('/user/:_id',userController.getUserById);
//get all
router.get('/user/all',userController.getAllUsers);
//delete
router.delete('/user/delete/:_id',userController.deleteUser);
//update
router.patch('/user/update/:_id',userController.userUpdate);
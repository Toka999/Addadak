const userController=require("../controllers/userController.js");
const {validateRegister,validateLogging}=require("../validations/userValidation.js");
const express=require("express");
const userRouter=express.Router();


//register
userRouter.post('/user/register',validateRegister,userController.createUser);
//login
userRouter.post('/user/login',validateLogging,userController.logUser);
//get
userRouter.get('/user/:_id',userController.getUserById);
//get all
userRouter.get('/user/all',userController.getAllUsers);
//delete
userRouter.delete('/user/delete/:_id',userController.deleteUser);
//update
userRouter.patch('/user/update/:_id',userController.userUpdate);

module.exports=userRouter;
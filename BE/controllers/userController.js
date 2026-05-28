const user=require("../models/User.js");
const clientErrorHandler=require("../middlewres/clientErrorhandler.js");

//create
const createUser=async (req,res,next)=>{
    try{
        const crticalParams={
            email:req.body.email,
            phone:req.body.phone,
            nationalID:req.body.nationalID
        }
        let alreadyBody= await user.findOne(crticalParams);
        let alreadyEmail= await user.findOne({email:req.body.email});
        let alreadyPhone= await user.findOne({phone:req.body.phone});
        if(alreadyBody || alreadyEmail||alreadyPhone){return next(new clientErrorHandler(400,"user already registered"));}

        const newUser= await user.create(req.body);
        if(!newUser){
            return next (new clientErrorHandler(400,"user's entered data is invalid, please try again!"));
        }
        res.status(201).json({message:"User registered "})
    }catch(error){
        next(error);
    }
}
//login
const logUser=async(req,res,next)=>{
    try{
        const email=req.body.email;
        const pass=req.body.password;
        const userSaved=await user.findOne({email});
        if(!userSaved){
            return next(new clientErrorHandler(404,"Please register first"));
        }
        const match=await userSaved.checkPassword(pass);
        if(!match){
            return next( new clientErrorHandler(401,"wrong password, please try again"));
        }
        res.status(200).json({message:"logging succeeded"});


    }catch(error){
        next(error);
    }
}
//delete
const deleteUser=async(req,res,next)=>{
    try{
        const id=req.params._id
        const deletedUser= await user.findByIdAndDelete(id);
        if(!deletedUser){
            return next( new clientErrorHandler(404,"User not found"));
        }
        const userName=deleteUser.firstNme;
        res.status(200).json({message:`user ${userName} deleted `});
       


    }catch(error){
        next(error);
    }
}

//get by id
const getUserById=async(req,res,next)=>{
     try{
        const id=req.params._id
        const user= await user.findById(id);
        if(!user){
            return next( new clientErrorHandler(404,"User not found"));
        }
        res.status(200).json({message:`user: `,user});
    }catch(error){
        next(error);
    }
}

//get all users
const getAllUsers=async(req,res,next)=>{
     try{
        const users= await user.find();
        if(!users){
            return next( new clientErrorHandler(404,"Users not found"));
        }
        res.status(200).json({message:`users: `,users});
    }catch(error){
        next(error);
    }
}

//update user

const userUpdate=async (req,res,next)=>{
    try{
        const newData=req.body;
        const id=req.params._id
        const updatedUser=await user.findByIdAndUpdate(id,newData,{
            runValidators:true,
            new:true
        });
        if(!updatedUser){
            return next( new clientErrorHandler(404,"User not found"));
        }
        res.status(200).json({message:`user upated: `,updatedUser});

    }catch(error){
        next(error);
    }
}

module.exports={
    createUser,
    deleteUser,
    getUserById,
    getAllUsers,
    userUpdate,
    logUser
}
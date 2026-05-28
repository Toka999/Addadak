//server
const express=require("express");
const app=express();

//dotenv activation
require("dotenv").config();

//dependencies
const mongoose=require("mongoose");
const mongoSanitize=require("express-mongo-sanitize");
const xssClean=require("xss-clean");
//const morgan=require("morgan");
const cors=require("cors");
const globalErrorHnadler=require("./middlewres/serverErrorHandler.js");
const userRouter=require("./routes/userRoute.js");

//server activation
app.use(express.json());
//app.use(mongoSanitize());
//app.use(xssClean());
app.use(cors());
app.use("/",userRouter);


//db connection
dataBaseConnection=async()=>{
    await mongoose.connect(process.env.DB_URL);
    console.log("Data base is connected (o_o) ");
};
dataBaseConnection();

//global error hander
app.use(globalErrorHnadler);

//server connection
app.listen(process.env.PORT||3000,()=>{
    console.log(`Server is listening to port ${process.env.PORT}`);
});
const serverErrorhandler=(error,req,res,next)=>{
    let statusCode=error.statusCode||500;
    let message=error.message;
    console.log(message);
    return res.status(statusCode).json({message:message});
    
}

module.exports=serverErrorhandler;
const serverErrorhandler=(error,req,res,next)=>{
    let statusCode=error.statusCode;
    let message=error.message;
    return res.status(statusCode).json({message:message});
    
}

module.exports=serverErrorhandler;
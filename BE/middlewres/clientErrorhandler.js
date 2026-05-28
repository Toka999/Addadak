class clientErrorHandler extends Error{
    constructor(statusCode,message){
        super(message);
        this.statusCode=statusCode;
        this.status=`${statusCode}`.startsWith('4')?'fail':'error';
        this.isOperational=true;  //it means that this error is handled and expected during production not a new error
        Error.captureStackTrace(this,this.constructor); //it let the node js specifywich file and which line has the error without making a mess
    }
}

module.exports=clientErrorHandler;

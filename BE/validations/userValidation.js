const Joi=require("joi");
const {clientErrorhandler}=require("../middlewres/clientErrorhandler");

//Registration
const registerValidation=Joi.object({
    firstName:Joi.string()
    .required()
    .pattern(/^[a-zA-Z]/)
    .messages({
        'any.required':'this field is required',
        'string.empty':'Name should not be blank',
        'string.alpha':'Name should have letters only',
        
    })
    ,

    lastName:Joi.string()
    .required()
    .pattern(/^[a-zA-Z]/)
    .messages({
        'any.required':'this field is required',
        'string.empty':'Name should not be blank',
        'string.alpha':'Name should have letters only',
        
    })
    ,

    age:Joi.number()
    .integer()
    .min(21)
    .max(90)
    .messages({
        'any.required':'this field is required',
        'number.base':'Age should be a number',
        'number.integer':'Age should be a whole number',
        'number.positive':'Age should be a positive number',
        'number.min':'minimum age is 21',
        'number.max':'maximum age is 90'
        
    })
    ,

    email:Joi.string()
    .required()
    .email()
    .messages({
        'any.required':'this field should not be empty',
        'string.email':'email format should be valid'
    })
    ,

    password:Joi.string()
    .required()
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&'%])[A-Za-z\d@$!%*?&'%]{8,}$/)
    .min(8)
    .messages({
        'any.required':'this field should not be empty',
        'string.pattern.base':'password should have at least one capital letter, a small letter, a digit and a symbol',
        'string.min':'min lenght of password should be 8 characters'
    })
    ,

    confirmPassword:Joi.any()
    .required()
    .valid(Joi.ref('password'))
    .messages({
        'any.required':'this field is required',
        'any.only':'passwords are not matching'
    })
    
    ,

    phone:Joi.string()
    .required()
    .pattern(/^(?:\+20|20)?0?1[0125]\d{8}$/)
    .min(11)
    .messages({
        'any.required':'this field is required',
        'string.pattern.base':'only egyptian phone numbers are allowed',
        'string.min':'phone number should be 11 digits'
    })
    ,

    nationalID:Joi.string()
    .required()
    .pattern(/^([23])(?:\d{2})(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])(?:\d{6})$/)
    .messages({
        'any.empty':'this field should not be empty',
        'string.pattern.base':'only egyptian valid national IDs are allowed'
    })
    ,

    charged:Joi.number()
    .default(0.0)
    ,

    currentBalance:Joi.number()
    .default(0.0)
    
    
});

const validateRegister=(req,res,next)=>{
    const {value, error}= registerValidation.validate(req.body,
        {
            abortEarly:false,
            stripUnknown:true
        }
    );
    if(error){return next(new clientErrorhandler(400,error.details[0].message));}//to be continued
    req.body=value;
    next();
};

//logging
const loggingValidation=Joi.object({
    email:Joi.string()
    .required()
    .email()
    ,

    password:Joi.string()
    .required()
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    .messages({
        
    }),
});

const validateLogging=(req,res,next)=>{
    const {value, error}= loggingValidation.validate(req.body,
        {
            abortEarly:false,
            stripUnknown:true
        }
    );
    if(error){return next(new clientErrorhandler(400,error.details[0].message));}//to be continued
    req.body=value;
    next();
};

module.exports={validateRegister,validateLogging};
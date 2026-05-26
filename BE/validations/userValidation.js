const Joi=require("joi");

//Registration
const registerValidation=Joi.object({
    firstName:Joi.string()
    .required()
    .pattern(/^[a-zA-Z]/),

    lastName:Joi.string()
    .required()
    .pattern(/^[a-zA-Z]/),

    age:Joi.number()
    .integer()
    .min(21)
    .max(90)
    .trim(),

    email:Joi.string()
    .required()
    .email()
    .trim(),

    password:Joi.string()
    .required()
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    .trim(),

    confirmPassword:Joi.any()
    .required()
    .valid(Joi.ref('password'))
    .trim()
    ,

    phone:Joi.string()
    .required()
    .pattern(/^(?:\+20|20)?0?1[0125]\d{8}$/)
    .min(11)
    .trim(),

    nationalID:Joi.string()
    .required()
    .pattern(/^([23])(?:\d{2})(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])(?:\d{6})$/)
    .trim(),

    charged:Joi.number()
    .default(0.0)
    .trim(),

    currentBalance:Joi.number()
    .default(0.0)
    .trim()
    
});

const validateRegister=(req,res,next)=>{
    const {value, error}= registerValidation.validate(req.body,
        {
            abortEarly:false,
            stripUnknown:true
        }
    );
    if(error){}//to be continued
    req.body=value;
    next();
};

//logging
const loggingValidation=Joi.object({
    email:Joi.string()
    .required()
    .email()
    .trim(),

    password:Joi.string()
    .required()
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    .trim()
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
    if(error){}//to be continued
    req.body=value;
    next();
};

module.exports={validateRegister,validateLogging};
const mongoose=require("mongoose");
const userSchema=mongoose.Schema({
    firstName:{
        type:String,
        required:[true,"First name is required"],
        match:[/^[a-zA-Z]/,"First name should have alphabetical characters only" ],
    },

    lastName:{
        type:String, 
        required:[true,"Last name is required"],
        match:[/^[a-zA-Z]/,"Last name should have alphabetical characters only" ],
    },

    age:{
        type:Number,
        required:[true,"Age is required"],
        match:/^[0-9]/,
        min:[21,"minimum age is 21"],
        max:[90,"maximum age is 90"],
        trim:true

    },

    email:{
        type:String,
        required:[true,"Email is required."],
        match:[/^[a-zA-Z]/,"Please enter a valid email address."], 
        unqiue:[true, "This email already exists."],
        trim:true
    },

    password:{
        type:String,
        required:[true,"Password is required."],
        match:[/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,"Please enter a valid password where it should have at least one capital letter, one small letter, one number, one symbol and no spaces."], 
        trim:true
    },

    phone:{
        type:String,
        required:[true,"Phone number is required." ],
        match:[/^(?:\+20|20)?0?1[0125]\d{8}$/,"Please enter a valid egyptian phone number."],
        unqiue:true,
        minLength:[11,"only 11 digits allowed for agyptian phone numbers."],
        trim:true
    },

    nationalID:{
        type:String,
        required:[true, "Egyptian National ID is required."],
        match:[/^([23])(?:\d{2})(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])(?:\d{6})$/,"Please enter a valid Egyptian National ID."],
        unique:[true,"This National ID already exists."],
        trim:true
    }

   /*appliances*/ 

});
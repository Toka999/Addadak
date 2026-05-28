const mongoose=require("mongoose");
const bcrypt=require("bcrypt");

const userSchema= new mongoose.Schema({
    firstName:{
        type:String,
        match:[/^[a-zA-Z]/,"First name should have alphabetical characters only" ],
    },

    lastName:{
        type:String, 
        match:[/^[a-zA-Z]/,"Last name should have alphabetical characters only" ],
    },

    age:{
        type:Number,
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
        match:[/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&'%])[A-Za-z\d@$!%*?&'%]{8,}$/,"Please enter a valid password where it should have at least one capital letter, one small letter, one number, one symbol and no spaces."], 
        trim:true
    },

    


    phone:{
        type:String,
        match:[/^(?:\+20|20)?0?1[0125]\d{8}$/,"Please enter a valid egyptian phone number."],
        unqiue:[true,"this phone number already exists"],
        minLength:[11,"only 11 digits allowed for agyptian phone numbers."],
        trim:true
    },

    nationalID:{
        type:String,
        match:[/^([23])(?:\d{2})(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])(?:\d{6})$/,"Please enter a valid Egyptian National ID."],
        unique:[true,"This National ID already exists."],
        trim:true
    },

    charged:{
        type:Number,
        trim:true
    },

    currentBalance:{
        type:Number,
        trim:true
    },

   //to be edited

},{timestamps:true});


userSchema.pre("save",async function(){
    if(!this.isModified("password"))return 
     this.password=await bcrypt.hash(this.password,11);
     
});

userSchema.methods.checkPassword=async function (pass){
    let check=await bcrypt.compare(pass,this.password);
    return check;
}



const User=mongoose.model("User",userSchema);

module.exports=User;
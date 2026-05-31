import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

const Register=()=>{

    const {register, handleSubmit, formState:{errors}, reset, watch}=useForm();
    const navigate=useNavigate();

    interface inputs{

        class:string,
        for:string,
        label:string,
        type:string,
        id:string,
        obj:any
    }

    const fields:Array<object>=[

        {class:"firstName",for:"firstName",label:"First Name",type:"text" ,id:"firstName",obj:{required:"First name is required", pattern:{value:/^[a-zA-Z]/,message:"First Name accepts letters only"} }},
        {class:"lastName",for:"lastName",label:"Last Name",type:"text" ,id:"lastName",obj:{required:"Last name is required", pattern:{value:/^[a-zA-Z]/,message:"Last Name accepts letters only"} }},
        {class:"age",for:"age",label:"Age",type:"number" ,id:"age",obj:{required:"Age is required", min:{value:21,message:"Minimum age is 21"}, max:{value:90, message:"Maximum age is 90"} }},
        {class:"email",for:"email",label:"Email",type:"email" ,id:"email",obj:{required:"Email is required", pattern:{value:/^[a-zA-Z]/,message:"Please enter a valid email format"}}},
    ];

    const gotoProfile=()=>{
        navigate("/user/profile");
    }
    
    return (
        <></>
        /*
        <section className='border'>
        
            <h2>Create your own account and track your meters</h2>
            <form action="post" onSubmit={handleSubmit(gotoProfile)}>

                <div className="firstName">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" {...register()}/>
                </div>

                <div className="lastName">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" {...register()}/>
                </div>

                <div className="age">
                    <label htmlFor="age">Age</label>
                    <input type="number" id="age" {...register()}/>
                </div>

                <div className="email">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" {...register()}/>
                </div>

                <div className="password">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password"{...register()} />
                </div>

                <div className="confirm">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" id="confirm"{...register("",{required:true})} />
                </div>

                <div className="phone">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" {...register("",{required:true})}/>
                </div>

                <div className="id">
                    <label htmlFor="id" >National ID</label>
                    <input type="text" id="id" {...register("id",{required:true})}/>
                </div>

                
            </form>

            
            
        </section>
        */
    );
}

export default Register;
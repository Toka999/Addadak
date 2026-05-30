import Logo from "../Logo";
import { NavLink } from "react-router-dom";

const RootHeader=()=>{
    return(
        <header className="flex flex-row
         justify-between align-center
         border-b border-secondary-purple
         shadow-lg px-30  py-4
         sticky top-0 z-50 backdrop-blur-sm bg-white/40">
            <Logo></Logo>
            <div className="buttons flex flex-row gap-20 ">
                <button className="shadow-md
                 bg-my-white
                 border border-secondary-purple
                 w-20 h-10 m-auto 
                 rounded-lg 
                 text-secondary-purple font-bold
                 hover:bg-secondary-purple
                 hover:text-my-white
                 hover:cursor-pointer
                 duration-300">
                    <NavLink to="/user/login">Login</NavLink>
                </button>

                <button className="shadow-md
                 w-20 h-10
                 m-auto px-2 
                 bg-secondary-purple 
                 rounded-lg 
                 text-my-white font-bold
                 hover:bg-my-white
                 hover:border
                 hover:border-secondary-purple
                 hover:text-secondary-purple 
                 hover:cursor-pointer
                 duration-300">
                    <NavLink to="/user/register">Sign Up</NavLink>
                    
                </button>
            </div>


        </header>

    );
}
export default RootHeader;
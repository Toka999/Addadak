import SpeedoMeter from "../assets/SpeedoMeter.gif"

const RootHeader=()=>{
    return(
        <header className="flex border-b border-secondary-purple shadow-lg flex-row justify-between px-30 align-center py-4">
            <div className="logo flex flex-row items-center gap-4 ">
                <img src={SpeedoMeter} alt="" className="mb-3" width={65}/>
                <h2 className="font-bold text-shadow-lg text-2xl text-secondary-purple"><span className="text-3xl">ع</span>addadak</h2>
                
            </div>
            <div className="buttons flex flex-row gap-20 ">
                <button className="shadow-md
                bg-my-white
                 border border-secondary-purple
                 w-20 h-10 m-auto 
                 rounded-lg 
                 text-secondary-purple font-bold
                 hover:bg-secondary-purple
                 hover:text-my-white
                 hover:cursor-pointer">Login</button>
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
                 hover:cursor-pointer">Sign Up</button>
            </div>


        </header>

    );
}
export default RootHeader;
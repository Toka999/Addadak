import SpeedoMeter from "../assets/SpeedoMeter.gif"

const Logo=()=>{
    return (
        <div className="logo flex flex-row items-center gap-4 ">
                <img src={SpeedoMeter} alt="" className="mb-3" width={65}/>
                <h2 className="font-bold text-shadow-lg text-2xl text-secondary-purple">
                    <span className="text-3xl">ع</span>addadak
                </h2>
                
        </div>
    );
}

export default Logo;
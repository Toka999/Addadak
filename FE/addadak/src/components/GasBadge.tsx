import Gas from "../assets/Gas.png"
const GasBadge=()=>{
    return(
    <div className="rounded-full bg-secondary-purple hover:-translate-y-6 duration-300 ease-in-out w-30 h-30 shadow-gas-yellow shadow-lg flex items-center ps-2 justify-center">
        <img src={Gas} alt="" width={95}  />
    </div>
    );
}
export default GasBadge;

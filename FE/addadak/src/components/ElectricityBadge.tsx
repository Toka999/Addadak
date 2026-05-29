import spark from "../assets/spark.png"
const ElectricityBadge=()=>{
    return(
    <div className="rounded-full hover:-translate-y-6 duration-300 ease-in-out bg-secondary-purple w-30 shadow-electric-cyan shadow-lg">
        <img src={spark} alt="" />
    </div>
    );
}
export default ElectricityBadge;

import RootHeader from "../components/RootHomeComp/RootHeader";
import { Outlet } from "react-router-dom";

const RootHome=()=>{
    return(
        <>
            <RootHeader/>
            <Outlet></Outlet>
      
        </>

    );
}
export default RootHome;
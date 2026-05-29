interface CardsInfo{
    children:React.ReactNode;
    title:string;
    desc:string;
    border:string;
}

const HomeCards:React.FC<CardsInfo>=({children,title,desc,border})=>{
    return(
        <div className={`card  hover:border-${border} hover:border-1
         flex flex-col 
         text-center 
         items-center
         w-85 bg-white/40
         border shadow-lg
         border-secondary-purple
         py-7 px-4 mb-5 gap-5` }>
            <div className="bgIcon rounded-full bg-secondary-purple w-40 h-40 flex justify-center items-center">
                {children}
            </div>
            <div className="text">
                <h2 className="font-bold text-xl mb-2">{title}</h2>  
                <p>{desc}</p>
            </div>


        </div>
    );
}
export default HomeCards;
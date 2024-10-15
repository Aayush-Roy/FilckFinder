
import notfound from "/404.gif"
const Notfound=()=>{
    return(
        <div className="flex justify-center items-center h-screen w-screen bg-black">
            <img className="h-[60%] object-cover" src={notfound} alt="" />
        </div>
    )
}

export default Notfound;
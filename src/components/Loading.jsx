
import loader from "/loader.gif"
const Loading=()=>{
    return(
        <div className="flex justify-center items-center h-screen w-screen bg-black">
            <img className="h-[60%] object-cover" src={loader} alt="" />
        </div>
    )
}

export default Loading;
import React from 'react'
import ReactPlayer from "react-player";
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Notfound from '../Notfound';

function Trailer() {
  const{pathname}=useLocation()
  const navigate = useNavigate()

  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideo = useSelector(state=>state[category].info.videos)
  console.log(ytvideo);
  return  (
    <div className='top-0 left-0 z-[100] bg-[rgba(0,0,0,0.9)] absolute w-screen h-screen flex items-center justify-center'>
        <Link onClick={()=>navigate(-1)}
         className="absolute right-[5%] top-[5%] text-3xl text-white hover:text-[#6556cd] ri-close-fill"></Link>
         {ytvideo ? ( <ReactPlayer
         controls
      height={600}
      width={1200}
      url={`https://www.youtube.com/watch?v=${ytvideo.key}`}/>):(Notfound)
      }
     
    </div>
  )
}

export default Trailer

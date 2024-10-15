import axios from '../../utils/axios';
import React, { useEffect } from 'react'
import {Link} from "react-router-dom";
function Sidenav() {
 
  return (
    <div className='w-[20%] h-full  border-r-2 border-zinc-200 px-10 py-5 '>
        <h1 className='text-2xl text-white font-bold'>
        <i className="ri-tv-fill text-[#6556cd] mr-2"></i>
        <span>FlickFinder</span>
        </h1>      

        <nav className='flex flex-col text-zinc-400 text-xl gap-3'>
          <h1 className='text-white font-semibold text-xl my-5 mt-10'>New Feeds</h1>
          <Link to="/trending" className='hover:bg-[#6556cd] hover:text-white rounded-lg duration-300 p-5'><i class="ri-fire-fill"></i> Trending</Link>
          <Link to="/popular" className='hover:bg-[#6556cd] hover:text-white rounded-lg duration-300 p-5'><i class="ri-bard-fill"></i> Popular</Link>
          <Link to="/movie" className='hover:bg-[#6556cd] hover:text-white rounded-lg duration-300 p-5'><i class="ri-movie-2-fill"></i> Movies</Link>
          <Link  to="/tv" className='hover:bg-[#6556cd] hover:text-white rounded-lg duration-300 p-5'><i class="ri-tv-2-fill"></i> Tv Shows</Link>
          <Link to="/person" className='hover:bg-[#6556cd] hover:text-white rounded-lg duration-300 p-5'><i class="ri-group-fill"></i> People</Link>
         
        </nav>

        <hr className='border-none h-[1px] bg-zinc-400'/>

        <nav className='flex flex-col text-zinc-400 text-xl gap-3'>
          <h1 className='text-white font-semibold text-xl my-5 mt-10'>Website Information</h1>     
          <Link to="/about" className='hover:bg-[#6556cd] hover:text-white rounded-lg duration-300 p-5'><i class="ri-information-2-fill"></i> About</Link>
          <Link to="/contact" className='hover:bg-[#6556cd] hover:text-white rounded-lg duration-300 p-5'><i class="ri-phone-fill"></i> Contact</Link>
        </nav>

    </div>
  )
}

export default Sidenav

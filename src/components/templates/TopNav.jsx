import axios from '../../utils/axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const noimage = "/no_image.jpg";

function TopNav() {
  const [query,setQuery] = useState("");
  const[searches,setsearches]=useState(null);
//   console.log(query);
  const GetSearches = async()=>{
    try{
      const {data} = await axios.get(`/search/multi?query=${query}`)
      setsearches(data.results)
    }catch(err)
    {
      console.log(err)
    }
  }

  useEffect(()=>{
    GetSearches();
  },[query])
  // console.log(searches);
  return (
    <div className='w-[80%] h-[10vh] flex mx-auto items-center relative'>
      <i className="text-3xl text-zinc-400 ri-search-line"></i>
      <input
      onChange={(e)=>setQuery(e.target.value)}
      value={query}
    className='  w-[50%] outline-none text-zinc-200 mx-10 p-5 text-xl border-none bg-transparent' type="text" placeholder='search anything' />

        {query.length>0 && <i 
        onClick={()=>setQuery("")}
        className="text-3xl text-zinc-400 ri-close-line "></i>}
      

    <div className='z-[100] absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[100%] left-[6%] overflow-auto bg-zinc-200'>
       {searches && searches.map((s,i)=>
       <Link
       to={`/${s.media_type}/details/${s.id}`}
       key={i} className='hover:text-black hover:bg-zinc-300 duration-300 inline-block text-zinc-600 font-semibold w-full p-10 flex justify-start items-center border-b-2 border-zinc-100'>
       <img
       className='w-[10vh] h-[10vh] object-cover rounded mr-10'
       src={s.backdrop_path || s.profile_path ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}`:noimage
       }  
       alt="" />


       <span>{s.title || s.name || s.original_name || s.original_title}</span>
       </Link>
    )}
       
       
      
       

    </div>

    </div>
  )
}

export default TopNav

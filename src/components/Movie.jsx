import React from 'react'

import axios from '../utils/axios';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';
import Cards from './templates/Cards';
import Dropdown from './templates/Dropdown';
import TopNav from './templates/TopNav';
function Movie() {
    const navigate = useNavigate()
    const[category,setcategory]=useState("now_playing");
  const[movie,setmovie]=useState([]);
  const[page,setpage] = useState(1)
  const[hasmore,sethasmore]=useState(true)

  document.title = "Movie " + category.toLocaleUpperCase();
  const GetMovie= async()=>{
    try{
      const {data} = await axios.get(`/movie/${category}?page=${page}`)
      // console.log(data)
      // settrending(data.results);
      if(data.results.length>0)
      {
        setmovie((prev)=>[...prev,...data.results])
        setpage(page+1);
      }else{
        sethasmore(false)
      }
    }catch(err)
    {
      console.log(err)
    }
  }

  const refrehHandler=async()=>{
    if(movie.length===0)
    {
      GetMovie();
    }else{
      setpage(1);
      setmovie([]);
      GetMovie();
    }
  }

  useEffect(()=>{
    
    refrehHandler();
  },[category])

  return  (
    movie ? (
        <div className='px-[5%] h-screen w-screen overflow-hidden overflow-y-auto'>
          <div className='w-full flex items-center justify-between'>
           
            <h1 className='text-2xl font-semibold text-zinc-400'>
            <i onClick={()=>navigate(-1)} className="hover:text-[#6556cd] ri-arrow-left-line"></i> Movie ( <small className='text-md text-zinc-400'>{category}</small>)
            </h1>
            <div className='flex items-center w-[80%]'>
            <TopNav/>
            <Dropdown title="Category" options={["popular","top_rated","upcoming","now_playing"]} func={(e)=>setcategory(e.target.value)}/>
            <div className='w-[2%]'></div>
          
    
            </div>
        </div>
        <InfiniteScroll
         dataLength={movie.length} 
         next={GetMovie()}
         hasMore={hasmore}
         loader={<h4>Loading...</h4>}>
    
          <Cards data={movie} title="movie"/>
        </InfiniteScroll>
        </div>
      ) :<Loading/>
  )
}

export default Movie

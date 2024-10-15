import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import TopNav from './templates/TopNav'
import Dropdown from './templates/Dropdown'
import axios from '../utils/axios';
import Cards from './templates/Cards';
import Loading from './Loading';
import Skeleton from 'react-loading-skeleton'
import InfiniteScroll from 'react-infinite-scroll-component';
function Trending() {
  
  const[category,setcategory]=useState("all");
  const[duration,setduration]=useState("day");
  const[trending,settrending]=useState([]);
  const[page,setpage] = useState(1)
  const[hasmore,sethasmore]=useState(true)

  document.title = "Trending " + category.toLocaleUpperCase();

  const GetTrending = async()=>{
    try{
      const {data} = await axios.get(`/trending/${category}/${duration}?page=${page}`)
      // console.log(data)
      // settrending(data.results);
      if(data.results.length>0)
      {
        settrending((prev)=>[...prev,...data.results])
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
    if(trending.length===0)
    {
      GetTrending();
    }else{
      setpage(1);
      settrending([]);
    }
  }

  useEffect(()=>{
    // GetTrending();
    refrehHandler();
  },[category,duration])

  // console.log(trending);

  const navigate = useNavigate()
  return trending ? (
    <div className='px-[5%] h-screen w-screen overflow-hidden overflow-y-auto'>
      <div className='w-full flex items-center justify-between'>
       
        <h1 className='text-2xl font-semibold text-zinc-400'>
        <i onClick={()=>navigate(-1)} className="hover:text-[#6556cd] ri-arrow-left-line"></i>    Trending
        </h1>
        <div className='flex items-center w-[80%]'>
        <TopNav/>
        <Dropdown title="Category" options={["movie","tv","all"]} func={(e)=>setcategory(e.target.value)}/>
        <div className='w-[2%]'></div>
        <Dropdown title="Duration" options={["week","day"]} func={(e)=>setduration(e.target.value)}/>

        </div>
    </div>
    <InfiniteScroll
     dataLength={trending.length} 
     next={GetTrending()}
     hasMore={hasmore}
     loader={<h4><Skeleton count={3}/></h4>}>

      <Cards data={trending} title={category}/>
    </InfiniteScroll>
    </div>
  ) :<Loading/>
}

export default Trending

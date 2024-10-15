import axios from '../utils/axios';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';
import Cards from './templates/Cards';
import Dropdown from './templates/Dropdown';
import TopNav from './templates/TopNav';
function Tvshow() {
    const navigate = useNavigate()
    const[category,setcategory]=useState("airing_today");
  const[tv,settv]=useState([]);
  const[page,setpage] = useState(1)
  const[hasmore,sethasmore]=useState(true)

  document.title = "Movie " + category.toLocaleUpperCase();
  const GetTv= async()=>{
    try{
      const {data} = await axios.get(`/tv/${category}?page=${page}`)
      console.log(data)
      // settrending(data.results);
      if(data.results.length>0)
      {
        settv((prev)=>[...prev,...data.results])
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
    if(tv.length===0)
    {
      GetTv();
    }else{
      setpage(1);
      settv([]);
    }
  }

  useEffect(()=>{
    
    refrehHandler();
  },[category])
  return (
    tv ? (
        <div className='px-[5%] h-screen w-screen overflow-hidden overflow-y-auto'>
          <div className='w-full flex items-center justify-between'>
           
            <h1 className='text-2xl font-semibold text-zinc-400'>
            <i onClick={()=>navigate(-1)} className="hover:text-[#6556cd] ri-arrow-left-line"></i> Tv ( <small className='text-md text-zinc-400'>{category}</small>)
            </h1>
            <div className='flex items-center w-[80%]'>
            <TopNav/>
            <Dropdown title="Category" options={["on_the_air","popular","top_rated","airing_today"]} func={(e)=>setcategory(e.target.value)}/>
            <div className='w-[2%]'></div>
          
    
            </div>
        </div>
        <InfiniteScroll
         dataLength={tv.length} 
         next={GetTv()}
         hasMore={hasmore}
         loader={<h4>Loading...</h4>}>
    
          <Cards data={tv} title="tv"/>
        </InfiniteScroll>
        </div>
      ) :<Loading/>
  )
}

export default Tvshow

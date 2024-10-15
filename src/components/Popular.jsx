
import axios from '../utils/axios';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';
import Cards from './templates/Cards';
import Dropdown from './templates/Dropdown';
import TopNav from './templates/TopNav';

function Poular() {
    
    const navigate = useNavigate()
    const[category,setcategory]=useState("movie");
  const[popular,setpopular]=useState([]);
  const[page,setpage] = useState(1)
  const[hasmore,sethasmore]=useState(true)

  document.title = "Popular " + category.toLocaleUpperCase();
  const GetPopular= async()=>{
    try{
      const {data} = await axios.get(`${category}/popular?page=${page}`)
      console.log(data)
      // settrending(data.results);
      if(data.results.length>0)
      {
        setpopular((prev)=>[...prev,...data.results])
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
    if(popular.length===0)
    {
      GetPopular();
    }else{
      setpage(1);
      setpopular([]);
    }
  }

  useEffect(()=>{
    
    refrehHandler();
  },[category])



  return (
    popular ? (
        <div className='px-[5%] h-screen w-screen overflow-hidden overflow-y-auto'>
          <div className='w-full flex items-center justify-between'>
           
            <h1 className='text-2xl font-semibold text-zinc-400'>
            <i onClick={()=>navigate(-1)} className="hover:text-[#6556cd] ri-arrow-left-line"></i> Popular
            </h1>
            <div className='flex items-center w-[80%]'>
            <TopNav/>
            <Dropdown title="Category" options={["movie","tv"]} func={(e)=>setcategory(e.target.value)}/>
            <div className='w-[2%]'></div>
          
    
            </div>
        </div>
        <InfiniteScroll
         dataLength={popular.length} 
         next={GetPopular()}
         hasMore={hasmore}
         loader={<h4>Loading...</h4>}>
    
          <Cards data={popular} title={category}/>
        </InfiniteScroll>
        </div>
      ) :<Loading/>
  )
}

export default Poular

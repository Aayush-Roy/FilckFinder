import axios from '../utils/axios';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';
import Cards from './templates/Cards';
import TopNav from './templates/TopNav';

function People() {
    const navigate = useNavigate()
    const[category,setcategory]=useState("popular");
  const[person,setperson]=useState([]);
  const[page,setpage] = useState(1)
  const[hasmore,sethasmore]=useState(true)
  document.title = "Movie " + category.toLocaleUpperCase();
  const GetPerson= async()=>{
    try{
      const {data} = await axios.get(`/person/${category}?page=${page}`)
      console.log(data)
      // settrending(data.results);
      if(data.results.length>0)
      {
        setperson((prev)=>[...prev,...data.results])
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
    if(person.length===0)
    {
      GetPerson();
    }else{
      setpage(1);
      setperson([]);
    }
  }

  useEffect(()=>{
    
    refrehHandler();
  },[category])
  return (
    person ? (
        <div className='px-[5%] h-screen w-screen overflow-hidden overflow-y-auto'>
          <div className='w-full flex items-center justify-between'>
           
            <h1 className='text-2xl font-semibold text-zinc-400'>
            <i onClick={()=>navigate(-1)} className="hover:text-[#6556cd] ri-arrow-left-line"></i> People 
            </h1>
            <div className='flex items-center w-[80%]'>
            <TopNav/>
           
            <div className='w-[2%]'></div>
          
    
            </div>
        </div>
        <InfiniteScroll
         dataLength={person.length} 
         next={GetPerson}
         hasMore={hasmore}
         loader={<h4>Loading...</h4>}>
    
          <Cards data={person} title="person"/>
        </InfiniteScroll>
        </div>
      ) :<Loading/>
  )
}

export default People


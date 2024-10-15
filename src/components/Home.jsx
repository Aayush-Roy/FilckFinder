import React, { useEffect, useState } from 'react'
import Sidenav from './templates/Sidenav';
import TopNav from './templates/TopNav';
import axios from '../utils/axios' ;
import Header from './templates/Header';
import HorizontalCards from './templates/HorizontalCards';
import Dropdown from './templates/Dropdown';
import Loading from './Loading';
function Home() {
    document.title = "Home Page";
    const[wallpaper,setwallpaper]=useState(null)
    const[trending,settrending]=useState(null)

  const[category,setcategory]=useState("all")
    const GetHeaderWallpaper = async()=>{
      try{
        const {data} = await axios.get(`/trending/all/day`)
        let randomdata = data.results[Math.floor(Math.random()*data.results.length)];
        setwallpaper(randomdata);
      }catch(err)
      {
        console.log(err)
      }
    }


    const GetTrending = async()=>{
      try{
        const {data} = await axios.get(`/trending/${category}/day`)
        // console.log(data)
        settrending(data.results);
      }catch(err)
      {
        console.log(err)
      }
    }

    useEffect(()=>{
      GetTrending();
      !wallpaper && GetHeaderWallpaper();
    },[category])

  return wallpaper && trending ? (
    <>
    <Sidenav/>
    <div className='w-[80%] h-full overflow-auto overflow-x-hidden'>
    <TopNav/>
    <Header data={wallpaper}/>
    <div className='p-5 flex justify-between'>
        <h1 className='text-3xl font-semibold text-zinc-400'>Trending</h1>

        <Dropdown title="Filter" options={['tv','movie','all']} func={(e) => setcategory(e.target.value)}/>


        </div>
    <HorizontalCards data={trending}/>
    </div>
    </>
  ):<Loading/>

}

export default Home

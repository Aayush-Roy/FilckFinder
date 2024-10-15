import React, { useEffect } from "react"
import {useDispatch, useSelector} from "react-redux";
import {Link, Outlet, useLocation, useNavigate, useParams} from "react-router-dom";
import Loading from "./Loading";
import { asyncloadtv, removetv } from "../store/actions/tvActions";
import HorizontalCards from "./templates/HorizontalCards";

function TvDetails() {
  const {pathname} = useLocation()
  const {info} = useSelector((state)=>state.tv)
  const navigate = useNavigate()
  const {id} = useParams(); 
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(asyncloadtv(id))
    return ()=>{
      dispatch(removetv())
    }
  },[id]);
  return info ? (<div 
    style={{
      background:`linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.6),rgba(0,0,0,0.8)),url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path })`,
      backgroundSize: 'cover', // Ensure the image covers the entire area
  backgroundPosition: 'center'
      ,}}
          className="relative h-full w-screen px-[10%] ">
            {/* part 1 navigation */}
          <nav className="h-[10vh] items-center w-full text-zinc-200 flex gap-10 text-xl">
          <Link onClick={()=>navigate(-1)} className="hover:text-[#6556cd] ri-arrow-left-line"></Link>
          <a target="_blank" href={info.detail.homepage}><i class="ri-earth-fill"></i></a>
          <a  target="_blank" href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i class="ri-external-link-fill"></i></a>
          <a target="_blank" href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}>imdb</a>
          </nav>
  
          {/* part 2 poster and details */}
          <div className="w-full flex">
          <img 
            className='shadow-[8px_17px_38px_2px_rgba(0,0,0,0.4)] h-[50vh] object-cover'
            src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path || info.detail.backdrop_path }`} alt="" />
            
  
            <div className="content ml-[5%] text-white">
            <h1 className='text-5xl font-black text-white'>
          {info.detail.title || info.detail.name || info.detail.original_name || info.detail.original_title}
            <small
            className="text-2xl font-bolf text-zinc-300"
            >({info.detail.first_air_date && info.detail.first_air_date.split("-")[0]})</small>
            </h1>
  
            <div className="flex text-zinc-200 items-center mt-3 mb-5  gap-x-5">
            {
            <span className=' p-6 bottom-[25%] text-xl  font-bold text-white h-[5vh] p-5 w-[5vh] bg-yellow-500 rounded-full flex justify-center items-center'>
            {(info.detail.vote_average*10).toFixed()} <sup>%</sup> 
          </span>
            }
            <h1 className="w-[60px] leading-6 text-2xl font-semibold">User Score</h1>
            <h1>{info.detail.first_air_date}</h1>
            {/* <h1>{info.detal.genres && info.detail.genres.map((g)=>g.name).join(",")}</h1> */}
            {/* <h1>{info.detail.runtime}min</h1> */}
            </div>
  
            <h1 className="text-xl text-zinc-200 italic font-semibold">{info.detail.tagline}</h1>
            <h1 className="text-2xl mb-3 mt-5">Overview</h1>
            <p>
            {info.detail.overview}
            </p>
  
            <h1 className="text-2xl mb-3 mt-5">tv Translated</h1>
            <p className="mb-10">
            {info.translations.join(", ")}
            </p>
  
            <Link  className="hover:bg-green-500 duration-300 mt-5 p-5 bg-green-600 rounded-lg " to={`${pathname}/trailer`}>
            <i class="text-lg mr-2  ri-play-circle-line"></i>Play Trailer
            </Link>
  
            </div>
  
          </div>
            
            {/* part 3 */}
          <div className="w-[80%] mt-10 flex flex-col gap-y-5">  
          
            {info.watchproviders && info.watchproviders.flatrate && 
            (<div className="flex gap-x-10 text-white items-center">
              <h1>Available on Platforms</h1>
                 {info.watchproviders.flatrate.map((w,i)=> (<img 
                 key={i}
                 title={w.provider_name}
              className="w-[5vh] h-[5vh] object-cover rounded-md"
              src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} alt="" /> ))
            }
            </div> )
           
  }
  
  {info.watchproviders && info.watchproviders.rent && 
            (<div className="flex gap-x-10 text-white items-center">
              <h1>Available on Rent</h1>
                 {info.watchproviders.rent.map(w=> (<img 
                 title={w.provider_name}
              className="w-[5vh] h-[5vh] object-cover rounded-md"
              src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} alt="" /> ))
            }
            </div> )
           
  }
            
  {info.watchproviders && info.watchproviders.buy && 
            (<div className="flex gap-x-10 text-white items-center">
              <h1>Available to Buy</h1>
                 {info.watchproviders.buy.map(w=> (<img 
                 title={w.provider_name}
              className="w-[5vh] h-[5vh] object-cover rounded-md"
              src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} alt="" /> ))
            }
            </div> )
           
  }         
  </div>

      {/* part 4 series */}
    <h1 className="text-3xl mt-10 text-white font-bold">Seasons</h1>
   <div className="w-[100%] flex overflow-y-hidden mb-5 p-5">
    {info.detail.seasons.map((s,i)=>(
      <div className="w-[15vh] m-[5%]">
       <img 
          className='shadow-[8px_17px_38px_2px_rgba(0,0,0,0.4)]  min-w-[14vw]  object-cover'
          src={`https://image.tmdb.org/t/p/original/${s.poster_path}`} alt="" />
          
          <h1 className='text-2xl text-zinc-400'>
        {s.title || s.name || s.original_name || s.original_title}

          </h1>
      </div>
    ))}
  
   </div>

    <hr className="mt-10 mb-3 border-none h-[1px] bg-zinc-300"/>
    {/* part 5 recommendation */}
    <h1 className="text-3xl mt-10 text-white font-bold">Recommendations & Similar stuff</h1>
    <HorizontalCards data={info.recommendations.length >0  ? info.recommendations : info.similar }/>
         <Outlet/>
    </div>) : <Loading/>
  }


export default TvDetails

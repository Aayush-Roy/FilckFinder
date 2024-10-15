import React from 'react'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import TvDetails from '../TvDetails'
import noimage from "/no_image.jpg";
function Cards({data, title}) {
    // console.log(data)
  return data ? (
    <div className='flex flex-wrap w-full px-[5%]'>
      <Link
                onClick={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    });
                }}
                className="fixed bottom-[5%] right-[5%] flex justify-center items-center w-[5vh] h-[5vh] bg-[#6556cd] rounded-lg"
            >
                <i className="text-white ri-arrow-up-line text-xl"></i>
            </Link>
      {data && data.map((c,i)=>(
        <Link to={`/${c.media_type || title}/details/${c.id}`} className='relative w-[25vh] mr-[5%] mb-[5%]' key={i}>
          <img 
          className='shadow-[8px_17px_38px_2px_rgba(0,0,0,0.4)] h-[40vh] object-cover'
          src={c.poster_path || c.backdrop_path || c.profile_path ?`https://image.tmdb.org/t/p/original/${c.poster_path || c.backdrop_path || c.profile_path}`:noimage} alt="" />
          <h1 className='text-2xl text-zinc-400'>
        {c.title || c.name || c.original_name || c.original_title}

          </h1>
          {c.vote_average && 
          <div className='absolute right-[-10%] p-6 bottom-[25%] text-xl  font-semibold text-white h-[5vh] p-5 w-[5vh] bg-yellow-500 rounded-full flex justify-center items-center'>
          {(c.vote_average*10).toFixed()} <sup>%</sup> 
        </div>
          }
          
        </Link>
      )
      )}
    </div>
  ):<Skeleton count={3}/>
}

export default Cards

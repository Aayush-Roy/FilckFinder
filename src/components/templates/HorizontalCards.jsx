import React from 'react'
import {Link} from "react-router-dom";
import noimage from "/no_image.jpg";
function HorizontalCards({data}) {
  return (
    <div className='w-[100%] flex overflow-y-hidden mb-5 p-5'>
      
      {data.map((data,i)=>(
        <Link
        to={`/${data.media_type}/details/${data.id}`}
        key={i} className='min-w-[15%] bg-zinc-900 mr-5 mb-5'>
          <img className='w-full h-[55%] object-cover' src={ data.backdrop_path || data.poster_path ? `https://image.tmdb.org/t/p/original/${data.backdrop_path || data.poster_path }`:noimage} alt="" />

          <div className='text-white p-3 h-[45%] overflow-y-scroll'>
           <h1
      className=' text-xl font-semibold '
      >{data && data.title || data.name || data.original_name || data.original_title}</h1>
      <p className=' leading-tight'>{data.overview.slice(0,30)}
        ... <span className='text-blue-400'>more</span>
      </p>
        </div>
    </Link>
      ))}
    </div>
 
  )
}

export default HorizontalCards

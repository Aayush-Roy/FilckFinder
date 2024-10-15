import React from 'react'
import { Link } from 'react-router-dom'

function Header({data}) {
  return(
    <div
    style={{
        background:`linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.6),rgba(0,0,0,0.8)),url(https://image.tmdb.org/t/p/original/${data.backdrop_path })`,
        backgroundSize: 'cover', // Ensure the image covers the entire area
    backgroundPosition: 'center'
        ,}}
        
    className='w-full h-[55vh] flex flex-col justify-end items-start p-[5%]'>
      <h1
      className='text-5xl font-black text-white w-[70%]'
      >{data.title || data.name || data.original_name || data.original_title}</h1>
      <p className='text-white w-[70%] mt-3 mb-3 leading-tight'>{data.overview.slice(0,200)}
        ... <Link to={`/${data.media_type}/details/${data.id}`} className='text-blue-400'>more</Link>
      </p>

      <p className='text-white'>
      <i className="text-yellow-500 ri-megaphone-fill"></i> {data.release_date || "No Information"}
      <i className="ml-5 text-yellow-500 ri-album-fill"></i> {data.media_type.toUpperCase()}
      </p>

      <Link
      to={`${data.media_type}/details/${data.id}/trailer`}
      className='bg-[#6556cd] px-5 py-2 rounded text-white  mt-5'>Watch Trailer</Link>
    </div>
  )
}

export default Header

import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Trending from "./components/Trending"
import Poular from "./components/Popular"
import Movie from "./components/Movie"
import Tvshow from "./components/Tvshow"
import People from "./components/People"
import About from "./components/About"
import Contact from "./components/Contact"
import Moviedetails from "./components/Moviedetails"
import TvDetails from "./components/TvDetails"
import PersonDetails from "./components/PersonDetails"
import Trailer from "./components/templates/Trailer"
import Notfound from "./components/Notfound"


function App() {
  return (
    <div className='bg-[#1f1e24] flex w-screen h-full '>
      
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/trending" element={<Trending/>}/>
      <Route path="/popular" element={<Poular/>}/>
      <Route path="/movie" element={<Movie/>}/>
      <Route path="/movie/details/:id" element={<Moviedetails/>}>
        <Route path="/movie/details/:id/trailer" element={<Trailer/>}/>
      </Route>
      <Route path="/tv" element={<Tvshow/>}/>
      <Route path="/tv/details/:id" element={<TvDetails/>}>
      <Route path="/tv/details/:id/trailer" element={<Trailer/>}/>
      </Route>
      <Route path="/person" element={<People />} />
                <Route path="/person/details/:id" element={<PersonDetails />} />
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="*" element={<Notfound/>}/>
    </Routes>

    </div>
  )
}

export default App

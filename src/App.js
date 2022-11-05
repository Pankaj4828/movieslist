
import { useEffect, useState } from 'react';
import Movielist from './component/Movielist';
import "./app.css"
import Moviesheading from './component/Moviesheading';
import Search from './component/Search';
import Addfavourite from "./component/Favorite"
function App() {
  const [movies, setmovies] = useState([])
  const [searchmovie, setsearchmovie] = useState("")
  const [fabrite, setfabrite] = useState([])
  const getmovies=async(searchmovie)=>{
    const url=`http://www.omdbapi.com/?s=${searchmovie}&apikey=ae550576`

    const response=await fetch(url);
    const responsjson=await response.json();
    if(responsjson.Search){
      setmovies(responsjson.Search)
    }
    
  }

  useEffect(()=>{
    getmovies(searchmovie);
  },[searchmovie])

 const Addfavourtemovie=(movie)=>{
  const newfav=[...fabrite,movie]
  setfabrite(newfav)
 }
  return (
    <>
    <div className='container-fluid movie-app' >
    <div className="row d-flex align-items-center mt-4 mb-4">
    <Moviesheading heading={movies} />
    <Search searchmovie={searchmovie}  setsearchmovie={setsearchmovie}/>
    </div>
    <div className='row'>
    <Movielist movies={movies} handlefavclick={Addfavourtemovie} />
    </div>
    <div className="row d-flex align-items-center mt-4 mb-4">
    <Moviesheading heading="heading" />
    <div className='row'>
    <Movielist movies={fabrite} handlefavclick={Addfavourtemovie} />
    </div>
    </div>
    </div>
      
    </>
  );
}

export default App;

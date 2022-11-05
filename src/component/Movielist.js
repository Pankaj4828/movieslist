import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
const Movielist = (props) => {
    // const Favoritecompo=props.Addfsvourites;
  return (
    <>
    {props.movies.map((movie,index)=>
     <div className='image-container d-flex justify-content-start m-3' id='new'>
        <img src={movie.Poster} alt="movie"/>
        <div className='overlay d-flex align-items-center justify-content-center'>
          <span onClick={()=>props.handlefavclick(movie)}>Addfavourite+</span>
        </div>
     </div>
    )}
    </>
  )
}

export default Movielist
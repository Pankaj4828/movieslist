import React from 'react'

const Search = (props) => {
  return (
    <div>
    <div className='col col-sm-4>'></div>
    <input type="text" className='"form-control' value={props.value} onChange={(event)=>{props.setsearchmovie(event.target.value)}} placeholder='serach movie..' />
    </div>
  )
}

export default Search
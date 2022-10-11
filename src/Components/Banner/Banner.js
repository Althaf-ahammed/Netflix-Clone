import React, { useEffect, useState } from 'react'
import axios from '../../axios';
import {imageUrl} from '../../constants/constants';
import { banner } from '../../urls';
import './Banner.css'


function Banner() {
  const [movie,setMovie] = useState()
  useEffect(()=>{
    axios.get(banner).then((response)=>{
      
      setMovie(response.data.results[Math.floor(Math.random() * 20)])
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div 
    style = {{backgroundImage:`url(${movie ? imageUrl+ movie.backdrop_path : ""})`}}
     className='banner'>
        <div className='content'>
            <div className='title'>{movie ? movie.title : ""}</div>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>{movie ? movie.overview : ""}</h1>
        </div>
    <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
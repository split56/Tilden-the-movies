import React from 'react'
import {AiOutlinePlayCircle,AiOutlineLike} from 'react-icons/ai'
import {BiAddToQueue} from 'react-icons/bi'
import apiConfig from '../../../api/apiConfig'
import './Slider.css'
function SliderItem({title,poster_path,overview,vote_average,original_language,vote_count,backdrop_path,original_name,type}) {
    const setVoteClass = (vote) => {
        if(vote>= 8) {
            return 'green'
        } else if (vote>=6){
            return 'orange'
        } else {
            return 'red'
        }
    }
  return (
    <>
                <img src={backdrop_path ? apiConfig.imgPath(backdrop_path) : ''} className='bg-image' alt={title}/>
                <div className='slide-movie-info'>
                    <div className='slide-left'>
                        <img src={backdrop_path ? apiConfig.imgPath(poster_path) : ''} className='slider-poster' alt=''/>
                    </div>
                    <div className='slide-right'>
                        <h1 className='poster-title'>{type==='movie'?title:original_name}</h1>
                        <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
            <span className='movie-lang'>Language : {original_language}</span> 
            <span className='movie-like'><AiOutlineLike/> : {vote_count}</span>
                        <p className='poster-desc'>{overview}</p>
                        <div className='btns'>
              <button className='btn play-btn'><AiOutlinePlayCircle/>Play</button>
              <button className='btn add-btn'><BiAddToQueue/>Add to favourite</button>
            </div>
                    </div>
                </div>
            </>
  )
}

export default SliderItem
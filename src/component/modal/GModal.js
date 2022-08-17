import React from 'react'
import { AiOutlineLike,AiOutlinePlayCircle} from 'react-icons/ai'
import {BiAddToQueue} from 'react-icons/bi'
import apiConfig from '../../api/apiConfig';
import './modal.css'
function GModal(props) {
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
    <div className='modal general-modal'>
      <img src={props.poster_path ? apiConfig.imgPath(props.poster_path) : ''} alt={props.title} className="movie-img"/>
          <div className='movie-des'>
            <h3 className='movie-name'>{props.title}</h3>
            <span className={`tag ${setVoteClass(props.vote_average)}`}>{props.vote_average}</span>
            <span className='movie-lang'>Language : {props.original_language}</span> 
            <span className='movie-like'><AiOutlineLike/> : {props.vote_count}</span>
            <p className='movie-dec'>
              Description : {props.overview}
            </p>
            <div className='btns'>
              <button className='btn play-btn'><AiOutlinePlayCircle/>Play</button>
              <button className='btn add-btn'><BiAddToQueue/>Add to favourite</button>
            </div>
        </div>
        <button className='modal-out' onClick={props.close}>X</button>
    </div>
  )
}

export default GModal
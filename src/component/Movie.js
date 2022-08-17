import React from 'react'
import Modal1 from './modal/Modal1';
import GModal from './modal/GModal';
import {FiMoreVertical} from 'react-icons/fi'
import {GrCircleInformation} from 'react-icons/gr'
import Popup from 'reactjs-popup';
import apiConfig from '../api/apiConfig';
import { Link } from 'react-router-dom';
import {category} from '../api/tmbdApi'
function Movie(props) {
  const link = '/' + category[props.category] + '/' + props.id
  return (
    <>
      <div className='movie' >
        <Link to={link}>
        <img src={props.poster_path ? apiConfig.imgPath(props.poster_path) : ''} alt={props.title} /></Link>
        <div className='movie-info'>
            <Popup modal trigger={<div className='info-icon'><GrCircleInformation/></div>} position="bottom center">
                {close => <Modal1 close={close} />}
            </Popup>
            <Popup modal trigger={<div className='more-icon'><FiMoreVertical/></div>} position="center center">
                {close =><GModal title={props.title ? props.title : props.original_name}
    poster_path = {props.poster_path} overview = {props.overview} vote_average = {props.vote_average} original_language={props.original_language} vote_count={props.vote_count} id = {props.id} close={close}/>}
            </Popup>
        </div>
      </div>
    </>
    
  )
}
export default Movie
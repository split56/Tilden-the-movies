import React from 'react'
import {HiOutlineInformationCircle} from 'react-icons/hi'
import { AiOutlineDownload,AiOutlineDislike,AiOutlineLike,AiOutlineHeart} from 'react-icons/ai'
import {IoIosRemoveCircleOutline,IoIosCloseCircleOutline} from 'react-icons/io'
import './modal.css'
import 'reactjs-popup/dist/index.css';
function Modal1({close}) {
  return (
    <div className='modal'>
      <ul className='modal-list'>
          <li className='ml-item'>
            <span>
              <HiOutlineInformationCircle/>
            </span>Episodes and Info
          </li>
          <li className='ml-item'>
            <span><AiOutlineDownload/></span>Download Episode
          </li>
          <li className='ml-item'>
            <span><AiOutlineDislike/></span>
            Not for me
          </li>
          <li className='ml-item'>
            <span><AiOutlineLike/></span>
            I like this
          </li>
          <li className='ml-item'>
            <span><AiOutlineHeart/></span>
            Love this !
          </li>
          <li className='ml-item'>
            <span><IoIosRemoveCircleOutline/></span>
            Remove From Row
          </li>
        </ul>
        <button className='modal-out' onClick={close}><IoIosCloseCircleOutline/></button>
    </div>
  )
}

export default Modal1
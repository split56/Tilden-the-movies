import React,{useState,useEffect, useRef} from 'react'
import {useParams} from 'react-router-dom'
import tmdbApi from '../../api/tmbdApi'
import './modal.css'
function MvModal(props) {
    const {category} = useParams()
    const [trailer,setTrailer] = useState([])
    useEffect(()=>{
        const getVids = async () => {
            const res = await tmdbApi.getVideos(category,props.id)
            setTrailer(res.results.slice(0,1))
        }
        getVids()
    },[category,props.id])
    return (
        <>
            {
                trailer.map((item,index)=>(<Video key={index} item={item}/>))
            }
        </>
  )
}

const Video = props => {
    const item = props.item
    const iframeRef = useRef(null)
    useEffect(()=>{
        const height = iframeRef.current.offsetWidth * 9 /16 + 'px'
        iframeRef.current.setAttribute('height',height)
    },[])
    return (
        <div className='video'>
            <div className='video-title'>
                <h2>{item.name ? item.name : item.original_name}</h2>
            </div>
            <iframe src={`https://www.youtube.com/embed/${item.key}`} 
            ref={iframeRef}
            width="100%"
            title='video'></iframe>
        </div>
    )
}

export default MvModal
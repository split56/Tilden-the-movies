import React,{useState,useEffect} from 'react'
import tmdbApi from '../../api/tmbdApi'
import apiConfig from '../../api/apiConfig'
import { useParams } from 'react-router-dom'
import {AiOutlinePlayCircle} from 'react-icons/ai'
import {BiAddToQueue} from 'react-icons/bi'
import Navbar from '../../component/header/Navbar'
import './detail.css'
import Cast from './Cast'
import Footer from '../../component/footer/Footer'
import Popup from 'reactjs-popup'
import MvModal from '../../component/modal/MvModal'
import MovieSection from '../../component/body/MovieSection'
function Detail() {
    const {category,id} = useParams()
    const [item,setItem] = useState(null)
    useEffect(()=>{
        const movieDetail = async () => {
            const response = await tmdbApi.detail(category,id,{params:{}})
            setItem(response)
        }
        movieDetail()
    },[category,id])
  return (
    <>
    <Navbar/>
        {
            item && (
                <>
                <div className='movie-banner' style={{backgroundImage:`url(${apiConfig.imgPath(item.backdrop_path)})`}}>
                </div>
                <div className='detail-movie-block'>
                        <img src={item.poster_path ? apiConfig.imgPath(item.poster_path) : ''} alt={item.title} className="detail-movie-img"/>
                     <div className='detail-movie-des'>
                        <h3 className='detail-movie-name'>{item.title?item.title:item.original_name}</h3>
                        <div className='genres'>
                            {
                              item.genres && item.genres.slice(0,5).map((genre,index)=>(<span key={index} className='genre'>{genre.name}</span>))
                            }
                        </div>
                        <p className='detail-movie-dec'>
                          Description : {item.overview}
                        </p>
                        <div className='detail-cast'>
                            <h2>Casts</h2>
                            <Cast id={item.id}/>
                        </div>
                        <div className='detail-btns'>
                          <Popup modal trigger={<button className='btn play-btn'><AiOutlinePlayCircle/>Play trailer</button>} position="center center">
                            {close => <MvModal id={item.id} close={close} />}
                          </Popup>
                          <button className='btn add-btn'><BiAddToQueue/>Add to favourite</button>
                        </div>
                      </div>
                </div>
                <div className='similar-section'>
                    <h2 className='similar-header'>Similar moives</h2>
                    <MovieSection category={category} type="similar" id={item.id}/>
                </div>
                </>
              )    
        }
    <Footer/>
    </>
  )
}

export default Detail
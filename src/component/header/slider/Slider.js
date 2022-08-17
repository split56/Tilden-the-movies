import React,{useEffect,useState} from 'react'
import SliderItem from './SliderItem';
import tmdbApi,{movieType, tvType} from '../../../api/tmbdApi'
import SwiperCore,{Autoplay} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
function Slider({type}) {
  const [sMovie,setSMovies] = useState([])
  useEffect(()=>{
    const getMovie = async () => {
      const params = {page:1}
      try{
        const response = (type === 'movie') ? await tmdbApi.getMoviesList(movieType.popular,{params}) : await tmdbApi.getTvList(tvType.popular,{params})
        setSMovies(response.results.slice(0,5))
      } catch {

      }
    }
    getMovie()
  },[type])

  
  SwiperCore.use([Autoplay])
  return (
    <div className=''>
      <Swiper grabCursor={true} slidesPerView={1} modules={[Autoplay]} spaceBetween={0}>
        {sMovie.length && sMovie.map((movie,index)=><SwiperSlide key={movie.id}>
          <SliderItem {...movie} type={type} index={index} key={movie.id} />
        </SwiperSlide>)}
      </Swiper>
    </div>
  )
}

export default Slider
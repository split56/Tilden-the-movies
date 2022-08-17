import React,{useState,useEffect} from 'react'
import {SwiperSlide,Swiper} from 'swiper/react'
import tmdbApi,{category} from '../../api/tmbdApi'
import Movie from '../Movie'
function MovieSection(props) {
  const [movie,setMovie] = useState([])
  useEffect(()=>{
    const getMovieList = async () => {
      let response = null
      const params = {}
      if(props.type !== 'similar') {
        switch(props.category) {
          case category.movie :
            response = await tmdbApi.getMoviesList(props.type,{params});
            break;
          default : 
            response = await tmdbApi.getTvList(props.type,{params})
        }
      } else {
        response = await tmdbApi.similar(props.category,props.id)
      }
      setMovie(response.results)
    }
    getMovieList()
  },[])
  return (
    <div className='movie-list'>
      <Swiper
      grabCursor={true}
      spaceBetween={10}
      slidesPerView={'auto'}>
        {
          movie.map((item,index) => (<SwiperSlide key={index}>
            <Movie {...item}  category={props.category}/>
            </SwiperSlide>))
        }
      </Swiper>
    </div>
  )
}

export default MovieSection
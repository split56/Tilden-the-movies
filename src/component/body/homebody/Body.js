import React from 'react'
import MovieSection from '../MovieSection'
import {category,movieType,tvType} from '../../../api/tmbdApi'
import './Body.css'
function Body() {
  return (
    <div className='container'>
          <div className='section'>
            <div className='section-headr'>
              <h2>Trending Movies</h2>
            </div>
            <MovieSection category={category.movie} type={movieType.popular}/>
          </div>
          <div className='section'>
            <div className='section-headr'>
              <h2>Top-rated Movies</h2>
            </div>
            <MovieSection category={category.movie} type={movieType.top_rated}/>
          </div>
          <div className='section'>
            <div className='section-headr'>
              <h2>Upcoming Movies</h2>
            </div>
            <MovieSection category={category.movie} type={movieType.upcoming}/>
          </div>
          <div className='section'>
            <div className='section-headr'>
              <h2>Trending Tv shows</h2>
            </div>
            <MovieSection category={category.tv} type={tvType.popular}/>
          </div>
           <div className='section'>
            <div className='section-headr'>
              <h2>Top-rated Tv shows</h2>
            </div>
            <MovieSection category={category.tv} type={tvType.top_rated}/>
          </div>
          <div className='section'>
            <div className='section-headr'>
              <h2>Airing Tv shows</h2>
            </div>
            <MovieSection category={category.tv} type={tvType.on_the_air}/>
          </div>
    </div>
  )
}

export default Body
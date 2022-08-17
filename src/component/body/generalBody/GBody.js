import React,{useState,useEffect} from 'react'
import tmdbApi,{category, movieType, tvType} from '../../../api/tmbdApi'
import { BiSearchAlt} from 'react-icons/bi'
import Movie from '../../Movie'
import './gGody.css'
function GBody(props) {
    const [movie,setMovie] = useState([])
    const [page, setPage] = useState(1);
    const [searchTerm,setSearchTerm] = useState('')
    const [totalPage, setTotalPage] = useState(0);
    const [search,setSearch] = useState(false)
    useEffect(()=>{
    const getMovieList = async (keyWord) => {
      
      let response = null
      if(keyWord === '') {
        const params = {}
        switch(props.category) {
          case category.movie :
            response = await tmdbApi.getMoviesList(movieType.upcoming,{params});
            break;
          default : 
            response = await tmdbApi.getTvList(tvType.popular,{params})
        }
      } else {
        const params = {
          query:keyWord
        } 
        response = await tmdbApi.search(props.category,{params})
        
      }
      setMovie(response.results)
      setTotalPage(response.total_pages)
    }
    getMovieList(searchTerm)
  },[searchTerm,props.category])
  const handleOnChange = (e) => {
    setSearchTerm(e.target.value)
  }
  const handleOnsubmit= (e) => {
    e.preventDefault()
    if(searchTerm) {

    }

  }
  const loadMore = async (keyWord) => {
    let response = null
    if(keyWord === '') {
        const params = {page: page + 1}
        console.log('un')
        switch(props.category) {
          case category.movie :
            response = await tmdbApi.getMoviesList(movieType.upcoming,{params});
            break;
          default : 
            response = await tmdbApi.getTvList(tvType.popular,{params})
        }
      } else {
        console.log('no un')
        const params = {page: page + 1,query:keyWord}
        response = await tmdbApi.search(props.category,{params})
      }
      setMovie([...movie,...response.results])
      setPage(page+1)
  }
  return (
    <div className='container'>
      <div className='movie-head'>
        <h2 className='movieList-title'>{props.title}</h2>
        {/* <MovieSearch category = {props.category} type={props.type} setMovie= {setMovie} setTotalPage={setTotalPage}/> */}
        <div className='search-box'>
          <div className='search-btn' onClick={()=>setSearch(!search)}>
          <BiSearchAlt/>
          </div>{search && <form onSubmit={handleOnsubmit}>
          <input className='search' type='text' placeholder='Search...' value={searchTerm} onChange={handleOnChange}/>
        </form>}
        </div>
      </div>
      <div className='movie-container'>
      {
        movie.length>0 &&
        movie.map((movie)=>(<Movie {...movie} category={props.category} key={movie.id}/>))
      }
    </div>
    {
      (page < totalPage) ? (<button className='btn show-more-btn' onClick={()=>loadMore(searchTerm)}>show more</button>
    ) : null
    }
    </div>
  )
}



export default GBody
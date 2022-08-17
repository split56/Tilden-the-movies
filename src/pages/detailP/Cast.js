import React,{useState,useEffect} from 'react'
import tmdbApi from '../../api/tmbdApi'
import apiConfig from '../../api/apiConfig'
import { useParams } from 'react-router-dom'
function Cast(props) {
    const {category} = useParams()
    const [casts,setCaset] = useState([])
    useEffect(()=>{
        const getCreds = async () => {
            const res = await tmdbApi.credits(category,props.id)
            setCaset(res.cast.slice(0,5))
        }
        getCreds()
    },[category,props.id])
    return (
        <div className='casts'>
        {
            casts.map((item,index)=>(
                <div key={index} className='cast-block'>
                    <div className='cast-img' style={{backgroundImage:`url(${apiConfig.posterImg(item.profile_path)})`}}></div>
                    <p className='cast-name'>{
                        item.name
                    }</p>
                </div>
            ))
        }
        </div>
    )
}

export default Cast
import React from 'react'
import HotItemCard from './HotItemCard'
import VideoCard from './VideoCard.js'
import '../styles/Videos.css'

const Videos = ({videos}) => {
  return (
    <div className='videos'>
        {
            videos.map((item , index)=>(
                <VideoCard index={index} key={item.image} image={item.image} name={item.name}/>
            ))
        }    
    </div>
  ) 
}

export default Videos
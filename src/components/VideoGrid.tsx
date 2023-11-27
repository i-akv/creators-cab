import React from 'react'
import Video from './Video'

const VideoGrid = () => {
  return (
    <div className='grid grid-cols-12 gap-3'>
                {[11,32,434,12,43,443,9823,2435,2435,54,5,523,45,2435,24542,35,245,42,5234,54,5,25,2345,24,542,5,234,523,45,252,5,2,52,2,890].map(item=>{
            return <Video />
        })}
    </div>
  )
}

export default VideoGrid
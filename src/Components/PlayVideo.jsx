import React from 'react'
import VideoCard from './VideoCard';
import { useLocation } from 'react-router-dom';

export default function PlayVideo(props) {
  var location = useLocation();
  var path = location.pathname.split("/");
  var id = path[path.length - 1];
  return (
    <div className='VideoPlayer dark:text-white flex gap-4 m-10'>
      <div className='flex-grow'>
        <iframe className='border-2 border-white mb-10 w-3/5 sm:w-full' width="840" height="360"
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}>
        </iframe>
        <div className='flex gap-5'>
          <p>Chanel_Name</p>
          <p>Likes</p>
          <p>Dislikes</p>
          <p>Watch List</p>
          <p>Subscribers</p>
        </div>
      </div>
      <div className='flex-initial'>
        <div className='inset-y-0 right-0'>
        {
            props.data && props.data.map((ele) => {
              return <VideoCard snippet={ele.snippet} id={ele.id} size_small={true}/>
            })
          }
        </div>
      </div>

    </div>
  )
}

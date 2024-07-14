import { React, useEffect, useState } from 'react'
import VideoCard from './VideoCard'

function HomePage(props) {
    
    return (
        <div className='container mx-auto'>
            <div className="grid grid-cols-4 gap-4">
                {props.data && props.data.map((ele) => {
                    return <VideoCard snippet={ele.snippet} id={ele.id}/>
                })}
            </div>
        </div>
    )
}

export default HomePage;
import { React,useContext } from 'react'
import VideoCard from './VideoCard'
import { dataContext } from '../App'

function HomePage() {
    let {data,setData} = useContext(dataContext)
    return (
        <div className='container mx-auto'>
            <div className="grid grid-cols-4 gap-4">
                {data.map((ele) => {
                    return <VideoCard snippet={ele.snippet} id={ele.id}/>
                })}
            </div>
        </div>
    )
}

export default HomePage;
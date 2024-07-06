import { React, useEffect, useState } from 'react'
import VideoCard from './VideoCard'

function HomePage(params) {
    var [data, setData] = useState({
        videos : [1,2,3,4,5]
    });
    useEffect(() => {
        fetchDataFormAPI();

    }, ["hello"])
    
    async function fetchDataFormAPI(){
        const url = 'https://youtube-v31.p.rapidapi.com/search?q=Kalki2898&part=snippet%2Cid&regionCode=US&maxResults=50&order=date';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'a9629a0a9fmshcf6fe740c639fb4p152916jsn3c309e332e12',
                'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
            }
        };
        return await fetch(url,options)
    }
    return (
        <div class="row row-cols-lg-3 g-2">
            {data.videos.map((ele) => {
                return (<VideoCard />)
            })}
        </div>
    )
}

export default HomePage;
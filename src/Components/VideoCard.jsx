import React from 'react'
import { useNavigate } from 'react-router-dom'

function VideoCard(props) {
    var navigate = useNavigate();
    function RedirectToPlayVideo(){
        navigate(`video/${props.id.videoId}`)
    }
    return (
        <div className="rounded-md shadow hover:shadow-lg m-2 border-2 border-white" onClick={RedirectToPlayVideo}>
            <div className="card" id={props.id.videoId}>
                <img src={props.snippet.thumbnails.high.url} className="card-img-top rounded-md" alt="..." />
                <div className="card-body">
                    <h5 className="card-title dark:text-white"><strong>{props.snippet.title.slice(0,30)}</strong></h5>
                    <p className="card-text dark:text-white">{props.snippet.description.slice(0,40)}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
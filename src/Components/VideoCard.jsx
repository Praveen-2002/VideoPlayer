import React from 'react'

function VideoCard(props) {
    function RedirectToPlayVideo(){
        window.url = "/PlayVideo";
    }
    return (
        <div className="col">
            <div className="card m-2" style={{"width": "18rem"}} id={props.id.videoId} onClick={RedirectToPlayVideo}>
                <img src={props.snippet.thumbnails.high.url} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.snippet.title.slice(0,35)}</h5>
                    <p className="card-text">{props.snippet.description.slice(0,45)}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
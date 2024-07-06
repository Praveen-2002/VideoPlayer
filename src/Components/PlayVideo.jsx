import React from 'react'

export default function PlayVideo(props) {
  return (
    <div>
        <iframe width="920" height="500" src={`https://www.youtube.com/embed/${props.id}`}>
        </iframe>
    </div>
  )
}

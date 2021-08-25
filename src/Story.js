import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Story.css"

function Story(props) {
    return (
        <div style={{backgroundImage: `url(${props.profile})`}} className="story">
            <Avatar className="story_avatar" src={props.src}/>
            <h4>{props.title}</h4>
        </div>
        
    )
}

export default Story

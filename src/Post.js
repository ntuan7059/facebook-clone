import { Avatar } from '@material-ui/core'
import { AccountCircle, ChatBubble, NearMe, ThumbUp } from '@material-ui/icons'
import ExpandMore from '@material-ui/icons/ExpandMore'
import React from 'react'
import "./Post.css"

function Post(props) {
    return (
        <div className="post">
            <div className="post_top">
                <Avatar src={props.profile}
                className="post_avatar"/>
                <div className="post_topInfor">
                    <h3>{props.userName}</h3>
                    <p>{new Date(props.timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>
            <div className="post_bottom">

                <p>{props.message}</p>
            </div>
            <div className="post_image">
                <img src={props.image} alt=""/>
            </div>
            <div className="post_options">
                <div className="post_option">
                    <ThumbUp/>
                    <p>Like</p>
                </div>
                <div className="post_option">
                    <ChatBubble/>
                    <p>Comment</p>
                </div>
                <div className="post_option">
                    <NearMe/>
                    <p>Share</p>
                </div>
                <div className="post_option">
                    <AccountCircle/>
                    <ExpandMore/>
                </div>
            </div>
        </div>
    )
}

export default Post

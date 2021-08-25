import React, { useEffect, useState } from 'react'
import "./Feed.css"
import MessageSender from './messageSender'
import Post from './Post'
import StoryRee from './StoryRee'
import db from "./firebase"

function Feed() {
    const [posts, setPosts]=useState([]);

    useEffect(() => {
        db.collection('posts')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) => ({ id: doc, data: doc.data()
            })))
        );
    },[])
    return (
        <div className="feed">
            <StoryRee/>
            {/*StoryReel*/}
            <MessageSender/>
            {/*MessageSender*/}
           {posts.map((post)=>(
               <Post
               key={post.id}
               profile={post.data.profile}
               message={post.data.message}
               timestamp={post.data.timestamp}
               username={post.data.username}
               image={post.data.image}
               />
           ))}
        </div>
    )
}

export default Feed

import { Avatar } from '@material-ui/core'
import { InsertEmoticonOutlined, PhotoLibraryOutlined, VideocamOffOutlined } from '@material-ui/icons';
import React, { useState } from 'react'
import "./messageSender.css"
import { useStateValue } from './StateProvider';
import db from "./firebase"
import firebase from "firebase";


function MessageSender() {
    const [{user}, dispatch] = useStateValue();
    const [input, setInput] = useState(' ')
    const [imgUrl, setImgUrl] = useState(' ')
    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection("posts").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.
            serverTimestamp(),
            profile: user.photoURL,
            image: imgUrl,
            username: user.displayName,
        })
        setInput("Bạn đang nghĩ gì?")
        setImgUrl('Image URL')
    }
    return (
        <div className="messageSender">
            <div className="messageSender_top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input
                    value={input}
                    onChange = {(e) => setInput(e.target.value)}
                    className="messageSender_input"
                    placeholder={"Bạn đang nghĩ gì?"}/>
                    <input 
                    value={imgUrl}
                    onChange={(e) => setImgUrl(e.target.value)}
                    placeholder={"image URL (Optional)"}/>
                    <button onClick={handleSubmit} type="submit">Hidden submit</button>
                </form>
            </div>
            <div className="messageSender_bottom">
                <div className="messageSender_option">
                    <VideocamOffOutlined style={{color:"hotpink"}}/>
                    <h3>Vidieo trực tiếp</h3>
                </div>
                <div className="messageSender_option">
                    <PhotoLibraryOutlined style={{color:"hotpink"}}/>
                    <h3>Ảnh/Video</h3>
                </div>
                <div className="messageSender_option">
                    <InsertEmoticonOutlined style={{color:"hotpink"}}/>
                    <h3>Cảm xúc/Hoạt động</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender

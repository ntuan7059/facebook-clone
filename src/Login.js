import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from './firebase'
import "./Login.css"
import {actionType, actionTypes} from "./reducer";
import {useStateValue} from "./StateProvider"



function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = ()=> {
        auth
        .signInWithPopup(provider)
        .then((result) =>{

            dispatch({
                type: actionType.SET_USER,
                user: result.user
            })
            console.log(result);
        })
        .catch((error)=> alert(error.message))
        };
    return (
        <div className="login">
            <div className="login_logo">
                <img src="https://i.pinimg.com/originals/79/0d/29/790d29ac20dc5fc7cd5c2a61cbddb9f7.png"
                  alt=""
                />
                <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Facebook.svg/1280px-Facebook.svg.png"/>
            </div>
            <Button type="submit" onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login

import React from 'react'
import "./SidebarRow.css"
import { Avatar } from '@material-ui/core';

function SidebarRow(props) {
    return (
        <div className="sidebarRow">
            {props.src && <Avatar src={props.src}/>}
            {props.icon && <props.icon/>}
            <h4>{props.title}</h4>
        </div>
    )
}

export default SidebarRow

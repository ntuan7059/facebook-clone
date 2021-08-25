import { LocalHospital } from '@material-ui/icons'
import userEvent from '@testing-library/user-event'
import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow'
import LocalGroceryStoreOutlinedIcon from '@material-ui/icons/LocalGroceryStoreOutlined';
import GroupAddOutlinedIcon from '@material-ui/icons/GroupAddOutlined';
import OndemandVideoOutlinedIcon from '@material-ui/icons/OndemandVideoOutlined';
import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined';
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import { useStateValue } from './StateProvider'

function Sidebar() {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className="sidebar">
            <SidebarRow
             src={user.photoURL} title={user.displayName}/>
            <SidebarRow
             icon={GroupAddOutlinedIcon} title="Friends"/>
            <SidebarRow icon={LocalGroceryStoreOutlinedIcon} title="Marketplace"/>
            <SidebarRow icon={OndemandVideoOutlinedIcon} title="Watch"/>
            <SidebarRow icon={EventAvailableOutlinedIcon} title="Sự kiện"/>
            <SidebarRow icon={QueryBuilderOutlinedIcon} title="Kỷ niệm"/>
            <SidebarRow icon={LocalOfferOutlinedIcon} title="Đã lưu"/>
            <SidebarRow icon= {ExpandMoreRoundedIcon} title="Xem thêm"/>

        </div>
    )
}

export default Sidebar

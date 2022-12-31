import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import { Home, Search, LibraryMusic } from "@mui/icons-material";
import { useStateValue } from "./StateProvider";

function Sidebar() {
    const [{playlists}, dispatch] = useStateValue([]);

    return (
        <div className="sidebar">
            <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />
        
            <SidebarOption Icon={Home} option="Home" />
            <SidebarOption Icon={Search} option="Search" />
            <SidebarOption Icon={LibraryMusic} option="Your Library" />
            <hr />

            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />

            {playlists?.items?.map((playlist) => (
                <SidebarOption option={playlist.name} />
            ))}

        
        </div>
    );
}

export default Sidebar;
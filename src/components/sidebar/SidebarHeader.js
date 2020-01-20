import React from 'react';

const SidebarHeader = ({ username, img }) => {
    return (
        <div className='sidebar-header'>
            <div className='sidebar-header-top'>
                <img className="sidebar-header-img" src={img} alt="profile-pic" />
                <i className="sidebar-header-notifications fas fa-bell"></i>
            </div>
            <div className="sidebar-header-bottom">
                <div className="sidebar-header-name">
                    <div className="sidebar-header-active-icon"></div>
                    <p>{ username }</p>
                </div>
                <i className="sidebar-header-name-expand fas fa-chevron-down"></i>
            </div>
        </div>
    )
}

export default SidebarHeader;
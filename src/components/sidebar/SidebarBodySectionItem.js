import React from 'react';

const SidebarBodySectionItem = ({ name }) => {
    return (
        <div className='sidebar-body-section-item'>
            <p>{ name }</p>
            <i className='fas fa-cog'></i>
        </div>
    )
}

export default SidebarBodySectionItem;
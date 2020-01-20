import React from 'react';

const SidebarBodySectionTitle = ({ name }) => {
    return (
        <div className='sidebar-body-section-title'>
            <p>{ name }</p>
            <i className='fas fa-plus'></i>
        </div>
    )
}

export default SidebarBodySectionTitle;
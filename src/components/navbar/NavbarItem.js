import React from 'react';
import classnames from 'classnames';

const NavbarItem = ({ icon, active, name, onClick }) => {
    return (
        <div onClick={() => onClick(name)} name={name} className={classnames('navbar-item', {'navbar-item-active': name === active})}>
            <i className={`fas ${icon}`}></i>
        </div>
    )
}

export default NavbarItem;
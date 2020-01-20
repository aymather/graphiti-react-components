import React from 'react';
import classnames from 'classnames';

const Tab = ({ active, name, onClick, id }) => {
    return (
        <div onClick={() => onClick(id)} className={classnames('tab', {'tab-active': active === id})}>
            <p className='name'>{name}</p>
            <i className='fas fa-times'></i>
        </div>
    )
}

export default Tab;
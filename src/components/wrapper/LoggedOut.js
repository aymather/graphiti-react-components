import React from 'react';

const LoggedOut = ({ children }) => {
    return (
        <div className='logged-out'>
            { children }
        </div>
    )
}

export default LoggedOut;
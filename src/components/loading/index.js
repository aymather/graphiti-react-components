import React from 'react';
import Loader from 'react-loaders';
import 'loaders.css';

const Index = () => {
    return (
        <div className='loader fadeIn'>
            <Loader type='pacman' />
        </div>
    )
}

export default Index;
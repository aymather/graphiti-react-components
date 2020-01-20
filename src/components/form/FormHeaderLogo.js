import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const FormHeaderLogo = ({ classNames, src, alt }) => {
    return <img src={src} 
                alt={alt} 
                className={classnames(classNames)} 
            />
}

FormHeaderLogo.propTypes = {
    classNames: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string
}

export default FormHeaderLogo;
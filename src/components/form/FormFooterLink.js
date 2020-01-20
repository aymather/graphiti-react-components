import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const FormFooterLink = ({ children, classNames, onClick }) => {
    return (
        <div className={classnames(classNames)} onClick={onClick}>
            { children }            
        </div>
    )
}

FormFooterLink.propTypes = {
    classNames: PropTypes.string,
    onClick: PropTypes.func
}

export default FormFooterLink;
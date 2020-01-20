import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const FormFooter = ({ children, classNames }) => {
    return (
        <footer className={classnames(classNames)}>
            { children }
        </footer>
    )
}

FormFooter.propTypes = {
    classNames: PropTypes.string
}

export default FormFooter;
import React from 'react';
import classnames from 'classnames';

const FormHeaderTitle = ({ classNames, children }) => {
    return (
        <h1 className={classnames(classNames)}>
            { children }
        </h1>
    )
}

export default FormHeaderTitle;
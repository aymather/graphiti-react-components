import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const FormBtn = ({ classNames, children, onClick }) => {
    return (
        <div className={classnames('form-btn', classNames)}
             onClick={onClick}>
            { children }
        </div>
    )
}

FormBtn.propTypes = {
    classNames: PropTypes.string,
    onClick: PropTypes.func
}

export default FormBtn;
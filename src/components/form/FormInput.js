import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const FormInput = ({
    classNames, 
    type, 
    placeholder, 
    id, 
    name,
    onChange
}) => {
    return <input type={type}
                  placeholder={placeholder}
                  className={classnames('text-input', classNames)}
                  name={name}
                  id={id}
                  onChange={onChange}
                />
}

FormInput.propTypes = {
    classNames: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func
}

export default FormInput;
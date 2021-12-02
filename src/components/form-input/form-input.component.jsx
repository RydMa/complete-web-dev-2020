import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ label, value, handleChange, ...otherProps }) => {
    return (
        <div className="group">
            <input className="form-input" {...otherProps} onChange={handleChange} />
            {
                label ? (
                    <label className={`${value ? 'shrink' : ''} form-input-label`}>
                        {label}
                    </label>
                ) : null
            }
        </div>
    )
}

export default FormInput;
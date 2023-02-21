import React from 'react';

const Button = ({text,divClass, buttonClass, callback }) => {
    return (
       
            <button onClick={callback} className={buttonClass}>
                {text}
            </button>
    
    );
};

export default Button;
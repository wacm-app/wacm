import React from 'react';

import './button.less';

const Button = ({buttonText, buttonType}) => {
  return (
    <button type={buttonType} className="app-button">{buttonText}</button>
  );
}

export default Button;

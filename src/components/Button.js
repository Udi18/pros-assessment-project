import React from 'react';

const Button = (props) => {
  const { onButtonClick, route } = props;

const determineButtonText = (route) => {
  if (route === 'tags') {
    return 'Back';
  }
  return 'Generate'
}

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <button onClick={onButtonClick}>{determineButtonText(route)}</button>
    </div>
  );
}

export default Button;
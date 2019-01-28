import React from 'react';

const Button = (props) => {
  const { onButtonClick, route } = props;

const determineRoute = (route) => {
  if (route === 'tags') {
    return 'Back';
  }
  return 'Generate'
}

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <button onClick={onButtonClick}>{determineRoute(route)}</button>
    </div>
  );
}

export default Button;
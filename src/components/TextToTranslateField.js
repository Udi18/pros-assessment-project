import React from 'react';

const TextToTranslateField = (props) => {
  const { onGreetingInputHandler } = props;
  return (
    <div style={{ padding: '30px' }}>
    <h3 style={{ paddingRight: '20px' }}>Please enter a greeting for the name tags.</h3>
    <input style={{ width: '350px'}} onChange={onGreetingInputHandler}></input>
  </div>
  )
}

export default TextToTranslateField;

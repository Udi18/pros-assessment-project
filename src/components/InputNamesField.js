import React from 'react';

const InputNamesField = (props) => {
  const { onNamesChangeHandler, names } = props;
  return (
    <div style={{ padding: '30px' }}>
      <h3 style={{ paddingRight: '20px' }}>Names:</h3>
      <textarea name="names" value={names} cols="25" rows="15" onChange={onNamesChangeHandler}></textarea>
    </div>
  )
}

export default InputNamesField;
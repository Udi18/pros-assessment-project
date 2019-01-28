import React from 'react';

const NameTags = (props) => {
  const { names, translatedText } = props;
  const namesArray = names.split('\n')

  const tagCreator = namesArray.map(name => {
    return (
      <div style={{
        border: 'solid',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        margin: '10px',
        width: '300px',}}
        key={name}>
        <h3>{translatedText}</h3>
        <h2>{name}</h2>
      </div>
    )
  })

  return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        {tagCreator}
      </div>
  )
}

export default NameTags;
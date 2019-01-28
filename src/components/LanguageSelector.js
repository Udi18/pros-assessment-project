import React from 'react';

const LanguageSelector = (props) => {
  const { languageOptions, onLanguageSelectHandler } = props;
  const optionsCreator = langs => langs.map(lang => <option key={lang}>{lang}</option>)

  return (
    <div style={{ padding: '30px' }}>
      <h3 style={{ paddingRight: '20px' }}>Language options:</h3>
      <select onChange={onLanguageSelectHandler} required>
        <option>Please select language</option>
        {optionsCreator(Object.values(languageOptions))}
      </select>
    </div>
  )
}

export default LanguageSelector;

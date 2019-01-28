import React, { Component } from 'react';
import './App.css';
import InputNamesField from './components/InputNamesField';
import LanguageSelector from './components/LanguageSelector';
import TextToTranslateField from './components/TextToTranslateField';
import NameTags from './components/NameTags';
import Button from './components/Button';

class App extends Component {
  state = {
    languageOptions: {},
    names: '',
    textToTranslate: '',
    languageChoice: '',
    translatedText: '',
    route: 'home',
  }

  //Pull list of supported languages from yandex api.
  componentDidMount() {
    const apiKey = 'key=trnsl.1.1.20190125T225412Z.10a346ef55de66c0.c6a59bb3601e9dbe458c012ab1cd29461c9f7c2d'
    const language = '&ui=en'
    fetch('https://translate.yandex.net/api/v1.5/tr.json/getLangs?' + apiKey + language)
      .then(response => response.json())
      .then(parsedJSON => this.setState({ languageOptions: parsedJSON.langs }))
      .catch(error => console.log('Something went wrong!', error))
  }

  //Finds key of a value in an object
  keyFinder = (obj, value) => {
    return Object.keys(obj).find(key => obj[key] === value);
  }

  onButtonClick = () => {
    if (this.state.route === 'home') {
      return this.setState({ route: 'tags' });
    }
    return this.setState({ route: 'home' });
  }

  //Encodes text, sends text and receives translated text.
  onSubmitHandler = (keyFinder, langObj, langChoice) => (event) => {
    const apiKey = 'key=trnsl.1.1.20190125T225412Z.10a346ef55de66c0.c6a59bb3601e9dbe458c012ab1cd29461c9f7c2d';
    const text = encodeURI(`&text=${this.state.textToTranslate}`);
    const lang = `&lang=en-${keyFinder(langObj, langChoice)}`
    event.preventDefault();
    fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?' + apiKey + text + lang)
      .then(response => response.json())
      .then(parsedJSON => this.setState({ translatedText: parsedJSON.text[0] }))
      .catch(error => console.log('Something went wrong!', error))
    this.onButtonClick();
  }

  onNamesChangeHandler = (event) => {
    let names = event.target.value;
    this.setState({ names: names })
  }


  onLanguageSelectHandler = (event) => {
    let language = event.target.value;
    this.setState({ languageChoice: language })
  }

  onGreetingInputHandler = (event) => {
    let greeting = event.target.value
    this.setState({ textToTranslate: greeting })
  }

  routeHandler = () => {
    const { names, languageOptions, textToTranslate, languageChoice, translatedText, route } = this.state;
    const pageStyle = { display: 'flex', justifyContent: 'center' }
    if (route === 'home') {
      return (
        <form onSubmit={this.onSubmitHandler(this.keyFinder, languageOptions, languageChoice)}>
          <div style={pageStyle}>
            <InputNamesField
              onNamesChangeHandler={this.onNamesChangeHandler}
              names={names}
            />
            <LanguageSelector
              languageOptions={languageOptions}
              onLanguageSelectHandler={this.onLanguageSelectHandler}
            />
            <TextToTranslateField
              textToTranslate={textToTranslate}
              onGreetingInputHandler={this.onGreetingInputHandler}
            />
          </div>
          <Button /> 
        </form>
      )
    }
    if (route === 'tags') {
      return (
      <div>
        <NameTags names={names} translatedText={translatedText} />
        <Button onButtonClick={this.onButtonClick} route={route} />
      </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.routeHandler()}
      </div>
    )
  }
}

export default App;

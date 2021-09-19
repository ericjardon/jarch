import React, {useState, useEffect} from 'react';
import './App.css';
import MainContainer from './components/MainContainer';

const App = () => {

  const [language, setLanguage] = useState("en");

  return (
      <div className="App-container">
        <MainContainer />
      </div>
  );
}

export default App;
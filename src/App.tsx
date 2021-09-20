import React, {useState, useEffect} from 'react';
import './App.css';
import Main from './components/Main';

const App = () => {

  const [language, setLanguage] = useState("en");

  return (
      <div className="App-container">
        <Main />
      </div>
  );
}

export default App;
import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="App">
      <h1 className="header">
        KawaiiBot
      </h1>
      <div className='chat'>
        <div className='comentarioUser'>
          <div className='textUser'>
            {inputValue}
          </div>
          <img id='imgUser' src='profile.png' alt=''></img>
        </div>

        <div className='comentarioBot'>
          <div className='textBot'>
            Olá, eu sou o KawaiiBot
          </div>
          <img id='imgBot' src='bot.jpeg' alt=''></img>
        </div>
      </div>
      <div className='form'>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <img id='send' src="send.png" alt=''></img>
      </div>
    </div>
  );
}

export default App;

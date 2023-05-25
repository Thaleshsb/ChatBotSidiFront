import React, { useState, useRef, useEffect } from 'react';
import './App.css';
function App() {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);
  const chatContainerRef = useRef(null);

  const vaiMudandoViaInput = (event) => {
    setInputValue(event.target.value);
  };

  const pegaEnvio = (event) => {
    event.preventDefault();

    const newMessage = {
      id: Date.now(),
      content: inputValue,
    };

    setMessages([...messages, newMessage]);
    setInputValue('');
  };
  // pro negocio desce junto com as msg uesse efecte pá
  useEffect(() => {

    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [messages]);

  const msgProntas = (content) => {

    //  ai dento tu poe qualquer chave seria a resposta do user, e o bot vai responder o valor, o foda é que o renato boto umas resposta grande da misera  e n implementei wodrwrap

    const respostasProntas = {
      "olá": "Olá, seja bem vindo ao Chatbot SiDi. O que você quer fazer? opcao_a - Saber mais sobre o Chatbot SiDi | opcao_b - Saber mais sobre a SiDi | opcao_c - Prosseguir para as perguntas",
      'ola': "Olá, seja bem vindo ao Chatbot SiDi. O que você quer fazer? opcao_a - Saber mais sobre o Chatbot SiDi | opcao_b - Saber mais sobre a SiDi | opcao_c - Prosseguir para as perguntas",
      'oi': "Olá, seja bem vindo ao Chatbot SiDi. O que você quer fazer? opcao_a - Saber mais sobre o Chatbot SiDi | opcao_b - Saber mais sobre a SiDi | opcao_c - Prosseguir para as perguntas",
      'ei': "Olá, seja bem vindo ao Chatbot SiDi. O que você quer fazer? opcao_a - Saber mais sobre o Chatbot SiDi | opcao_b - Saber mais sobre a SiDi | opcao_c - Prosseguir para as perguntas",
      'eae': "Olá, seja bem vindo ao Chatbot SiDi. O que você quer fazer? opcao_a - Saber mais sobre o Chatbot SiDi | opcao_b - Saber mais sobre a SiDi | opcao_c - Prosseguir para as perguntas",
      'eai': "Olá, seja bem vindo ao Chatbot SiDi. O que você quer fazer? opcao_a - Saber mais sobre o Chatbot SiDi | opcao_b - Saber mais sobre a SiDi | opcao_c - Prosseguir para as perguntas",
      'menu': "Olá, seja bem vindo ao Chatbot SiDi. O que você quer fazer? opcao_a - Saber mais sobre o Chatbot SiDi | opcao_b - Saber mais sobre a SiDi | opcao_c - Prosseguir para as perguntas",
      "opcao_a": '1a - Para que o chatbot SiDi serve? | 2a - Como funciona o ChatBot SiDi? c - Prosseguir para as "perguntas"'
    };
    /* a magica ta ai abaixo pra criar as caixa no messages.map( ele vasculha as resposta), caso nada || tendi nada mano auehuea */
    return respostasProntas[content] || "Desculpe, não entendi sua pergunta.";
  };

  return (
    <div className="App">
      <h1 className="header">
        KawaiiBot
      </h1>
      <div className='chat' ref={chatContainerRef}>
        <div className='comentarioBot'>
          <img id='imgBot' src='bot.jpeg' alt=''></img>
          <div className='textBot'>
            Olá, eu sou o KawaiiBot
          </div>
        </div>

        {messages.map((message) => (
          <div key={message.id}>
            <div className='comentarioUser'>
              <div className="textUser">
                {message.content}
              </div>
              <img id='imgUser' src='profile.png' alt=''></img>
            </div>
            <div className='comentarioBot'>
              <img id='imgBot' src='bot.jpeg' alt=''></img>
              <div className="textBot">
                {msgProntas(message.content)}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='form'>
        <form onSubmit={pegaEnvio}>
          <input type="text" value={inputValue} onChange={vaiMudandoViaInput} />
        </form>
        <img id='send' src="send.png" alt=''></img>
      </div>
    </div>
  );
}

export default App;

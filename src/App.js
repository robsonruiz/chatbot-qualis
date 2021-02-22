import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import Logo from './logo.png';
import Steps from './steps.js';
import './App.css';

const theme = {
  background: '#f5f8fb',
  headerBgColor: '#5081DF',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#5081DF',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const App = () => (
  <ThemeProvider theme={theme}>
    <div className="Chatbot">
      <img src={Logo} className="Logo"/>
      <ChatBot steps={Steps}/>
    </div>
  </ThemeProvider>
);

export default App;
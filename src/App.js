import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import './App.css';

const theme = {
  background: '#f5f8fb',
  headerBgColor: '#00b0b0',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#00b0b0',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const steps = [
  {
    id: 'ola',
    message: 'Olá!',
    trigger: 'apresentacao',
  },
  {
    id: 'apresentacao',
    message: 'Eu sou o chatbot da Qualis - Tecnologia em Infectologia! No que posso lhe ajudar?',
    trigger: 'menuPrincipal',
  },
  {
    id: 'menuPrincipal',
    options: [
      { value: 1, label: 'Informações sobre a COVID-19', trigger: 'covid19'},
      { value: 2, label: 'Informações sobre infectologia', trigger: 'infectologia'},
      { value: 3, label: 'Informações sobre a Qualis', trigger: 'qualis'},
    ],
  },
  {
    id: 'covid19',
    message: 'a',
  },
  {
    id: 'infectologia',
    message: 'a',
  },
  {
    id: 'qualis',
    message: 'Legal! O que você quer saber sobre a Qualis?',
    trigger: 'menuQualis',
  },
  {
    id: 'menuQualis',
    options: [
      { value: 1, label: 'Como entro em contato?', trigger: 'contato'},
      { value: 2, label: 'Quais são os serviços oferecidos?', trigger: 'servicos'},
      { value: 3, label: 'Quais são os produtos desenvolvidos?', trigger: 'produtos'},
      { value: 4, label: 'Quero saber outras informações', trigger: 'outrasInformacoes'},
    ],
  },
  {
    id: 'contato',
    message: 'a',
  },
  {
    id: 'servicos',
    message: 'a',
  },
  {
    id: 'produtos',
    message: 'a',
  },
  {
    id: 'outrasInformacoes',
    component: (
      <div className="Div">Você pode consultar outras informações diretamente no nosso site, basta clicar <a href="https://www.portalqualis.com.br/" className="DivLink">aqui!</a></div>
    ),
    trigger: 'ajuda',
  },
  {
    id: 'ajuda',
    message: 'Posso lhe ajudar em mais alguma coisa?',
    trigger: 'verificaAjuda',
  },
  {
    id: 'verificaAjuda',
    options: [
      { value: 1, label: 'Sim', trigger: 'retornaMenu'},
      { value: 2, label: 'Não', trigger: 'finaliza'},
    ],
  },
  {
    id: 'retornaMenu',
    message: 'Por favor, selecione a opção que representa no que posso lhe ajudar!',
    trigger: 'menuPrincipal',
  },
  {
    id: 'finaliza',
    component: (
      <div className="Div">Conversa finalizada.</div>
    ),
    end: true,
  },
];

const App = () => (
  <ThemeProvider theme={theme}>
    <ChatBot steps={steps} />
  </ThemeProvider>
);

export default App;
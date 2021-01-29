import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import Logo from './logo.jpg';
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
    message: 'Eu sou o chatbot da Qualis! No que posso lhe ajudar?',
    trigger: 'menuPrincipal',
  },
  {
    id: 'menuPrincipal',
    options: [
      { value: 1, label: 'Informações sobre a COVID-19', trigger: 'covid19'},
      { value: 2, label: 'Informações sobre a Qualis', trigger: 'qualis'},
    ],
  },
  {
    id: 'covid19',
    options: [
      { value: 1, label: 'Quais são os sintomas mais comuns?', trigger: 'sintomas'},
      { value: 2, label: 'Quem tem sintomas deve ficar isolado por quanto tempo?', trigger: 'isolamento'},
      { value: 3, label: 'Quero saber notícias sobre a COVID-19', trigger: 'noticias'},
      { value: 4, label: 'Preciso conversar com um especialista', trigger: 'especialista'},
    ],
  },
  {
    id: 'sintomas',
    component: (
      <div className="Div">Os sintomas mais comuns de COVID-19 são os seguintes: febre, tosse seca e cansaço.</div>
    ),
    trigger: 'ajuda',
  },
  {
    id: 'isolamento',
    component: (
      <div className="Div">Quem tem sintomas deve ficar em isolamento por pelo menos 14 dias.</div>
    ),
    trigger: 'ajuda',
  },
  {
    id: 'noticias',
    component: (
      <div className="Div">Notícias sobre a COVID-19 podem ser encontradas no nosso site, basta clicar <a href="https://www.portalqualis.com.br/covid-19/" className="DivLink">aqui</a> para acessar.</div>
    ),
    trigger: 'ajuda',
  },
  {
    id: 'especialista',
    component: (
      <div className="Div">Para conversar com um de nossos especialistas, clique <a href="" className="DivLink">aqui</a>.</div>
    ),
    trigger: 'ajuda',
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
    component: (
      <div className="Div">Você pode entrar em contato conosco pelo número (51) 3028-4992, pelo <a href="https://api.whatsapp.com/send/?phone=+555197748691&text&app_absent=0" className="DivLink">WhatsApp</a> ou pelo nosso <a href="https://www.portalqualis.com.br/contato/" className="DivLink">site</a>.</div>
    ),
    trigger: 'ajuda',
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
      <div className="Div">Você pode consultar outras informações diretamente no nosso site, basta clicar <a href="https://www.portalqualis.com.br/" className="DivLink">aqui</a>!</div>
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
    <div className="Chatbot">
      <img src={Logo} className="Logo"/>
      <ChatBot steps={steps}/>
    </div>
  </ThemeProvider>
);

export default App;
import React from 'react';
import Logo from './logo.png';
import ReactDOM from 'react-dom';
import Portuguese from './Portuguese';
import English from './English';
import './Language.css';

const Language = () => (
    <div className="Language">
        <img src={Logo} className="LogoLanguage" alt="Qualis Logo"/>
        <h3 className="TitleLanguage">Bem-vindo(a) ao Chatbot da Qualis - Tecnologia em Infectologia!</h3>
        <p className="LanguageText">Por favor, selecione sua língua de preferência.</p>
        <p className="LanguageText">Please select your language.</p>
        <button className="Button" onClick={() => [
            ReactDOM.render(
                <React.StrictMode>
                    <Portuguese />
                </React.StrictMode>,
                document.getElementById('root')
            )
        ]}>
            Português
        </button>
        <button className="Button" onClick={() => [
            ReactDOM.render(
                <React.StrictMode>
                    <English />
                </React.StrictMode>,
                document.getElementById('root')
            )
        ]}>
            English
        </button>
    </div>
);

export default Language;
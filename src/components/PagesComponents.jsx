import React, { useState } from 'react';
import {Graphs} from "./GraphsComponents";
export { Footer, Body };

// COMPOSICAO DA PAGINA

function Footer() {

    return (
      <footer id="footer">
        <p className="copyright">&copy; Desafio Indwise - Anna Puga.</p>
      </footer>
    )
  }
  
  function Header() {
  
    return (
      <section>
        <div className="content">
          <div className="inner">
            <h1>Desafio Indwise</h1>
            <p>análise exploratória de dados</p>
          </div>
        </div>
      </section>
    )
  }
   
  function Logo() {
    return (
      <div className="logo">
        <span className="icon fa-chart-bar"></span>
      </div>
    )
  }

  function Icons() {
    return (
      <ul className="icons">
        <li><a href="https://www.linkedin.com/in/anna-puga/" className="icon brands fa-linkedin"><span className="label">Facebook</span></a></li>
        <li><a href="https://www.instagram.com/annxrchism/?hl=pt-br" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
        <li><a href="https://github.com/annxpugx" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
      </ul>
    )
  }
  
  // PÁGINAS ESTÁTICAS - SOBRE / CONTATO
  
  function Contact() {
    return (
      <article>
        <h2 className="major">Contato</h2>
        <form method="post" action="#">
          <div className="fields">
            <div className="field half">
              <label for="name">Anna Puga Campos Rodrigues</label>
            </div>
            <div className="field half">
              <label for="email">annapugac@gmail.com</label>
              <label for="email">(031)99974-4494</label>
            </div>
            <div className="field">
              <h2 className="major">Sobre mim</h2>
              <label for="message">Curso atualmente o 3º período de Ciência da Computação da PUC Minas.
              Morei cerca de um ano na França em busca de aperfeiçoamento da língua francesa e tive experiências de trabalho voluntário durante esse
                          período. <a></a></label>
              <label for="message">Inglês e Francês avançados, Espanhol intermediário. <a></a></label><br />
              <h2 className="major">Projetos Pessoais</h2>
              <label for="message"><b>Site A.DOTE (2020/2):</b></label>
              <label> plataforma para assistência de famílias no processo adotivo, simplificando as etapas e a burocracia através de informações e funcionalidades para organização.
              Nesse projeto, utilizo a Spark Framework para o Backend,
              JS, HTML e CSS para o Frontend e PostgreSQL para o banco de dados.
                          </label><br />
              <h2 className="major">tecnologias</h2>
              <label for="message">
                <ul style={{ listStyleType: "none" }}>
                  <li>C/C++</li>
                  <li>Java</li>
                  <li>JavaScript</li>
                  <li>React.js</li>
                  <li>SQL</li>
                </ul>
              </label>
            </div>
          </div>
        </form>
        <Icons></Icons>
      </article>
    )
  }
  
  function About() {
    return (
      <article id="intro">
        <h2 className="major">Sobre</h2>
        <p><b>Os dados recolhidos são provenientes da produção de uma fábrica ao longo de uma semana.</b></p>
        <p>O desafio propõe que o participante faça uma análise exploratória dos dados e gere gráficos para visualização da produção diária de uma das máquinas. <br/> Além do que foi pedido, nesta aplicação há um gráfico extra que calcula a média do tempo
        gasto entre produções consecutivas todos os dias utilizando o campo <b>sis (speed in seconds)</b>, a fim de verificar se houve perda de produtividade devido à lentidão da máquina e, também, se esta média tem tendência de crescimento ao longo
        da semana.
            </p>
      </article>
    )
  }
  
  // MAIN FUNCTION -> TROCA ENTRE PÁGINAS
  
  function Body() {
  
    const [showHeader, setShowHeader] = useState(true);
    const [showAbout, setShowAbout] = useState(false);
    const [showGraphs, setShowGraphs] = useState(false);
    const [showContact, setShowContact] = useState(false);
  
    return (
      <header classNameName="col-8" id="header">
  
        {showHeader && <Logo></Logo>}
  
        {showHeader && <Header></Header>}
  
        {showAbout && <About></About>}
  
        {showGraphs && <Graphs></Graphs>}
  
        {showContact && <Contact></Contact>}
  
  
        <nav>
          <ul>
            <li><a onClick={() => {
              setShowAbout(false); setShowHeader(true); setShowGraphs(false); setShowContact(false); 
            }
            }>Home</a></li>
            <li><a onClick={() => {
              setShowAbout(true); setShowHeader(false); setShowGraphs(false); setShowContact(false);
            }
            }>Sobre</a></li>
            <li><a onClick={() => {
              setShowGraphs(true); setShowHeader(false); setShowContact(false); setShowAbout(false);
            }
            }>Gráficos</a></li>
            <li><a onClick={() => {
              setShowContact(true); setShowHeader(false); setShowGraphs(false); setShowAbout(false);
            }
            }>Contato</a></li>
          </ul>
        </nav>
  
      </header>
    )
  }
  
import React, { useState } from 'react';
import { GraphSum, GraphMean, GraphComp} from "./Graphs"
export { Graphs }

// GRAFICOS E CHAMADA DE TEXTOS EXPLICATIVOS (Condicional) 

function Container() { 

  const [showP1, setShowP1] = useState(true);
  const [showP2, setShowP2] = useState(false);
  const [showP3, setShowP3] = useState(false);
  const [showP4, setShowP4] = useState(false);


  return (
    <article className="container" id="container">
      {showP1 && <div>
        <P1></P1>
        <button onClick={() => { setShowP1(false); setShowP2(true); }}>Ver Gráficos</button>
      </div> }
      {showP2 && <div>
        <GraphSum></GraphSum>
        <P2></P2>
        <button onClick={() => { setShowP2(false); setShowP3(true); }}>Mas por quê?</button>
      </div> }
      {showP3 && <div>
        <GraphMean></GraphMean>
        <P3></P3>
        <button onClick={() => { setShowP3(false); setShowP4(true); }}>Ver Comparação</button>
      </div> }
      {showP4 && <div>
        <GraphComp></GraphComp>
        <P4></P4>
      </div> }
    </article>
  )
}

// CHAMADA CONTAINER (Gráficos)

function Graphs() {

  return (
    <section id="work">
      <h2 className="major" id="titleMajor">Gráficos</h2>
      <article id="initialBTN">
        <Container></Container>
      </article>
    </section>
  )
}

// TEXTO ESCRITO - AREA DE GRAFICOS

function P1(){
  return (
    <div>
     <p id="explicacaoGrafico"> <br/> Para as seguintes visualizações foi utilizada a biblioteca chart.js .</p>
    </div>
  )
}

function P2() {
  return (
    <div>
      <br/><p> O gráfico acima representa a soma da produção diária de uma máquina ao longo da semana. <br /> Percebe-se que a produtividade
        foi alta nos dias <b> 17, 18 e 20 </b> e mediana no dia <b>22</b>, totalizando uma média de <b>21.852</b> produtos por dia (alto contraste com a média de 
         <b> 8216</b> produtos dos dias restantes - <b>19 e 21</b>). </p>
    </div>
  )
}

function P3() {
  return (
    <div>
      <p id="explicacaoGrafico"><br/>
      O gráfico acima representa o tempo médio entre produções por dia da semana. <br/> Podemos notar que, nos dias em que a produção foi extremamente baixa (<b>19 e 21</b>),
      o tempo em que a máquina esteve improdutiva foi significativamente maior. Esta alta taxa de inatividade da máquina pode, muito provavelmente, ser um dos motivos para a 
      baixa produção diária, que tem como consequências atraso na entrega de pedidos aos clientes e redução de lucro para a empresa.<br/></p>
    </div>
  )
}

function P4() {
  return (
    <div>
      <p id="explicacaoGrafico"><br/>
      Nesta comparação é visível a relação entre os dois campos: nos dias onde há um mínimo local em produtividade há, simultaneamente, um máximo local de tempo de inatividade.
        O fator de improdutividade não é crescente ao longo dos dias da semana e sim localizado e oscilante, portanto não há como criar uma hipótese sobre
        a causa da lentidão sem inspeção da máquina e análise de outros tipos de dados.</p><br/>
    </div>
  )
}
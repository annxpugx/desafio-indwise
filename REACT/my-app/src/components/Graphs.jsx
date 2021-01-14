import React from 'react';
import {Bar, Line} from 'react-chartjs-2';
import myData from "../data/producao.json";
export {GraphSum, GraphMean, GraphComp};

// GRAPH LABELS

const labels = ['17', '18', '19','20', '21', '22'];

// FUNÇÕES PARA CÁLCULO 

function somar() {
    let sum = [1, 1, 1, 1, 1, 1];
    for (let i = 0; i < myData.length; i++) {
        for (let j = 0; j < labels.length; j++) {
            if (JSON.stringify(myData[i].pt).includes("2016-04-" + labels[j])) {
                sum[j]++;
            }
        }
    }
    return sum;
}

function media() {
  let somaDias = somar()
  let mean = [0, 0, 0, 0, 0, 0];
  let s = 0;

  for (let i = 0; i < labels.length; i++) {
      let sum = 0;
      for (let j = 1; j < somaDias[i]; j++) {
          sum += myData[s++].sis;
      }
      mean[i] = sum / somaDias[i];
  }
  return mean;
}

// GRÁFICO SOMA PRODUÇÕES DIÁRIAS

const graphSoma = {
  labels: labels,
  datasets: [
    {
      label: 'Produção',
      fill: true,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75, 192, 192, 0.6)',
      scaleFontColor: "#ff0000",
      borderWidth: 2,
      data: somar()
    }
  ],
    options: {
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 25,
                bottom: 25
            }
        }
    },
}

class GraphSum extends React.Component {
  
  render() {
    return (
      <article id="Line">
        <Line
          data={graphSoma}
          height={"400%"}
          width={"70%"}
          options = {{
            maintainAspectRatio : false,
            title:{
              display: true,
              text:'PRODUÇÃO DIÁRIA',
              fontSize:60,
              fontColor:'rgba(245, 240, 228, 0.7)',
              fontWeight: 600,
              fontFamily: "inherit", 
              textTransform: 'uppercase'
            },
            scales: {
              yAxes: [{
                ticks: {
                  fontColor: 'rgba(245, 240, 228, 0.7)'
                }
                
              }],
              xAxes: [{
                ticks: {
                  fontColor: 'rgba(245, 240, 228, 0.7)'
                }
                
              }]
            },
            legend:{
              display:true,
              position:'top',
              labels: {
                fontColor: 'rgba(245, 240, 228, 0.7)',
                fontSize: 25,    
                fontFamily: "inherit"
              }
            }
          }}
        />
      </article>
    );
  }
}

// GRÁFICO MÉDIA TEMPO IMPRODUTIVO / DIA

const graphMedia = {
  labels: labels,
  datasets: [
    {
      label: 'Tempo inativo',
      fill: true,
      lineTension: 0.5,
      backgroundColor: 'rgba(150, 74, 237, 0.4)',
      borderColor: 'rgba(150, 74, 237, 0.6)',
      scaleFontColor: "#ff0000",
      borderWidth: 2,
      data: media()
    }
  ],
    options: {
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 25,
                bottom: 25
            }
        }
    },
}

class GraphMean extends React.Component {

  render() {
    return (
      <article id="Line">
        <Line
          data={graphMedia}
          height={"400%"}
          width={"70%"}
          options = {{
            maintainAspectRatio : false,
            title:{
              display: true,
              text:'TEMPO MÉDIO DE INATIVIDADE',
              fontSize:60,
              fontColor:'rgba(245, 240, 228, 0.7)',
              fontWeight: 600,
              fontFamily: "inherit", 
              textTransform: 'uppercase'
            },
            scales: {
              yAxes: [{
                ticks: {
                  fontColor: 'rgba(245, 240, 228, 0.7)'
                }
                
              }],
              xAxes: [{
                ticks: {
                  fontColor: 'rgba(245, 240, 228, 0.7)'
                }
                
              }]
            },
            legend:{
              display:true,
              position:'top',
              labels: {
                fontColor: 'rgba(245, 240, 228, 0.7)',
                fontSize: 25,    
                fontFamily: "inherit"
              }
            }
          }}
        />
      </article>
    );
  }
}

// GRÁFICO COMPARAÇÃO SOMA x MÉDIA

const graphComp = {
  labels: labels,
  datasets: [
    {
      yAxisID: 'B',
      label: 'Tempo inativo',
      fill: true,
      lineTension: 0.5,
      backgroundColor: 'rgba(150, 74, 237, 0.1)',
      borderColor: 'rgba(150, 74, 237, 0.6)',
      scaleFontColor: "#ff0000",
      borderWidth: 2,
      data: media()
    },
    {
      yAxisID: 'A',
      label: 'Produção',
      fill: true,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,0.1)',
      borderColor: 'rgba(75, 192, 192, 0.6)',
      scaleFontColor: "#ff0000",
      borderWidth: 2,
      data: somar() 
    }
  ],
    options: {
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 25,
                bottom: 25
            }
        }
    },
}

class GraphComp extends React.Component {

  render() {
    return (
      <article id="Line">
        <Line
          data={graphComp}
          height={"400%"}
          width={"70%"}
          options = {{
            maintainAspectRatio : false,
            title:{
              display: true,
              text:'COMPARAÇÃO',
              fontSize:40,
              fontColor:'rgba(245, 240, 228, 0.7)',
              fontWeight: 600,
              fontFamily: "inherit", 
              textTransform: 'uppercase'
            },
            scales: {
              yAxes: [{
                id: 'A',
                type: 'linear',
                position: 'right',
                ticks: {
                  fontColor: 'rgba(75, 192, 192, 1.5)'
                }},
                {
                  id: 'B',
                  type: 'linear',
                  position: 'left', 
                  ticks: {
                    fontColor: 'rgba(150, 74, 237, 1)',
                    max: 8,
                    min: 0
                  },
                }],
              xAxes: [{
                ticks: {
                  fontColor: 'rgba(245, 240, 228, 0.7)'
                }
              }]
            },
            legend:{
              display:true,
              position:'top',
              labels: {
                fontColor: 'rgba(245, 240, 228, 0.7)',
                fontSize: 25,    
                fontFamily: "inherit"
              }
            }
          }}
        />
      </article>
    );
  }
}
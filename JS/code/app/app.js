function renderChart(data, labels, type) {
    var dataSum = somar(data, labels)
    var dataMean = media(data, labels, dataSum)
    var dados, graph, line, color

    var ctx = document.getElementById("myChart").getContext('2d');

    if (type != 'compare') {
        type == 'sum' ? (dados = dataSum) && (graph = 'line') && (line = 'Produção / Dia') && (color = 'rgba(75, 192, 192, 0.6)') :
            (dados = dataMean) && (graph = 'bar') && (line = 'Tempo médio de inatividade / Dia') && (color = 'rgba(150, 74, 237, 0.4)')

        let myChart = new Chart(ctx, {
            type: graph,
            data: {
                labels: labels,
                datasets: [{
                    label: line,
                    data: dados,
                    borderColor: color,
                    backgroundColor: color,
                }]
            },
            options: {
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 25,
                        bottom: 15
                    }
                }
            }
        });
    } else {

        var mixedChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Produção / Dia',
                    yAxisID: 'A',
                    data: dataSum,
                    borderColor: 'rgba(75, 192, 192, 1)',
                }, {
                    label: 'Tempo médio de inatividade / Dia',
                    yAxisID: 'B',
                    data: dataMean,
                    borderColor: 'rgba(150, 74, 237, 1)',
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        id: 'A',
                        type: 'linear',
                        position: 'left',
                    }, {
                        id: 'B',
                        type: 'linear',
                        position: 'right',
                        ticks: {
                            max: 8,
                            min: 0
                        }
                    }]
                }
            }
        });
    }
}

function initial(type) {
    change(type)
    renderBtn(type)
}

function change(type) {
    document.getElementById("container").innerHTML = `<canvas id="myChart"></canvas>`
    if (type == 'sum') {
        document.getElementById("initialBTN").innerHTML = `<button id="initialBTN" style="display: none;">Ver Gráfico</button>`
        document.getElementById("titleMajor").innerText = 'Soma'
        document.getElementById("explicacaoGrafico").innerHTML = `<p id="explicacaoGrafico"><br>
        O gráfico acima representa a soma da produção diária de uma máquina ao longo da semana. <br> Percebe-se que a produtividade 
        foi alta nos dias 17, 18 e 20 e mediana no dia 22, totalizando uma média de 21.852 produtos por dia (alto contraste com a média de 
        8216 produtos dos dias restantes - 19 e 21). </p> <button onclick="initial('mean')">Mas por quê?</button>`
    } else if (type == 'mean') {
        document.getElementById("titleMajor").innerText = 'Média'
        document.getElementById("explicacaoGrafico").innerHTML = `<p id="explicacaoGrafico"><br>
    O gráfico acima representa o tempo médio entre produções por dia da semana. <br> Podemos notar que, nos dias em que a média de produção foi extremamente baixa (19 e 21),
    o tempo em que a máquina esteve improdutiva foi significativamente maior. Esta alta taxa de inatividade da máquina pode, muito provavelmente, ser um dos motivos para a 
    baixa produção diária, que tem como consequências atraso na entrega de pedidos aos clientes e redução de lucro para a empresa.<br><br> <button onclick="initial('compare')">Visualizar comparação</button> 
    <br><br> <button onclick="initial('sum')">Voltar</button>`
    } else {
        document.getElementById("titleMajor").innerText = 'Comparação'
        document.getElementById("explicacaoGrafico").innerHTML = `<p id="explicacaoGrafico"><br>
        Nesta comparação é visível a relação entre os dois campos: nos dias onde há um mínimo local em produtividade há, simultaneamente, um máximo local de tempo de inatividade.
        O fator de improdutividade não é crescente ao longo dos dias da semana e sim localizado e oscilante, portanto não há como criar uma hipótese sobre
        a causa da lentidão sem inspeção da máquina e análise de outros tipos de dados. <br></p> <button onclick="initial('mean')">Voltar</button>`
    }
}

function renderBtn(type) {

    var xmlhttp = new XMLHttpRequest();
    var url = "app/data/producao.json";

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            var labels = ["17", "18", "19", "20", "21", "22"];
            renderChart(myArr, labels, type);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function somar(data, labels) {
    let sum = [1, 1, 1, 1, 1, 1];
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < labels.length; j++) {
            if (JSON.stringify(data[i].pt).includes("2016-04-" + labels[j])) {
                sum[j]++;
            }
        }
    }
    return sum;
}

function media(data, labels, somaDias) {
    let mean = [0, 0, 0, 0, 0, 0];
    let s = 0;

    for (let i = 0; i < labels.length; i++) {
        let sum = 0;
        for (let j = 1; j < somaDias[i]; j++) {
            sum += data[s++].sis;
        }
        mean[i] = sum / somaDias[i];
    }
    return mean;
}
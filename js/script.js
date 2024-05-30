let chartInstance = null;

document.getElementById('searchBtn').addEventListener('click', () => {
    const searchCIF = document.getElementById('searchCIF').value.toLowerCase();
    const searchNombre = document.getElementById('searchNombre').value.toLowerCase();
    const searchComercializadora = document.getElementById('searchComercializadora').value.toLowerCase();
    const searchEstado = document.getElementById('searchEstado').value.toLowerCase();

    const query = new URLSearchParams({
        cif: searchCIF,
        nombre: searchNombre,
        comercializadora: searchComercializadora,
        estado: searchEstado
    }).toString();

    fetch(`http://192.168.101.4:3000/asesoria_energetica?${query}`)
        .then(response => response.json())
        .then(data => {
            const filteredData = data.filter(item => {
                return (!searchCIF || (item.CIF && item.CIF.toString().toLowerCase().includes(searchCIF))) && 
                       (!searchNombre || (item.NOMBRE && item.NOMBRE.toString().toLowerCase().includes(searchNombre))) && 
                       (!searchComercializadora || (item.COMERCIALIZADORA && item.COMERCIALIZADORA.toString().toLowerCase().includes(searchComercializadora))) && 
                       (!searchEstado || (item.ESTADO && item.ESTADO.toString().toLowerCase().includes(searchEstado)));
            });
            displayResults(filteredData);
            updateChart(filteredData);
        })
        .catch(error => console.error('Error:', error));
});

function displayResults(data) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    data.forEach(item => {
        const resultItem = document.createElement('div');
        resultItem.className = 'col-12 mb-2';
        let resultHTML = '<div class="card"><div class="card-body">';
        for (const key in item) {
            resultHTML += `<p class="card-text"><strong>${key}:</strong> ${item[key] ? item[key] : 'N/A'}</p>`;
        }
        resultHTML += '</div></div>';
        resultItem.innerHTML = resultHTML;
        resultsDiv.appendChild(resultItem);
    });
}

const updateChart = (data) => {
    if (chartInstance) {
        chartInstance.destroy();
    }

    const ctx = document.getElementById('chart').getContext('2d');

    const commercializers = data.reduce((acc, item) => {
        acc[item.COMERCIALIZADORA] = (acc[item.COMERCIALIZADORA] || 0) + 1;
        return acc;
    }, {});

    const chartData = {
        labels: Object.keys(commercializers),
        datasets: [{
            label: 'Número de contratos por comercializadora',
            data: Object.values(commercializers),
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(153, 102, 255)',
                'rgb(255, 159, 64)'
            ],
            hoverOffset: 4
        }]
    };

    chartInstance = new Chart(ctx, {
        type: 'polarArea',
        data: chartData,
        options: {}
    });
}

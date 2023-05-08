$(document).ready(function() {
    getListData().then(function(data) {
        const departmentCount = processData(data.d.results);
        generateBarGraph(departmentCount);
    });
});

function getListData() {
    return $.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('PurchaseRequests')/items?$select=Department",
        type: "GET",
        headers: {
            "accept": "application/json;odata=verbose",
        },
    });
}

function processData(items) {
    const departmentCount = {};
    items.forEach(function(item) {
        if (departmentCount[item.Department]) {
            departmentCount[item.Department]++;
        } else {
            departmentCount[item.Department] = 1;
        }
    });
    return departmentCount;
}
function generateBarGraph(departmentCount) {
    const container = document.getElementById('chartContainer');
    const canvas = document.createElement('canvas');
    container.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    const labels = Object.keys(departmentCount);
    const data = Object.values(departmentCount);

    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Purchase Requests by Department',
                data: data,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                datalabels: {
                    anchor: 'end',
                    align: 'top',
                    color: 'rgba(0, 0, 0, 0.8)',
                    font: {
                        size: 14
                    },
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    });
}

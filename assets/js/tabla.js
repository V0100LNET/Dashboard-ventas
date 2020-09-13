var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'bar',

            // The data for our dataset
            data: {
                labels: ['Junio 2020', 'Julio 2020', 'Agosto 2020', 'Septiembre 2020'],
                datasets: [{
                    label: 'Nuevos usuarios',
                    backgroundColor: [
                        '#12c9e5',
                        '#12c9e5',
                        '#12c9e5',
                        '#111b54'
                    ],
                    maxBarThickness: 50,
                    borderColor: 'rgb(255, 99, 132)',
                    data: [50, 100, 150, 200]
                }]
            },

            // Configuration options go here
            options: {}
        });
// google.charts.load('current', {'packages':['corechart']});
//      google.charts.setOnLoadCallback(drawChart);

//      function drawChart() {
//        var data = google.visualization.arrayToDataTable([
//          ['Year', 'Expenses'],
//          ['june',20],
//          ['july',45],
//          ['aug',46],
//          ['sep', 47],
//          ['oct', 30],
//          ['nov', 80],
//          ['dec', 60],
//          ['jan', 62],
//          ['feb', 70],
//          ['march', 90],
//          ['april', 84],
//          ['may', 78]

//        ]);

//        var options = {

//          curveType: 'function',
//          hAxis: {title: 'TimePeriod',  titleTextStyle: {color: '#333'}},
//          vAxis: {minValue: 0},
//          seriesType: 'area',
//          series: {2: {type: 'line'}}
//        };

//        var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
//        chart.draw(data, options);
//      }



Highcharts.chart('container', {
  chart: {
    type: 'areaspline'
  },
  title: {
    text: 'Investment',
    align: 'left'
  },
  xAxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'June',
      'July',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ],

  },
  yAxis: {
    title: {
      text: 'Rate'
    }
  },
  tooltip: {
    shared: true,
    valueSuffix: ' units'
  },
  credits: {
    enabled: false
  },
  plotOptions: {
    areaspline: {
      fillOpacity: 0.5
    }
  },
  series: [{
    name: "Time Period",
    data: [100, 200, 300, 150, 400, 100, 250, 110, 300, 700, 900, 400]
  }]
});



Highcharts.chart('venn', {
  accessibility: {
    point: {
      valueDescriptionFormat: '{point.name}: {point.longDescription}.'
    }
  },
  series: [{
    type: 'venn',
    data: [{
      sets: ['A'],
      value: 4,
      name: 'Utility Tokens',
    }, {
      sets: ['B'],
      value: 1,
      name: 'Security Token',

    }, {
      sets: ['A', 'B'],
      value: 1
    }]
  }],

  title: {
    text: 'Tokens',
    align: 'left'
  },
  exporting: { enabled: false }
});

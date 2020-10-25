// Load the Visualization API and the controls package.
google.charts.load('current', {'packages':['corechart','bar']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(burnoutChart);
google.charts.setOnLoadCallback(procrastinationChart);

// Draw the chart and set the chart values
function burnoutChart() {
  var data = google.visualization.arrayToDataTable([
  ['Fact', 'Percentage (%)', {role: 'style'}],
  ['Prepandemic Employee Burnout Rate', 42, '#1A936F'],
  ['Current Employee Burnout Rate', 72, '#F3E9D2'],
  ['% of Managers Working More Hours', 59, '#114B5F'],
  ['% of Employees Struggling With Burnout', 38,'#88D498']
]);

  // Title and set the width and height of the chart
  var options = {
    title: 'Burnout During Pandemic',
    chartArea: {width:'200'}, //50%
    hAxis: {
    title: 'Percentages',
      minValue: 0
    },
    backgroundColor: '#C6DABF'
  };

  // Display the chart inside the <div> element with id="burnoutDiv"
  var chart = new google.visualization.BarChart(document.getElementById('burnoutDiv'));
  chart.draw(data, options);
}

function procrastinationChart() {
  var dataTwo = google.visualization.arrayToDataTable([
  ['Fact', 'Percentage (%)', {role: 'style'}],
  ['% of Workforce Admitting to Procrastination', 88, '#1A936F'],
  ['% of High School & College Students Admitting to Procrastination', 87, '#F3E9D2']
  ]);

  var optionsTwo = {
    title: 'Procrastination',
    chartArea: {width:'200'},
    hAxis: {
      title: 'Percentages',
      minValue: 0
    },
    backgroundColor: '#C6DABF'
  };

  // Display the chart inside the <div> element with id="procrastinatetDiv"
  var chartTwo = new google.visualization.BarChart(document.getElementById('procrastinateDiv'));
  chartTwo.draw(dataTwo, optionsTwo);
}
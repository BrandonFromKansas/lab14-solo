'use strict';

let canvasElem = document.getElementById('chart').getContext('2d');


//TODO:
//  * - Instantiate a new AppState
let appStateA = new AppState() //allProducts = ["bag"]

//  * - Use a method on that AppState to load vote data from localStorage.
appStateA.loadItems();
console.log('appStateA', appStateA);

function renderChart() {

  //  * - Create a data object for chart.js using your AppState's allProducts array.

  // For Loop through the appStateA.allProducts array to get just the product names.
  const productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];

  let chartVotes = [];
  let chartViews = [];
  for (let i = 0; i < appStateA.allProducts.length; i++) {
    chartVotes.push(appStateA.allProducts[i].timesClicked)
    chartViews.push(appStateA.allProducts[i].timesShown)
  }
console.log('chartVotes', chartVotes);
console.log('chartViews', chartViews);
  // let chartOptionsObject = {
  //   type: 'bar',
  //   data: {
  //     labels: productNames,
  //     datasets: [
  //       {
  //         label: '# of Votes',
  //         data: chartVotes,
  //         // ^^^ this is where a For Loop through appStateA.allProducts to get the vote data for each product. This data will always change, which is why it cannot be hard coded.
  //         backgroundColor: [
  //           'rgba(211, 188, 141)',

  //         ],
  //         borderColor: [
  //           'rgba(16, 24, 31)',

  //         ],
  //         borderWidth: 3


  //       },
  //       {
  //         label: '# of Views',
  //         data: chartViews,
  //         backgroundColor: [
  //           'rgba(0, 53, 148)',
  //         ],
  //         borderColor: [
  //           'rgba(134, 147, 151)',
  //         ],
  //         borderWidth: 3
  //       }]
  //   },
  //   options: {
  //     scales: {
  //       y: {
  //         beginAtZero: true
  //       }
  //     }
  //   }
  // };


  // //  * - Combine the data object with configuration information for chart.js type, colors, etc
  // //  * - Make an NEW instance of the chart.js with the configuration and the canvasElem

  // let myChart = new Chart(canvasElem, chartOptionsObject);
}

renderChart();

// Import stylesheets
import './style.css';

import { Chart } from 'chart.js/auto';

const ctx = document.getElementById('acquisitions');

let airplan1Position = { x: 10, y: 20 };

const airPlan1Road = [
  { x: 10, y: 20, a: null, b: null },
  { x: 30, y: 80, a: null, b: null },
  { x: 50, y: 40, a: null, b: null },
  { x: 50, y: 70, a: null, b: null },
  { x: 55, y: 75, a: null, b: null },
  { x: 80, y: 40, a: null, b: null },
  { x: 90, y: 90, a: null, b: null },
];

let airplan2Position = { x: 100, y: 10 };

const airplan2Road = [
  { x: 100, y: 10 },
  { x: 90, y: 80 },
  { x: 70, y: 60 },
  { x: 60, y: 50 },
  { x: 40, y: 40 },
  { x: 20, y: 10 },
  { x: 10, y: 0 },
];

const data = {
  labels: [10, 30, 50, 50, 55, 80, 90],
  datasets: [
    {
      data: airPlan1Road,
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      label: "Chemain d'Avion num X15-01",
    },
    {
      data: [airplan1Position],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      label: 'Avion X15-01',
      pointBackgroundColor: 'rgb(75, 192, 192)',
      pointBorderColor: 'rgb(75, 192, 192)',
      pointBorderWidth: 10,
    },
    {
      data: airplan2Road,
      fill: false,
      borderColor: 'red',
      label: "Chemind'Avion num X15-02",
    },
    {
      data: [airplan2Position],
      fill: false,
      borderColor: 'red',
      label: 'Avion X15-01',
      pointBackgroundColor: 'red',
      pointBorderColor: 'red',
      pointBorderWidth: 10,
    },
  ],
};

var LineChart = new Chart(ctx, {
  type: 'line',
  data: data,
  options: {
    scales: {
      x: {
        type: 'linear',
        min: 0,
        max: 100,
      },
      y: {
        type: 'linear',
        min: 0,
        max: 100,
      },
    },
  },
});

// calculate a and b:
let a, b;
let x = airPlan1Road[0].x;
let y = airPlan1Road[0].y;
let i = 0;
let run = true;
while (run) {
  if (airPlan1Road[i + 1].x - airPlan1Road[i].x != 0) {
    a =
      (airPlan1Road[i + 1].y - airPlan1Road[i].y) /
      (airPlan1Road[i + 1].x - airPlan1Road[i].x);
  } else {
    a = 0;
  }
  b = airPlan1Road[i].y - a * airPlan1Road[i].x;

  airPlan1Road[i].a = a;
  airPlan1Road[i].b = b;

  if (airPlan1Road[i + 1]) {
    x = airPlan1Road[i + 1].x;
    y = airPlan1Road[i + 1].y;
  } else {
    run = false;
  }

  let interval = setInterval(() => {
    airplan1Position.x = airplan1Position.x + 1;
    airplan1Position.y = a * airplan1Position.x - b;
    LineChart.update();
  }, 100);

  if (
    airPlan1Road[i].x === airPlan1Road[i + 1].x &&
    airPlan1Road[i].y === airPlan1Road[i + 1].y
  ) {
    interval.clear();
  }
}

// for (var i = 0; i < airPlan1Road.length - 1; i++) {
//   if (airPlan1Road[i + 1].x - airPlan1Road[i].x != 0) {
//     a =
//       (airPlan1Road[i + 1].y - airPlan1Road[i].y) /
//       (airPlan1Road[i + 1].x - airPlan1Road[i].x);
//   } else {
//     a = 0;
//   }
//   b = airPlan1Road[i].y - a * airPlan1Road[i].x;

//   airPlan1Road[i].a = a;
//   airPlan1Road[i].b = b;
// }

console.log(airPlan1Road);

// setInterval(() => {
//   airplan1Position.x = airplan1Position.x + 1;
//   airplan1Position.y = a * airplan1Position.x - b;

//   LineChart.update();
// }, 100);

// Write Javascript code!

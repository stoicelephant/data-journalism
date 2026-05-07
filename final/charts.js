/* ═══════════════════════════════════════════
   Bachata: From Humble Roots to Tall Walls
   charts.js
═══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function () {

  // ── CHART 1: Streaming Growth ──────────────
  const streamingCtx = document.getElementById('streamingChart').getContext('2d');
  const years = ['2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022','2023','2024'];

  new Chart(streamingCtx, {
    type: 'line',
    data: {
      labels: years,
      datasets: [
        {
          label: 'Romeo Santos (solo)',
          data: [80, 150, 320, 550, 780, 1050, 1300, 1500, 1600, 1900, 2300, 2700, 3100],
          borderColor: '#b5302a',
          backgroundColor: 'rgba(181,48,42,0.08)',
          borderWidth: 2.5,
          pointRadius: 3,
          tension: 0.4,
          fill: true
        },
        {
          label: 'Aventura (group)',
          data: [200, 280, 350, 480, 600, 650, 700, 780, 1100, 1400, 1600, 1750, 1850],
          borderColor: '#c9a84c',
          backgroundColor: 'rgba(201,168,76,0.07)',
          borderWidth: 2,
          pointRadius: 3,
          tension: 0.4,
          fill: true
        },
        {
          label: 'Prince Royce',
          data: [60, 120, 250, 420, 600, 700, 750, 820, 900, 950, 1000, 1050, 1100],
          borderColor: '#7a7168',
          backgroundColor: 'rgba(122,113,104,0.07)',
          borderWidth: 2,
          borderDash: [4, 3],
          pointRadius: 2.5,
          tension: 0.4,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            font: { family: "'DM Mono', monospace", size: 10 },
            color: '#3a3530',
            padding: 16,
            usePointStyle: true,
            pointStyleWidth: 12
          }
        },
        tooltip: {
          callbacks: {
            label: ctx => ` ${ctx.dataset.label}: ~${ctx.parsed.y}M streams/yr (est.)`
          }
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(0,0,0,0.05)' },
          ticks: { font: { family: "'DM Mono', monospace", size: 9 }, color: '#7a7168' }
        },
        y: {
          grid: { color: 'rgba(0,0,0,0.05)' },
          ticks: {
            font: { family: "'DM Mono', monospace", size: 9 },
            color: '#7a7168',
            callback: v => v + 'M'
          },
          title: {
            display: true,
            text: 'Estimated Annual Streams (millions)',
            font: { family: "'DM Mono', monospace", size: 9 },
            color: '#7a7168'
          }
        }
      }
    }
  });


  // ── CHART 2: Festival Ticket Prices ────────
  const ticketCtx = document.getElementById('ticketChart').getContext('2d');

  const festivals = [
    'LA Summer Bachata Fest (Early Bird)',
    'LA Summer Bachata Fest (Standard)',
    'Montreal Bachata Fest (Pre-Sale)',
    'Bachata Sensual World Congress',
    'Mega Bachata Fest (Premium)'
  ];
  const prices = [120, 175, 289, 350, 500];
  const barColors = [
    'rgba(181,48,42,0.55)',
    'rgba(181,48,42,0.75)',
    'rgba(181,48,42,0.88)',
    'rgba(201,168,76,0.85)',
    'rgba(26,23,20,0.82)'
  ];

  new Chart(ticketCtx, {
    type: 'bar',
    data: {
      labels: festivals,
      datasets: [{
        label: 'Full Pass Price (USD)',
        data: prices,
        backgroundColor: barColors,
        borderColor: barColors.map(c => c.replace(/[\d.]+\)$/, '1)')),
        borderWidth: 1,
        borderRadius: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => ` $${ctx.parsed.y} USD`
          }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: {
            font: { family: "'DM Mono', monospace", size: 8.5 },
            color: '#7a7168',
            maxRotation: 0
          }
        },
        y: {
          grid: { color: 'rgba(0,0,0,0.05)' },
          ticks: {
            font: { family: "'DM Mono', monospace", size: 9 },
            color: '#7a7168',
            callback: v => '$' + v
          },
          title: {
            display: true,
            text: 'Price (USD)',
            font: { family: "'DM Mono', monospace", size: 9 },
            color: '#7a7168'
          }
        }
      }
    }
  });

});

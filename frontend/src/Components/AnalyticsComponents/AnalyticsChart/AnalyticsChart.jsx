import React, { useEffect, useRef } from 'react';
import styles from './AnalyticsChart.module.css';
import Chart from 'chart.js/auto';

function AnalyticsChart({ saleRecords }) {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Create a new chart
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: saleRecords.map(sale => sale.saleDate),
        datasets: [
          {
            label: 'Sale Price',
            data: saleRecords.map(sale => sale.salePrice),
            borderColor: 'rgba(0 86 59 / 1)',
            backgroundColor: 'rgba(0 86 59 / 0.2)',
            tension: 0.4, // Smooth curves
          },
          {
            label: 'Sale Quantity',
            data: saleRecords.map(sale => sale.saleQty),
            borderColor: 'rgb(221 167 123 / 1)',
            backgroundColor: 'rgb(221 167 123 / 0.2)',
            tension: 0.4, // Smooth curves
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Sales Data Overview',
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Date',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Value',
            },
            beginAtZero: true,
          },
        },
      },
    });

    // Cleanup function to destroy the chart when the component is unmounted
    return () => {
      myChart.destroy();
    };
  }, [saleRecords]);

  return (
    <div className={styles["analytics-chart-container"]}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
}

export default AnalyticsChart;

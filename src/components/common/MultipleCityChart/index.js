import React from 'react';
import { Line } from 'chart.js';

export default function MultipleCityChart(props) {
  const { currentTab } = props;
  const mydata = ''; // placeholder for real data

  const chartData = {
    labels: [mydata.years],
    datasets: [
      {
        label: { currentTab },
        data: [mydata.data],
        backgroundColor: [
          '#FF595E',
          '#FFCA3A',
          '#8AC926',
          '#1982C4',
          '#6A4C93',
          '#264653',
          '#2A9D8F',
          '#E9C46A',
          '#F4A261',
          '#E76F51',
        ],
      },
    ],
  };

  return (
    <div className="multiple-city-chart-container">
      <Line data={chartData} options={{ maintainAspectRatio: false }} />
    </div>
  );
}

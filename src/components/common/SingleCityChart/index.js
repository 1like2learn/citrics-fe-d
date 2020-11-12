import React from 'react';
import { Line } from 'react-chartjs-2';

import SingleCityChartDiv from './style';

export default function SingleCityChart(props) {
  const { city } = props;

  const years = city.historicalincome.map(c => c.year);
  const income = city.historicalincome.map(c => c.householdincome);
  const housingCost = [];
  city.historicalaveragehouse.forEach(month => {
    if (month.month === 12) {
      housingCost.push(month.housingcost);
    }
  });

  const chartData = {
    labels: years,
    datasets: [
      {
        label: 'Income History',
        backgroundColor: '#d3553f',
        borderColor: '#d3553f',
        pointBackgroundColor: '#d3553f',
        pointBorderColor: '#d3553f',
        data: income,
      },
      {
        label: 'Housing History',
        backgroundColor: '#f2c8a6',
        borderColor: '#f2c8a6',
        pointBackgroundColor: '#f2c8a6',
        pointBorderColor: '#f2c8a6',
        data: housingCost,
      },
    ],
  };
  return (
    <SingleCityChartDiv>
      <Line
        data={chartData}
        options={{
          title: {},
          fill: 'start',
          legend: {
            display: false,
            position: 'right',
            fontFamily: 'Roboto',
          },
          maintainAspectRatio: false,
          animation: {
            duration: '1500',
            easing: 'linear',
          },
        }}
      />
    </SingleCityChartDiv>
  );
}

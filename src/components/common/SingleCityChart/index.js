import React from 'react';
import { Line } from 'react-chartjs-2';

import SingleCityChartDiv from './style';

export default function SingleCityChart(props) {
  const { city } = props;

  const years = city.populationhist.map(c => c.year);
  const population = city.populationhist.map(c => c.pop);

  const chartData = {
    labels: years,
    datasets: [
      {
        label: 'Population History',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderColor: '#264653',
        pointBackgroundColor: '#fff',
        pointBorderColor: '#B820FA',
        data: population,
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
            display: true,
            position: 'bottom',
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

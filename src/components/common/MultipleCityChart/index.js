import React from 'react';
import { Line } from 'react-chartjs-2';

export default function MultipleCityChart(props) {
  const { temp_data } = props;
  const mydata = ''; // placeholder for real data

  console.log('temp_data', temp_data);

  console.log('Multiple City Chart - citynamestate', temp_data[0].citynamestate);

  const years = temp_data[0].populationhist.map(c => c.year);
  const population = temp_data[0].populationhist.map(c => c.pop);
  const population2 = temp_data[1].populationhist.map(c => c.pop);
  const population3 = temp_data[2].populationhist.map(c => c.pop);

  console.log('Multiple City Chart - years', years);
  console.log('Multiple City Chart - pop', population);

  const chartData = {
    labels: years,
    datasets: [
      {
        label: temp_data[0].citynamestate,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderColor: '#264653',
        pointBackgroundColor: '#fff',
        pointBorderColor: '#B820FA',
        data: population,
      },
      {
        label: temp_data[1].citynamestate,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderColor: '#2A9D8F',
        pointBackgroundColor: '#fff',
        pointBorderColor: '#2400BF',
        data: population2,
      },
      {
        label: temp_data[2].citynamestate,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderColor: '#E9C46A',
        pointBackgroundColor: '#fff',
        pointBorderColor: '#1FFFB5',
        data: population3,
      },
    ],
  };

  return (
    <div className="multiple-city-chart-container">
      <Line
        data={chartData}
        options={{
          title: {},
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
    </div>
  );
}

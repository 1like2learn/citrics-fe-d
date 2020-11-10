import React from 'react';
import styled from 'styled-components';
import {
  FaRegPlusSquare,
  FaCity,
  FaTemperatureHigh,
  FaTemperatureLow,
  FaArrowCircleDown,
  FaArrowCircleUp,
} from 'react-icons/fa';
import {
  RiBuilding4Line,
  RiContrastDrop2Line,
  RiDropLine,
  RiGiftLine,
  RiHome4Line,
  RiSurgicalMaskLine,
  RiTimerLine,
} from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-content: center;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  font-size: 1rem;

  .h3 {
    margin: 2% auto 0;
    font-size: 1.75rem;
    font-family: 'Montserrat', sans-serif;
  }

  .split {
    flex-direction: column;
    display: flex;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: center;
    width: 50%;
    height: 100%;
  }

  .float {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 1%;
    font-size: 2.5rem;
    text-align: center;
    align-items: center;

    div {
      display: flex;
      text-align: center;
      position: relative;
      justify-content: center;
      font-size: 1.1rem;
      background-color: #d35540;
      width: 100px;
      border-radius: 30px;
      color: #ffffff;

      p {
        margin: auto;
      }
    }
  }

  .info {
    display: flex;
    flex-flow: row wrap;
    width: 80%;
    margin: 1% auto;
    justify-content: center;
  }

  .icons {
    margin: 45%;
    border-radius: 10px;
    background-color: #c4c4c4;
  }

  .bottom {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .graph {
    margin-left: 2%;
    height: 50vh;
    width: 40vw;
    text-align: center;
    display: flex;
    font-size: 5rem;
  }

  .infographic {
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    margin: 2%;
  }
`;

/*
This is hard coded city data for Tampa, FL to test the graphs with.
*/

const c1 = {
  cityid: 393192,
  citynamestate: 'Tampa, Florida',
  statecode: 'FL',
  timezone: 'UTC−5 Eastern',
  latitude: 27.9477595,
  logitude: -82.458444,
  fpis: '12-71000',
  gnis: null,
  wikiimgurl:
    'https://upload.wikimedia.org/wikipedia/commons/8/8c/TampaCollection1.png',
  website: 'www.tampagov.net',
  population: 385430.0,
  densitymisq: 3505.68,
  densitykmsq: 1353.55,
  averageage: 36.6,
  householdincome: 50489.0,
  individualincome: 34278.0,
  averagehouse: 233800.0,
  rent: 1082.0,
  costoflivingindex: 95.8,
  acastatus: 'Not Adopted',
  averagetemp: 74.91666666666667,
  averageperc: 4.965833333333333,
  avgnewcovidcases: 13765.445283018867,
  avgMoney: [
    {
      year: 2010,
      individualincome: 28922,
      householdincome: 44409,
    },
    {
      year: 2011,
      individualincome: 28348,
      householdincome: 44299,
    },
    {
      year: 2012,
      individualincome: 29072,
      householdincome: 45040,
    },
    {
      year: 2013,
      individualincome: 29772,
      householdincome: 46036,
    },
    {
      year: 2014,
      individualincome: 30563,
      householdincome: 47463,
    },
    {
      year: 2015,
      individualincome: 31445,
      householdincome: 49426,
    },
    {
      year: 2016,
      individualincome: 32389,
      householdincome: 50860,
    },
    {
      year: 2017,
      individualincome: 33962,
      householdincome: 52594,
    },
    {
      year: 2018,
      individualincome: 34769,
      householdincome: 55462,
    },
    {
      year: 2019,
      individualincome: 37292,
      householdincome: 59227,
    },
  ],
};

const c2 = {
  cityid: 164,
  citynamestate: 'Watertown, Massachusetts',
  statecode: 'MA',
  timezone: 'UTC−5 Eastern',
  latitude: 42.37083300000001,
  logitude: -71.18333299999998,
  fpis: '25-7344',
  gnis: null,
  wikiimgurl:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Main_Street_Watertown_MA_2.jpg/500px-Main_Street_Watertown_MA_2.jpg',
  website: 'https://www.ci.watertown.ma.us/',
  population: 35756.0,
  densitymisq: 8987.0,
  densitykmsq: 3470.22,
  averageage: 38.0,
  householdincome: 96842.0,
  individualincome: 53348.0,
  averagehouse: 577652.0,
  rent: 1828.0,
  costoflivingindex: 143.7,
  acastatus: 'Adopted',
  averagetemp: 50.86666666666667,
  averageperc: 4.523333333333333,
  avgnewcovidcases: 15606.373584905661,
  zipcodes: [
    {
      code: '02472',
    },
  ],
  counties: [
    {
      name: 'Middlesex',
    },
  ],
  populationhist: [
    {
      year: 2014,
      pop: 34308.0,
    },
    {
      year: 2012,
      pop: 33050.0,
    },
    {
      year: 2013,
      pop: 33238.0,
    },
    {
      year: 2015,
      pop: 34385.0,
    },
    {
      year: 2018,
      pop: 35846.0,
    },
    {
      year: 2011,
      pop: 32357.0,
    },
    {
      year: 2019,
      pop: 35939.0,
    },
    {
      year: 2010,
      pop: 31915.0,
    },
    {
      year: 2016,
      pop: 35141.0,
    },
    {
      year: 2017,
      pop: 35741.0,
    },
  ],
  historicalincome: [
    {
      year: 2010,
      individualincome: 36803,
      householdincome: 62072,
    },
    {
      year: 2011,
      individualincome: 36654,
      householdincome: 62859,
    },
    {
      year: 2012,
      individualincome: 37769,
      householdincome: 65339,
    },
    {
      year: 2013,
      individualincome: 38610,
      householdincome: 66768,
    },
    {
      year: 2014,
      individualincome: 40329,
      householdincome: 69160,
    },
    {
      year: 2015,
      individualincome: 41510,
      householdincome: 70628,
    },
    {
      year: 2016,
      individualincome: 42343,
      householdincome: 75297,
    },
    {
      year: 2017,
      individualincome: 43824,
      householdincome: 77385,
    },
    {
      year: 2018,
      individualincome: 45392,
      householdincome: 79835,
    },
    {
      year: 2019,
      individualincome: 50338,
      householdincome: 85843,
    },
  ],
  historicalaveragehouse: [
    {
      year: 2016,
      month: 2016,
      housingcost: 527510,
    },
    {
      year: 2012,
      month: 2012,
      housingcost: 382955,
    },
    {
      year: 2011,
      month: 2011,
      housingcost: 383420,
    },
    {
      year: 2015,
      month: 2015,
      housingcost: 492886,
    },
    {
      year: 2015,
      month: 2015,
      housingcost: 476956,
    },
    {
      year: 2016,
      month: 2016,
      housingcost: 514229,
    },
    {
      year: 2015,
      month: 2015,
      housingcost: 510935,
    },
    {
      year: 2018,
      month: 2018,
      housingcost: 601177,
    },
    {
      year: 2016,
      month: 2016,
      housingcost: 512904,
    },
    {
      year: 2014,
      month: 2014,
      housingcost: 464964,
    },
    {
      year: 2011,
      month: 2011,
      housingcost: 394174,
    },
    {
      year: 2013,
      month: 2013,
      housingcost: 416296,
    },
    {
      year: 2019,
      month: 2019,
      housingcost: 627720,
    },
    {
      year: 2013,
      month: 2013,
      housingcost: 442120,
    },
    {
      year: 2017,
      month: 2017,
      housingcost: 556181,
    },
    {
      year: 2016,
      month: 2016,
      housingcost: 524824,
    },
    {
      year: 2020,
      month: 2020,
      housingcost: 631548,
    },
    {
      year: 2018,
      month: 2018,
      housingcost: 614405,
    },
    {
      year: 2012,
      month: 2012,
      housingcost: 386897,
    },
    {
      year: 2019,
      month: 2019,
      housingcost: 625220,
    },
    {
      year: 2010,
      month: 2010,
      housingcost: 401586,
    },
    {
      year: 2011,
      month: 2011,
      housingcost: 397218,
    },
    {
      year: 2017,
      month: 2017,
      housingcost: 552326,
    },
    {
      year: 2014,
      month: 2014,
      housingcost: 467222,
    },
    {
      year: 2013,
      month: 2013,
      housingcost: 419819,
    },
    {
      year: 2012,
      month: 2012,
      housingcost: 395581,
    },
    {
      year: 2018,
      month: 2018,
      housingcost: 605769,
    },
    {
      year: 2018,
      month: 2018,
      housingcost: 618060,
    },
    {
      year: 2015,
      month: 2015,
      housingcost: 506410,
    },
    {
      year: 2016,
      month: 2016,
      housingcost: 520883,
    },
    {
      year: 2015,
      month: 2015,
      housingcost: 484002,
    },
    {
      year: 2019,
      month: 2019,
      housingcost: 625097,
    },
    {
      year: 2013,
      month: 2013,
      housingcost: 405711,
    },
    {
      year: 2015,
      month: 2015,
      housingcost: 502582,
    },
    {
      year: 2013,
      month: 2013,
      housingcost: 447770,
    },
    {
      year: 2020,
      month: 2020,
      housingcost: 635867,
    },
    {
      year: 2016,
      month: 2016,
      housingcost: 512490,
    },
    {
      year: 2018,
      month: 2018,
      housingcost: 592874,
    },
    {
      year: 2013,
      month: 2013,
      housingcost: 436599,
    },
    {
      year: 2011,
      month: 2011,
      housingcost: 389950,
    },
    {
      year: 2012,
      month: 2012,
      housingcost: 384766,
    },
    {
      year: 2017,
      month: 2017,
      housingcost: 547046,
    },
    {
      year: 2010,
      month: 2010,
      housingcost: 400756,
    },
    {
      year: 2014,
      month: 2014,
      housingcost: 447118,
    },
    {
      year: 2010,
      month: 2010,
      housingcost: 400600,
    },
    {
      year: 2017,
      month: 2017,
      housingcost: 570760,
    },
    {
      year: 2017,
      month: 2017,
      housingcost: 548427,
    },
    {
      year: 2011,
      month: 2011,
      housingcost: 384713,
    },
    {
      year: 2011,
      month: 2011,
      housingcost: 396071,
    },
    {
      year: 2013,
      month: 2013,
      housingcost: 422014,
    },
    {
      year: 2019,
      month: 2019,
      housingcost: 623530,
    },
    {
      year: 2013,
      month: 2013,
      housingcost: 411075,
    },
    {
      year: 2018,
      month: 2018,
      housingcost: 610266,
    },
    {
      year: 2018,
      month: 2018,
      housingcost: 619523,
    },
    {
      year: 2020,
      month: 2020,
      housingcost: 629210,
    },
    {
      year: 2011,
      month: 2011,
      housingcost: 386886,
    },
    {
      year: 2012,
      month: 2012,
      housingcost: 397965,
    },
    {
      year: 2015,
      month: 2015,
      housingcost: 488584,
    },
    {
      year: 2019,
      month: 2019,
      housingcost: 628326,
    },
    {
      year: 2014,
      month: 2014,
      housingcost: 467069,
    },
    {
      year: 2015,
      month: 2015,
      housingcost: 490739,
    },
    {
      year: 2015,
      month: 2015,
      housingcost: 507958,
    },
    {
      year: 2017,
      month: 2017,
      housingcost: 590766,
    },
    {
      year: 2012,
      month: 2012,
      housingcost: 381679,
    },
    {
      year: 2018,
      month: 2018,
      housingcost: 620317,
    },
    {
      year: 2010,
      month: 2010,
      housingcost: 405845,
    },
    {
      year: 2012,
      month: 2012,
      housingcost: 389749,
    },
    {
      year: 2017,
      month: 2017,
      housingcost: 562787,
    },
    {
      year: 2010,
      month: 2010,
      housingcost: 398034,
    },
    {
      year: 2016,
      month: 2016,
      housingcost: 534233,
    },
    {
      year: 2010,
      month: 2010,
      housingcost: 403748,
    },
    {
      year: 2012,
      month: 2012,
      housingcost: 392621,
    },
    {
      year: 2014,
      month: 2014,
      housingcost: 447152,
    },
    {
      year: 2017,
      month: 2017,
      housingcost: 565642,
    },
    {
      year: 2014,
      month: 2014,
      housingcost: 451886,
    },
    {
      year: 2020,
      month: 2020,
      housingcost: 632501,
    },
    {
      year: 2014,
      month: 2014,
      housingcost: 468224,
    },
    {
      year: 2013,
      month: 2013,
      housingcost: 446251,
    },
    {
      year: 2014,
      month: 2014,
      housingcost: 448256,
    },
    {
      year: 2014,
      month: 2014,
      housingcost: 466323,
    },
    {
      year: 2010,
      month: 2010,
      housingcost: 397294,
    },
    {
      year: 2012,
      month: 2012,
      housingcost: 381699,
    },
    {
      year: 2017,
      month: 2017,
      housingcost: 581428,
    },
    {
      year: 2019,
      month: 2019,
      housingcost: 626150,
    },
    {
      year: 2015,
      month: 2015,
      housingcost: 490464,
    },
    {
      year: 2016,
      month: 2016,
      housingcost: 513027,
    },
    {
      year: 2011,
      month: 2011,
      housingcost: 385587,
    },
    {
      year: 2014,
      month: 2014,
      housingcost: 471384,
    },
    {
      year: 2011,
      month: 2011,
      housingcost: 385396,
    },
    {
      year: 2017,
      month: 2017,
      housingcost: 569091,
    },
    {
      year: 2019,
      month: 2019,
      housingcost: 619948,
    },
    {
      year: 2015,
      month: 2015,
      housingcost: 491715,
    },
    {
      year: 2010,
      month: 2010,
      housingcost: 402942,
    },
    {
      year: 2020,
      month: 2020,
      housingcost: 639354,
    },
    {
      year: 2011,
      month: 2011,
      housingcost: 385285,
    },
    {
      year: 2016,
      month: 2016,
      housingcost: 531126,
    },
    {
      year: 2013,
      month: 2013,
      housingcost: 426374,
    },
    {
      year: 2014,
      month: 2014,
      housingcost: 458850,
    },
    {
      year: 2015,
      month: 2015,
      housingcost: 498709,
    },
    {
      year: 2014,
      month: 2014,
      housingcost: 466744,
    },
    {
      year: 2011,
      month: 2011,
      housingcost: 389245,
    },
    {
      year: 2018,
      month: 2018,
      housingcost: 619382,
    },
    {
      year: 2019,
      month: 2019,
      housingcost: 623292,
    },
    {
      year: 2010,
      month: 2010,
      housingcost: 398728,
    },
    {
      year: 2016,
      month: 2016,
      housingcost: 539022,
    },
    {
      year: 2012,
      month: 2012,
      housingcost: 393428,
    },
    {
      year: 2013,
      month: 2013,
      housingcost: 423462,
    },
    {
      year: 2018,
      month: 2018,
      housingcost: 596802,
    },
    {
      year: 2019,
      month: 2019,
      housingcost: 627379,
    },
    {
      year: 2010,
      month: 2010,
      housingcost: 404220,
    },
    {
      year: 2010,
      month: 2010,
      housingcost: 406974,
    },
    {
      year: 2010,
      month: 2010,
      housingcost: 406260,
    },
    {
      year: 2017,
      month: 2017,
      housingcost: 575916,
    },
    {
      year: 2012,
      month: 2012,
      housingcost: 402340,
    },
    {
      year: 2020,
      month: 2020,
      housingcost: 629370,
    },
    {
      year: 2011,
      month: 2011,
      housingcost: 392298,
    },
    {
      year: 2020,
      month: 2020,
      housingcost: 645888,
    },
    {
      year: 2020,
      month: 2020,
      housingcost: 635072,
    },
    {
      year: 2016,
      month: 2016,
      housingcost: 515066,
    },
    {
      year: 2018,
      month: 2018,
      housingcost: 618885,
    },
    {
      year: 2019,
      month: 2019,
      housingcost: 624376,
    },
    {
      year: 2018,
      month: 2018,
      housingcost: 619470,
    },
    {
      year: 2013,
      month: 2013,
      housingcost: 430062,
    },
    {
      year: 2016,
      month: 2016,
      housingcost: 542404,
    },
    {
      year: 2019,
      month: 2019,
      housingcost: 626251,
    },
    {
      year: 2019,
      month: 2019,
      housingcost: 626981,
    },
    {
      year: 2017,
      month: 2017,
      housingcost: 586694,
    },
    {
      year: 2012,
      month: 2012,
      housingcost: 382148,
    },
  ],
  historicalweather: [
    {
      month: 'Nov',
      precipitation: 3.35,
      temperature: 40.3,
    },
    {
      month: 'Jan',
      precipitation: 4.4,
      temperature: 28.5,
    },
    {
      month: 'Jul',
      precipitation: 5.1,
      temperature: 76.5,
    },
    {
      month: 'Mar',
      precipitation: 3.06,
      temperature: 35.5,
    },
    {
      month: 'Aug',
      precipitation: 5.08,
      temperature: 72.7,
    },
    {
      month: 'Dec',
      precipitation: 6.48,
      temperature: 32.6,
    },
    {
      month: 'Apr',
      precipitation: 6.96,
      temperature: 50.0,
    },
    {
      month: 'Oct',
      precipitation: 5.93,
      temperature: 54.7,
    },
    {
      month: 'Feb',
      precipitation: 3.56,
      temperature: 30.2,
    },
    {
      month: 'May',
      precipitation: 3.48,
      temperature: 56.4,
    },
    {
      month: 'Sep',
      precipitation: 2.6,
      temperature: 65.3,
    },
    {
      month: 'Jun',
      precipitation: 4.28,
      temperature: 67.7,
    },
  ],
};

export const MainVisual = () => {
  const cityOne = useSelector(state => state.cityOne);
  const cityTwo = useSelector(state => state.cityTwo);

  const household = c1.avgMoney.map(c => {
    return c.householdincome;
  });

  const individual = c1.avgMoney.map(c => {
    return c.individualincome;
  });

  const labels = c1.avgMoney.map(c => {
    return c.year;
  });

  const household2 = c2.historicalincome.map(c => {
    return c.householdincome;
  });

  const individual2 = c2.historicalincome.map(c => {
    return c.individualincome;
  });

  const labels2 = c2.historicalincome.map(c => {
    return c.year;
  });

  const state = {
    labels: labels,
    datasets: [
      {
        label: 'Individual Income',
        backgroundColor: 'rgba(211, 85, 64, .7)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: individual,
      },
      {
        label: 'Household Income',
        backgroundColor: 'rgba(211, 85, 64, .7)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: household,
      },
    ],
  };

  const state2 = {
    labels: labels2,
    datasets: [
      {
        label: 'Individual Income',
        backgroundColor: 'rgba(64, 86, 211, .7)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: individual2,
      },
      {
        label: 'Household Income',
        backgroundColor: 'rgba(64, 86, 211, .7)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: household2,
      },
    ],
  };

  return (
    <>
      <Container>
        <div className="split">
          <article className="graph">
            <Line
              data={state}
              options={{
                title: {
                  display: true,
                  text: 'Average Individual & Household Income',
                  fontSize: 20,
                },
                maintainAspectRatio: false,
                animation: {
                  duration: '1000',
                  easing: 'linear',
                },
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        callback: function(label, index, labels) {
                          return label / 1000 + 'k';
                        },
                        fontSize: 18,
                      },
                      scaleLabel: {
                        display: true,
                        labelString: '1k = 1,000',
                        fontSize: 18,
                      },
                    },
                  ],
                  xAxes: [
                    {
                      ticks: {
                        fontSize: 20,
                      },
                    },
                  ],
                },
                legend: {
                  display: true,
                  position: 'bottom',
                  labels: {
                    fontSize: 20,
                  },
                },
              }}
            />
          </article>

          <h3 className="h3">{c1.citynamestate}</h3>

          <aside className="info">
            <h4 className="infographic">
              {c1.population > 100000 ? (
                <RiBuilding4Line size="30px" />
              ) : (
                <RiHome4Line size="30px" />
              )}{' '}
              &nbsp; Population Total: &nbsp; {c1.population}{' '}
            </h4>

            <h4 className="infographic">
              {c1.averagetemp > 40 ? (
                <FaTemperatureHigh size="30px" />
              ) : (
                <FaTemperatureLow size="30px" />
              )}
              &nbsp; Average Yearly Temperature: {c1.averagetemp.toFixed(1)}
              &deg;
            </h4>

            <h4 className="infographic">
              {c1.averageperc > 4 ? (
                <RiContrastDrop2Line size="30px" />
              ) : (
                <RiDropLine size="30px" />
              )}
              &nbsp; Average Precipitation: {c1.averageperc.toFixed(1)}
              &deg;
            </h4>

            <h4 className="infographic">
              {c1.costoflivingindex > 100 ? (
                <FaArrowCircleUp size="30px" />
              ) : (
                <FaArrowCircleDown size="30px" />
              )}
              &nbsp; Cost of Living Index: {c1.costoflivingindex}%
            </h4>

            <h4 className="infographic">
              <RiTimerLine size="30px" />
              &nbsp; Timezone: {c1.timezone}
            </h4>

            <h4 className="infographic">
              <RiGiftLine size="30px" /> &nbsp; Average Age: {c1.averageage}
            </h4>

            {c1.avgnewcovidcases > 0 ? (
              <h4 className="infographic">
                <RiSurgicalMaskLine size="30px" /> &nbsp; Average New Covid
                Cases: {Math.round(c1.avgnewcovidcases)} per month
              </h4>
            ) : null}

            <div>
              <ul>
                <li>Average Montly Rent Cost: ${c1.rent} </li>
                <li>Average House Cost: ${Math.round(c1.averagehouse)} </li>
              </ul>
            </div>
          </aside>

          <img src={c1.wikiimgurl} width="500px" alt={c1.citynamestate} />
        </div>

        <div className="float">
          vs.
          <br />
          <br />
          <div>
            <p>COMPARE</p>
          </div>
        </div>

        <div className="split">
          <article className="graph">
            <Line
              data={state2}
              options={{
                title: {
                  display: true,
                  text: 'Average Individual & Household Income',
                  fontSize: 20,
                },
                maintainAspectRatio: false,
                animation: {
                  duration: '1000',
                  easing: 'linear',
                },
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        callback: function(label, index, labels) {
                          return label / 1000 + 'k';
                        },
                        fontSize: 18,
                      },
                      scaleLabel: {
                        display: true,
                        labelString: '1k = 1,000',
                        fontSize: 18,
                      },
                    },
                  ],
                  xAxes: [
                    {
                      ticks: {
                        fontSize: 20,
                      },
                    },
                  ],
                },
                legend: {
                  display: true,
                  position: 'bottom',
                  labels: {
                    fontSize: 20,
                  },
                },
              }}
            />
          </article>

          <h3 className="h3">{c2.citynamestate}</h3>

          <aside className="info">
            <h4 className="infographic">
              {c2.population > 100000 ? (
                <RiBuilding4Line size="30px" />
              ) : (
                <RiHome4Line size="30px" />
              )}{' '}
              &nbsp; Population Total: &nbsp; {c2.population}{' '}
            </h4>

            <h4 className="infographic">
              {c1.averagetemp > 40 ? (
                <FaTemperatureHigh size="30px" />
              ) : (
                <FaTemperatureLow size="30px" />
              )}
              &nbsp; Average Yearly Temperature: {c2.averagetemp.toFixed(1)}
              &deg;
            </h4>

            <h4 className="infographic">
              {c2.averageperc > 4 ? (
                <RiContrastDrop2Line size="30px" />
              ) : (
                <RiDropLine size="30px" />
              )}
              &nbsp; Average Precipitation: {c2.averageperc.toFixed(1)}
              &deg;
            </h4>

            <h4 className="infographic">
              {c2.costoflivingindex > 100 ? (
                <FaArrowCircleUp size="30px" />
              ) : (
                <FaArrowCircleDown size="30px" />
              )}
              &nbsp; Cost of Living Index: {c2.costoflivingindex}%
            </h4>

            <h4 className="infographic">
              <RiTimerLine size="30px" />
              &nbsp; Timezone: {c2.timezone}
            </h4>

            <h4 className="infographic">
              <RiGiftLine size="30px" /> &nbsp; Average Age: {c2.averageage}
            </h4>

            {c2.avgnewcovidcases > 0 ? (
              <h4 className="infographic">
                <RiSurgicalMaskLine size="30px" /> &nbsp; Average New Covid
                Cases: {Math.round(c2.avgnewcovidcases)} per month
              </h4>
            ) : null}

            <div>
              <ul>
                <li>Average Montly Rent Cost: ${c2.rent} </li>
                <li>Average House Cost: ${Math.round(c2.averagehouse)} </li>
              </ul>
            </div>
          </aside>
          <img src={c2.wikiimgurl} width="500px" alt={c2.citynamestate} />
        </div>
      </Container>

      <Container>
        <div className="split">
          {cityOne ? (
            <div>
              {/* 
                                <img src={cityOne.img} alt={cityOne.imagAlt} size='????'>
                                <div>
                                    <Graph
                                        cityOne.details.map(dets => {
                                            return (
                                                <line src={} />
                                                <line src={} />
                                            )
                                        })
                                    />
                                </div>
                                <div>
                                        <Details 
                                            <h3></h3>
                                            <h3></h3>
                                            <h3></h3>
                                        />
                                </div>  
                                */}
            </div>
          ) : (
            <div className="icons">
              <FaRegPlusSquare size="50px" />
            </div>
          )}
        </div>

        <div className="float">
          vs.
          <br />
          <br />
          <div>
            <p>COMPARE</p>
          </div>
        </div>

        <div className="split">
          {cityTwo ? (
            <div>
              {/* 
                                <img src={cityTwo.img} alt={cityTwo.imagAlt} size='????'>
                                <div>
                                    <Graph
                                        cityTwo.details.map(dets => {
                                            return (
                                                <line src={} />
                                                <line src={} />
                                            )
                                        })
                                    />
                                </div>
                                <div>
                                        <Details 
                                            <h3></h3>
                                            <h3></h3>
                                            <h3></h3>
                                        />
                                </div>  
                                */}
            </div>
          ) : (
            <div className="icons">
              <FaRegPlusSquare size="50px" />
            </div>
          )}
        </div>
      </Container>
    </>
  );
};

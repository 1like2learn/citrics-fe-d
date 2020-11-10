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
  RiBankFill,
  RiBuilding4Line,
  RiContrastDrop2Line,
  RiDropLine,
  RiGiftLine,
  RiHome4Line,
  RiMoneyDollarBoxLine,
  RiSurgicalMaskLine,
  RiTimerLine,
} from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100vw;
  min-width: 100%;
  align-content: center;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  font-size: 1rem;
  overflow-x: hidden;

  .h3 {
    margin: 2% auto 0;
    font-size: 1.75rem;
    font-family: 'Montserrat', sans-serif;
  }

  .split {
    flex-direction: column;
    display: flex;
    margin: 1% auto;
    align-items: center;
    justify-content: flex-end;
    width: 50vw;
    height: 100%;

    h2 {
      font-family: 'Norwester', sans-serif;
      font-size: 2.25rem;
    }
  }

  .float {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 1%;
    font-size: 2.5rem;
    text-align: center;
    align-items: center;
    color: #000000;
    margin: 15% 0;

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
    width: 90%;
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
    height: 50vh;
    width: 40vw;
    text-align: center;
    display: flex;
    font-size: 5rem;
  }

  .infographic {
    width: 30%;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    margin: 0.75% auto;
    text-align: center;
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
  cityid: 199131,
  citynamestate: 'Los Angeles, CA',
  statecode: 'CA',
  timezone: 'UTC\u22128 Pacific',
  latitude: 34.0536909,
  logitude: -118.2427666,
  fpis: '06-4400',
  gnis: null,
  wikiimgurl:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Los_Angeles_with_Mount_Baldy.jpg/560px-Los_Angeles_with_Mount_Baldy.jpg',
  website: 'www.lacity.org ',
  population: 3999759.0,
  densitymisq: 8485.74,
  densitykmsq: 3276.37,
  averageage: 35.8,
  householdincome: 60197.0,
  individualincome: 33496.0,
  averagehouse: 647000.0,
  rent: 1397.0,
  costoflivingindex: 145.8,
  acastatus: 'Adopted',
  averagetemp: 65.60833333333333,
  averageperc: 1.9216666666666669,
  avgnewcovidcases: 'NaN',
  zipcodes: [
    { code: '\\nList\\n90001\u201390084' },
    { code: '90086\u201390089' },
    { code: '90091' },
    { code: '90093\u201390097' },
    { code: '90099' },
    { code: '90101\u201390103' },
    { code: '90174' },
    { code: '90185' },
    { code: '90189' },
    { code: '90291\u201390293' },
    { code: '91040\u201391043' },
    { code: '91303\u201391308' },
    { code: '91311' },
    { code: '91316' },
    { code: '91324\u201391328' },
    { code: '91330' },
    { code: '91331' },
    { code: '91335' },
    { code: '91340' },
    { code: '91342\u201391349' },
    { code: '91352\u201391353' },
    { code: '91356\u201391357' },
    { code: '91364\u201391367' },
    { code: '91401\u201391499' },
    { code: '91504\u201391505' },
    { code: '91601\u20139160915' },
    { code: '\\n' },
  ],
  counties: 'Los Angeles',
  populationhist: [
    { year: 2010, pop: 3792621.0 },
    { year: 2011, pop: 3820876.0 },
    { year: 2012, pop: 3851202.0 },
    { year: 2013, pop: 3881622.0 },
    { year: 2014, pop: 3909901.0 },
    { year: 2015, pop: 3938568.0 },
    { year: 2016, pop: 3963226.0 },
    { year: 2017, pop: 3975788.0 },
    { year: 2018, pop: 3977596.0 },
    { year: 2019, pop: 3979576.0 },
  ],
  historicalincome: [
    { year: 2010, individualincome: 38460, householdincome: 57708 },
    { year: 2011, individualincome: 37584, householdincome: 57287 },
    { year: 2012, individualincome: 39504, householdincome: 58328 },
    { year: 2013, individualincome: 40319, householdincome: 60190 },
    { year: 2014, individualincome: 40842, householdincome: 61933 },
    { year: 2015, individualincome: 42068, householdincome: 64500 },
    { year: 2016, individualincome: 44115, householdincome: 67739 },
    { year: 2017, individualincome: 46599, householdincome: 71805 },
    { year: 2018, individualincome: 48563, householdincome: 75277 },
    { year: 2019, individualincome: 51676, householdincome: 80440 },
  ],
  historicalaveragehouse: [
    { year: 2010, month: 1, housingcost: 439447 },
    { year: 2010, month: 2, housingcost: 437254 },
    { year: 2010, month: 3, housingcost: 436814 },
    { year: 2010, month: 4, housingcost: 437860 },
    { year: 2010, month: 5, housingcost: 441781 },
    { year: 2010, month: 6, housingcost: 440185 },
    { year: 2010, month: 7, housingcost: 438497 },
    { year: 2010, month: 8, housingcost: 434700 },
    { year: 2010, month: 9, housingcost: 431774 },
    { year: 2010, month: 10, housingcost: 428473 },
    { year: 2010, month: 11, housingcost: 424073 },
    { year: 2010, month: 12, housingcost: 421494 },
    { year: 2011, month: 1, housingcost: 419847 },
    { year: 2011, month: 2, housingcost: 419482 },
    { year: 2011, month: 3, housingcost: 416985 },
    { year: 2011, month: 4, housingcost: 414319 },
    { year: 2011, month: 5, housingcost: 408965 },
    { year: 2011, month: 6, housingcost: 408002 },
    { year: 2011, month: 7, housingcost: 406625 },
    { year: 2011, month: 8, housingcost: 405298 },
    { year: 2011, month: 9, housingcost: 402306 },
    { year: 2011, month: 10, housingcost: 399150 },
    { year: 2011, month: 11, housingcost: 398832 },
    { year: 2011, month: 12, housingcost: 397403 },
    { year: 2012, month: 1, housingcost: 396836 },
    { year: 2012, month: 2, housingcost: 395759 },
    { year: 2012, month: 3, housingcost: 395234 },
    { year: 2012, month: 4, housingcost: 395298 },
    { year: 2012, month: 5, housingcost: 396841 },
    { year: 2012, month: 6, housingcost: 398930 },
    { year: 2012, month: 7, housingcost: 401451 },
    { year: 2012, month: 8, housingcost: 403893 },
    { year: 2012, month: 9, housingcost: 407545 },
    { year: 2012, month: 10, housingcost: 413169 },
    { year: 2012, month: 11, housingcost: 418017 },
    { year: 2012, month: 12, housingcost: 424751 },
    { year: 2013, month: 1, housingcost: 429744 },
    { year: 2013, month: 2, housingcost: 438236 },
    { year: 2013, month: 3, housingcost: 446911 },
    { year: 2013, month: 4, housingcost: 457616 },
    { year: 2013, month: 5, housingcost: 466421 },
    { year: 2013, month: 6, housingcost: 475145 },
    { year: 2013, month: 7, housingcost: 483888 },
    { year: 2013, month: 8, housingcost: 494942 },
    { year: 2013, month: 9, housingcost: 504384 },
    { year: 2013, month: 10, housingcost: 510936 },
    { year: 2013, month: 11, housingcost: 515754 },
    { year: 2013, month: 12, housingcost: 518461 },
    { year: 2014, month: 1, housingcost: 522860 },
    { year: 2014, month: 2, housingcost: 523540 },
    { year: 2014, month: 3, housingcost: 525221 },
    { year: 2014, month: 4, housingcost: 524907 },
    { year: 2014, month: 5, housingcost: 526398 },
    { year: 2014, month: 6, housingcost: 527087 },
    { year: 2014, month: 7, housingcost: 529749 },
    { year: 2014, month: 8, housingcost: 529409 },
    { year: 2014, month: 9, housingcost: 529752 },
    { year: 2014, month: 10, housingcost: 529835 },
    { year: 2014, month: 11, housingcost: 533060 },
    { year: 2014, month: 12, housingcost: 536369 },
    { year: 2015, month: 1, housingcost: 540770 },
    { year: 2015, month: 2, housingcost: 545462 },
    { year: 2015, month: 3, housingcost: 550008 },
    { year: 2015, month: 4, housingcost: 551627 },
    { year: 2015, month: 5, housingcost: 554491 },
    { year: 2015, month: 6, housingcost: 557255 },
    { year: 2015, month: 7, housingcost: 559571 },
    { year: 2015, month: 8, housingcost: 562283 },
    { year: 2015, month: 9, housingcost: 565193 },
    { year: 2015, month: 10, housingcost: 569886 },
    { year: 2015, month: 11, housingcost: 573642 },
    { year: 2015, month: 12, housingcost: 579216 },
    { year: 2016, month: 1, housingcost: 582365 },
    { year: 2016, month: 2, housingcost: 586197 },
    { year: 2016, month: 3, housingcost: 588492 },
    { year: 2016, month: 4, housingcost: 594689 },
    { year: 2016, month: 5, housingcost: 598774 },
    { year: 2016, month: 6, housingcost: 603456 },
    { year: 2016, month: 7, housingcost: 605783 },
    { year: 2016, month: 8, housingcost: 609825 },
    { year: 2016, month: 9, housingcost: 614680 },
    { year: 2016, month: 10, housingcost: 620009 },
    { year: 2016, month: 11, housingcost: 622959 },
    { year: 2016, month: 12, housingcost: 624786 },
    { year: 2017, month: 1, housingcost: 628294 },
    { year: 2017, month: 2, housingcost: 631427 },
    { year: 2017, month: 3, housingcost: 635070 },
    { year: 2017, month: 4, housingcost: 637393 },
    { year: 2017, month: 5, housingcost: 642084 },
    { year: 2017, month: 6, housingcost: 646086 },
    { year: 2017, month: 7, housingcost: 650858 },
    { year: 2017, month: 8, housingcost: 654837 },
    { year: 2017, month: 9, housingcost: 658634 },
    { year: 2017, month: 10, housingcost: 661764 },
    { year: 2017, month: 11, housingcost: 667512 },
    { year: 2017, month: 12, housingcost: 673141 },
    { year: 2018, month: 1, housingcost: 678422 },
    { year: 2018, month: 2, housingcost: 683876 },
    { year: 2018, month: 3, housingcost: 689956 },
    { year: 2018, month: 4, housingcost: 695163 },
    { year: 2018, month: 5, housingcost: 698885 },
    { year: 2018, month: 6, housingcost: 702314 },
    { year: 2018, month: 7, housingcost: 705315 },
    { year: 2018, month: 8, housingcost: 706598 },
    { year: 2018, month: 9, housingcost: 707110 },
    { year: 2018, month: 10, housingcost: 708120 },
    { year: 2018, month: 11, housingcost: 708970 },
    { year: 2018, month: 12, housingcost: 708244 },
    { year: 2019, month: 1, housingcost: 707563 },
    { year: 2019, month: 2, housingcost: 704230 },
    { year: 2019, month: 3, housingcost: 701150 },
    { year: 2019, month: 4, housingcost: 700470 },
    { year: 2019, month: 5, housingcost: 705092 },
    { year: 2019, month: 6, housingcost: 711511 },
    { year: 2019, month: 7, housingcost: 712553 },
    { year: 2019, month: 8, housingcost: 712147 },
    { year: 2019, month: 9, housingcost: 711833 },
    { year: 2019, month: 10, housingcost: 715554 },
    { year: 2019, month: 11, housingcost: 718081 },
    { year: 2019, month: 12, housingcost: 722161 },
    { year: 2020, month: 1, housingcost: 726321 },
    { year: 2020, month: 2, housingcost: 732885 },
    { year: 2020, month: 3, housingcost: 739346 },
    { year: 2020, month: 4, housingcost: 744932 },
    { year: 2020, month: 5, housingcost: 747136 },
    { year: 2020, month: 6, housingcost: 748717 },
    { year: 2020, month: 7, housingcost: 755233 },
    { year: 2020, month: 8, housingcost: 764528 },
  ],
  covid: [],
  historicalweather: [
    { month: 'Sep', precipitation: 0.05, temperature: 76.0 },
    { month: 'Mar', precipitation: 2.3, temperature: 60.3 },
    { month: 'Nov', precipitation: 1.91, temperature: 64.4 },
    { month: 'Apr', precipitation: 0.03, temperature: 65.1 },
    { month: 'Dec', precipitation: 4.79, temperature: 57.9 },
    { month: 'Jan', precipitation: 5.0, temperature: 57.9 },
    { month: 'Jun', precipitation: 0.06, temperature: 68.8 },
    { month: 'Oct', precipitation: 0.0, temperature: 71.3 },
    { month: 'Jul', precipitation: 0.0, temperature: 74.1 },
    { month: 'May', precipitation: 1.05, temperature: 63.0 },
    { month: 'Feb', precipitation: 7.87, temperature: 53.5 },
    { month: 'Aug', precipitation: 0.0, temperature: 75.0 },
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
        backgroundColor: '#d35540',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: individual,
        pointBorderWidth: 1,
        pointBackgroundColor: '#000000',
      },
      {
        label: 'Household Income',
        backgroundColor: '#dd7a6a',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: household,
        pointBorderWidth: 1,
        pointBackgroundColor: '#000000',
      },
      {
        label: '',
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: 'rgba(0,0,0,0)',
        borderWidth: 0,
        data: [0, 100000],
        pointBorderWidth: 1,
        pointBackgroundColor: '#000000',
        pointRadius: 0,
      },
    ],
  };

  const state2 = {
    labels: labels2,
    datasets: [
      {
        label: 'Individual Income',
        backgroundColor: '#218921',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: individual2,
        pointBorderWidth: 1,
        pointBackgroundColor: '#000000',
      },
      {
        label: 'Household Income',
        backgroundColor: '#32cd32',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: household2,
        pointBorderWidth: 1,
        pointBackgroundColor: '#000000',
      },
      {
        label: '',
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: 'rgba(0,0,0,0)',
        borderWidth: 0,
        data: [0, 100000],
        pointBorderWidth: 1,
        pointBackgroundColor: '#000000',
        pointRadius: 0,
      },
    ],
  };

  const formatNumber = num => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  };

  return (
    <>
      <Container>
        <div className="split">
          <h2>{c1.citynamestate}</h2>
          <article className="graph">
            <Line
              data={state}
              options={{
                title: {
                  display: true,
                  text: 'Average Individual & Household Income',
                  fontSize: 20,
                  fontFamily: 'Roboto',
                  fontColor: '#000000',
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
                        callback: function(label) {
                          if (label === 0) {
                            return '0';
                          } else {
                            return '$' + formatNumber(label);
                          }
                        },
                        fontSize: 18,
                        fontFamily: 'Montserrat',
                        fontColor: '#000000',
                      },
                      scaleLabel: {
                        display: true,
                        fontSize: 18,
                        fontFamily: 'Montserrat',
                        fontColor: '#000000',
                      },
                    },
                  ],
                  xAxes: [
                    {
                      ticks: {
                        fontSize: 20,
                        fontFamily: 'Montserrat',
                        fontColor: '#000000',
                      },
                    },
                  ],
                },
                legend: {
                  display: true,
                  position: 'bottom',
                  labels: {
                    fontSize: 20,
                    fontFamily: 'Montserrat',
                    fontColor: '#000000',
                  },
                },
              }}
            />
          </article>

          <aside className="info">
            <h4 className="infographic">
              {c1.population > 500000 ? (
                <FaCity size="30px" />
              ) : (
                <span>
                  {c1.population > 100000 ? (
                    <RiBuilding4Line size="30px" />
                  ) : (
                    <RiHome4Line size="30px" />
                  )}
                </span>
              )}
              &nbsp; <strong>Pop. Total:</strong> &nbsp;{' '}
              {formatNumber(c1.population)}{' '}
            </h4>

            <h4 className="infographic">
              {c1.averagetemp > 40 ? (
                <FaTemperatureHigh size="30px" />
              ) : (
                <FaTemperatureLow size="30px" />
              )}
              &nbsp; <strong>Avg Temp:</strong> &nbsp;{' '}
              {c1.averagetemp.toFixed(1)}
              &deg;
            </h4>

            <h4 className="infographic">
              {c1.averageperc > 4 ? (
                <RiContrastDrop2Line size="30px" />
              ) : (
                <RiDropLine size="30px" />
              )}
              &nbsp; <strong>Avg Prec.:</strong> &nbsp;{' '}
              {c1.averageperc.toFixed(1)}
            </h4>

            <h4 className="infographic">
              {c1.costoflivingindex > 100 ? (
                <FaArrowCircleUp size="30px" />
              ) : (
                <FaArrowCircleDown size="30px" />
              )}
              &nbsp; <strong>CLI:</strong> &nbsp; {c1.costoflivingindex}%
            </h4>

            <h4 className="infographic">
              <RiTimerLine size="30px" />
              &nbsp; <strong>TZ:</strong> &nbsp; {c1.timezone}
            </h4>

            <h4 className="infographic">
              <RiGiftLine size="30px" /> &nbsp; <strong>Avg Age:</strong> &nbsp;
              {Math.round(c1.averageage)}
            </h4>

            <h4 className="infographic">
              {' '}
              <RiMoneyDollarBoxLine size="30px" /> &nbsp;{' '}
              <strong>Avg. Rent:</strong> &nbsp; ${formatNumber(c1.rent)}{' '}
            </h4>
            <h4 className="infographic">
              {' '}
              <RiBankFill size="30px" /> &nbsp;{' '}
              <strong>Avg House Price:</strong> &nbsp; $
              {formatNumber(Math.round(c1.averagehouse))}{' '}
            </h4>

            {c1.avgnewcovidcases > 0 ? (
              <h4 className="infographic">
                <RiSurgicalMaskLine size="30px" /> &nbsp;{' '}
                <strong>Avg Covid Cases:</strong>{' '}
                {formatNumber(Math.round(c1.avgnewcovidcases))}/month
              </h4>
            ) : null}
          </aside>

          {/* <img src={c1.wikiimgurl} width="500px" alt={c1.citynamestate} /> */}
        </div>

        <div className="float">
          vs.
          <div>
            <p className="txtShdw">COMPARE</p>
          </div>
        </div>

        <div className="split">
          <h2>{c2.citynamestate}</h2>
          <article className="graph">
            <Line
              data={state2}
              options={{
                title: {
                  display: true,
                  text: 'Average Individual & Household Income',
                  fontSize: 20,
                  fontFamily: 'Roboto',
                  fontColor: '#000000',
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
                        callback: function(label) {
                          if (label === 0) {
                            return '0';
                          } else {
                            return '$' + formatNumber(label);
                          }
                        },
                        fontSize: 18,
                        fontFamily: 'Montserrat',
                        fontColor: '#000000',
                      },
                      scaleLabel: {
                        display: true,
                        fontSize: 18,
                        fontFamily: 'Montserrat',
                        fontColor: '#000000',
                      },
                    },
                  ],
                  xAxes: [
                    {
                      ticks: {
                        fontSize: 20,
                        fontFamily: 'Montserrat',
                        fontColor: '#000000',
                      },
                    },
                  ],
                },
                legend: {
                  display: true,
                  position: 'bottom',
                  labels: {
                    fontSize: 20,
                    fontFamily: 'Montserrat',
                    fontColor: '#000000',
                  },
                },
              }}
            />
          </article>

          <aside className="info">
            <h4 className="infographic">
              {c2.population > 250000 ? (
                <FaCity size="30px" />
              ) : (
                <span>
                  (
                  {c2.population > 100000 ? (
                    <RiBuilding4Line size="30px" />
                  ) : (
                    <RiHome4Line size="30px" />
                  )}
                  )
                </span>
              )}
              &nbsp; <strong>Pop. Total:</strong> &nbsp;{' '}
              {formatNumber(c2.population)}{' '}
            </h4>

            <h4 className="infographic">
              {c2.averagetemp > 40 ? (
                <FaTemperatureHigh size="30px" />
              ) : (
                <FaTemperatureLow size="30px" />
              )}
              &nbsp; <strong>Avg Temp:</strong> &nbsp;{' '}
              {c2.averagetemp.toFixed(1)}
              &deg;
            </h4>

            <h4 className="infographic">
              {c2.averageperc > 4 ? (
                <RiContrastDrop2Line size="30px" />
              ) : (
                <RiDropLine size="30px" />
              )}
              &nbsp; <strong>Avg Perc.:</strong> &nbsp;{' '}
              {c2.averageperc.toFixed(1)}
            </h4>

            <h4 className="infographic">
              {c2.costoflivingindex > 100 ? (
                <FaArrowCircleUp size="30px" />
              ) : (
                <FaArrowCircleDown size="30px" />
              )}
              &nbsp; <strong>CLI:</strong> &nbsp; {c2.costoflivingindex}%
            </h4>

            <h4 className="infographic">
              <RiTimerLine size="30px" />
              &nbsp; <strong>TZ:</strong> &nbsp; {c2.timezone}
            </h4>

            <h4 className="infographic">
              <RiGiftLine size="30px" /> &nbsp; <strong>Avg Age:</strong> &nbsp;{' '}
              {Math.round(c2.averageage)}
            </h4>

            <h4 className="infographic">
              {' '}
              <RiMoneyDollarBoxLine size="30px" /> &nbsp;{' '}
              <strong>Avg. Rent:</strong>&nbsp; ${formatNumber(c2.rent)}{' '}
            </h4>
            <h4 className="infographic">
              {' '}
              <RiBankFill size="30px" /> &nbsp;{' '}
              <strong>Avg House Price:</strong>&nbsp; $
              {formatNumber(Math.round(c2.averagehouse))}{' '}
            </h4>

            {c2.avgnewcovidcases > 0 ? (
              <h4 className="infographic">
                <RiSurgicalMaskLine size="30px" /> &nbsp;{' '}
                <strong>Avg Covid Cases:</strong> &nbsp;{' '}
                {formatNumber(Math.round(c2.avgnewcovidcases))}/month
              </h4>
            ) : null}
          </aside>
          {/* <img src={c2.wikiimgurl} width="500px" alt={c2.citynamestate} /> */}
        </div>
      </Container>
    </>
  );
};

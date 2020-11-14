import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';
import CityDetails from '../../common/CityDetails';
import ComparisonCard from './ComparisonCard.js';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  max-width: 100vw;
  min-width: 100%;
  height: 100%;
  font-family: 'Roboto', sans-serif;
  align-content: center;
  font-size: 1rem;
  overflow: hidden;
  /* new styling */

  .vs-text {
    /* width: inherit;
      height: inherit; */
    position: absolute;
    font-size: 4rem;
    top: 30%;
    color: #fff;
    background-color: #d3553fcc;
    border-radius: 50%;
    width: 135px;
    height: 135px;
    text-align: center;
    line-height: 120px;
  }

  .compare-city-selected-container {
    display: flex;
    font-family: 'Roboto', sans-serif;
  }
  /* end of new styling */
  /* .h3 {
    margin: 2% auto 0;
    font-size: 1.75rem;
    font-family: 'Montserrat', sans-serif;
  }

  .split {
    flex-direction: column;
    display: flex;
    margin: 1% auto;
    align-items: center;
    justify-content: center;
    width: 50vw;
    height: 100%; */

  /* h2 {
      font-family: 'Norwester', sans-serif;
      font-size: 2.25rem;
    }
  } */

  /* .float {
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
  } */

  /* .info {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    margin: 1%;
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
    height: 35vh;
    width: 40vw;
    text-align: center;
    display: flex;
    font-size: 5rem;
  } */
`;

/*
This is hard coded city data for Tampa, FL to test the graphs with.
*/

let c1 = {
  cityid: 192531,
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
  zipcodes: [
    {
      code: '33672–33675',
    },
    {
      code: '33633–33635',
    },
    {
      code: '33660–33664',
    },
    {
      code: '33677',
    },
    {
      code: '33601–33626',
    },
    {
      code: '33646',
    },
    {
      code: '33684–33689',
    },
    {
      code: '33655',
    },
    {
      code: '336948',
    },
    {
      code: '33650',
    },
    {
      code: '33679–33682',
    },
    {
      code: '33637',
    },
    {
      code: '33647',
    },
    {
      code: '33629–33631',
    },
  ],
  counties: [
    {
      name: 'Hillsborough',
    },
  ],
  populationhist: [
    {
      year: 2019,
      pop: 399700.0,
    },
    {
      year: 2013,
      pop: 355172.0,
    },
    {
      year: 2018,
      pop: 397232.0,
    },
    {
      year: 2011,
      pop: 342589.0,
    },
    {
      year: 2016,
      pop: 380344.0,
    },
    {
      year: 2014,
      pop: 362664.0,
    },
    {
      year: 2017,
      pop: 391026.0,
    },
    {
      year: 2012,
      pop: 348090.0,
    },
    {
      year: 2010,
      pop: 335709.0,
    },
    {
      year: 2015,
      pop: 371464.0,
    },
  ],
  historicalincome: [
    {
      year: 2017,
      individualincome: 33962,
      householdincome: 52594,
    },
    {
      year: 2019,
      individualincome: 37292,
      householdincome: 59227,
    },
    {
      year: 2014,
      individualincome: 30563,
      householdincome: 47463,
    },
    {
      year: 2012,
      individualincome: 29072,
      householdincome: 45040,
    },
    {
      year: 2018,
      individualincome: 34769,
      householdincome: 55462,
    },
    {
      year: 2016,
      individualincome: 32389,
      householdincome: 50860,
    },
    {
      year: 2013,
      individualincome: 29772,
      householdincome: 46036,
    },
    {
      year: 2015,
      individualincome: 31445,
      householdincome: 49426,
    },
    {
      year: 2011,
      individualincome: 28348,
      householdincome: 44299,
    },
    {
      year: 2010,
      individualincome: 28922,
      householdincome: 44409,
    },
  ],
  historicalaveragehouse: [
    {
      year: 2010,
      month: 2010,
      housingcost: 141548,
    },
    {
      year: 2018,
      month: 2018,
      housingcost: 226495,
    },
    {
      year: 2019,
      month: 2019,
      housingcost: 239266,
    },
    {
      year: 2019,
      month: 2019,
      housingcost: 246850,
    },
    {
      year: 2013,
      month: 2013,
      housingcost: 141907,
    },
    {
      year: 2011,
      month: 2011,
      housingcost: 116576,
    },
    {
      year: 2017,
      month: 2017,
      housingcost: 214492,
    },
    {
      year: 2018,
      month: 2018,
      housingcost: 237388,
    },
    {
      year: 2015,
      month: 2015,
      housingcost: 165244,
    },
    {
      year: 2017,
      month: 2017,
      housingcost: 213136,
    },
    {
      year: 2016,
      month: 2016,
      housingcost: 182864,
    },
    {
      year: 2016,
      month: 2016,
      housingcost: 189495,
    },
    {
      year: 2013,
      month: 2013,
      housingcost: 129078,
    },
    {
      year: 2011,
      month: 2011,
      housingcost: 116424,
    },
    {
      year: 2020,
      month: 2020,
      housingcost: 252806,
    },
    {
      year: 2012,
      month: 2012,
      housingcost: 125647,
    },
    {
      year: 2012,
      month: 2012,
      housingcost: 122428,
    },
    {
      year: 2010,
      month: 2010,
      housingcost: 147561,
    },
    {
      year: 2015,
      month: 2015,
      housingcost: 176643,
    },
    {
      year: 2018,
      month: 2018,
      housingcost: 238494,
    },
    {
      year: 2018,
      month: 2018,
      housingcost: 234491,
    },
    {
      year: 2011,
      month: 2011,
      housingcost: 128131,
    },
    {
      year: 2014,
      month: 2014,
      housingcost: 161337,
    },
    {
      year: 2015,
      month: 2015,
      housingcost: 174792,
    },
    {
      year: 2016,
      month: 2016,
      housingcost: 198941,
    },
    {
      year: 2010,
      month: 2010,
      housingcost: 139222,
    },
    {
      year: 2011,
      month: 2011,
      housingcost: 116666,
    },
    {
      year: 2011,
      month: 2011,
      housingcost: 116735,
    },
    {
      year: 2019,
      month: 2019,
      housingcost: 239772,
    },
    {
      year: 2017,
      month: 2017,
      housingcost: 211695,
    },
    {
      year: 2018,
      month: 2018,
      housingcost: 229860,
    },
    {
      year: 2019,
      month: 2019,
      housingcost: 244704,
    },
    {
      year: 2015,
      month: 2015,
      housingcost: 163803,
    },
    {
      year: 2014,
      month: 2014,
      housingcost: 152605,
    },
    {
      year: 2020,
      month: 2020,
      housingcost: 251112,
    },
    {
      year: 2014,
      month: 2014,
      housingcost: 156802,
    },
    {
      year: 2013,
      month: 2013,
      housingcost: 145814,
    },
    {
      year: 2015,
      month: 2015,
      housingcost: 170821,
    },
    {
      year: 2017,
      month: 2017,
      housingcost: 204184,
    },
    {
      year: 2011,
      month: 2011,
      housingcost: 117230,
    },
    {
      year: 2017,
      month: 2017,
      housingcost: 209264,
    },
    {
      year: 2013,
      month: 2013,
      housingcost: 139926,
    },
    {
      year: 2015,
      month: 2015,
      housingcost: 162797,
    },
    {
      year: 2012,
      month: 2012,
      housingcost: 124968,
    },
    {
      year: 2020,
      month: 2020,
      housingcost: 264815,
    },
    {
      year: 2015,
      month: 2015,
      housingcost: 169278,
    },
    {
      year: 2018,
      month: 2018,
      housingcost: 229122,
    },
    {
      year: 2010,
      month: 2010,
      housingcost: 145890,
    },
    {
      year: 2016,
      month: 2016,
      housingcost: 194181,
    },
    {
      year: 2017,
      month: 2017,
      housingcost: 200993,
    },
    {
      year: 2020,
      month: 2020,
      housingcost: 249556,
    },
    {
      year: 2010,
      month: 2010,
      housingcost: 148351,
    },
    {
      year: 2015,
      month: 2015,
      housingcost: 166806,
    },
    {
      year: 2019,
      month: 2019,
      housingcost: 239897,
    },
    {
      year: 2014,
      month: 2014,
      housingcost: 159856,
    },
    {
      year: 2016,
      month: 2016,
      housingcost: 191838,
    },
    {
      year: 2017,
      month: 2017,
      housingcost: 219127,
    },
    {
      year: 2020,
      month: 2020,
      housingcost: 259235,
    },
    {
      year: 2017,
      month: 2017,
      housingcost: 206750,
    },
    {
      year: 2019,
      month: 2019,
      housingcost: 240396,
    },
    {
      year: 2010,
      month: 2010,
      housingcost: 143409,
    },
    {
      year: 2014,
      month: 2014,
      housingcost: 155542,
    },
    {
      year: 2013,
      month: 2013,
      housingcost: 137979,
    },
    {
      year: 2016,
      month: 2016,
      housingcost: 181198,
    },
    {
      year: 2012,
      month: 2012,
      housingcost: 123901,
    },
    {
      year: 2013,
      month: 2013,
      housingcost: 148736,
    },
    {
      year: 2014,
      month: 2014,
      housingcost: 156530,
    },
    {
      year: 2017,
      month: 2017,
      housingcost: 217772,
    },
    {
      year: 2015,
      month: 2015,
      housingcost: 164721,
    },
    {
      year: 2011,
      month: 2011,
      housingcost: 121210,
    },
    {
      year: 2012,
      month: 2012,
      housingcost: 116042,
    },
    {
      year: 2013,
      month: 2013,
      housingcost: 133878,
    },
    {
      year: 2019,
      month: 2019,
      housingcost: 244160,
    },
    {
      year: 2013,
      month: 2013,
      housingcost: 131008,
    },
    {
      year: 2013,
      month: 2013,
      housingcost: 143836,
    },
    {
      year: 2012,
      month: 2012,
      housingcost: 120844,
    },
    {
      year: 2010,
      month: 2010,
      housingcost: 145014,
    },
    {
      year: 2010,
      month: 2010,
      housingcost: 132230,
    },
    {
      year: 2018,
      month: 2018,
      housingcost: 231041,
    },
    {
      year: 2013,
      month: 2013,
      housingcost: 147635,
    },
    {
      year: 2018,
      month: 2018,
      housingcost: 236173,
    },
    {
      year: 2020,
      month: 2020,
      housingcost: 254733,
    },
    {
      year: 2010,
      month: 2010,
      housingcost: 137001,
    },
    {
      year: 2011,
      month: 2011,
      housingcost: 125949,
    },
    {
      year: 2011,
      month: 2011,
      housingcost: 123525,
    },
    {
      year: 2014,
      month: 2014,
      housingcost: 154318,
    },
    {
      year: 2014,
      month: 2014,
      housingcost: 149628,
    },
    {
      year: 2013,
      month: 2013,
      housingcost: 135887,
    },
    {
      year: 2010,
      month: 2010,
      housingcost: 145651,
    },
    {
      year: 2016,
      month: 2016,
      housingcost: 184971,
    },
    {
      year: 2019,
      month: 2019,
      housingcost: 245610,
    },
    {
      year: 2020,
      month: 2020,
      housingcost: 261721,
    },
    {
      year: 2019,
      month: 2019,
      housingcost: 241641,
    },
    {
      year: 2012,
      month: 2012,
      housingcost: 116020,
    },
    {
      year: 2015,
      month: 2015,
      housingcost: 167866,
    },
    {
      year: 2015,
      month: 2015,
      housingcost: 172979,
    },
    {
      year: 2018,
      month: 2018,
      housingcost: 232608,
    },
    {
      year: 2020,
      month: 2020,
      housingcost: 256716,
    },
    {
      year: 2019,
      month: 2019,
      housingcost: 242553,
    },
    {
      year: 2019,
      month: 2019,
      housingcost: 248220,
    },
    {
      year: 2016,
      month: 2016,
      housingcost: 179577,
    },
    {
      year: 2017,
      month: 2017,
      housingcost: 216381,
    },
    {
      year: 2016,
      month: 2016,
      housingcost: 195487,
    },
    {
      year: 2012,
      month: 2012,
      housingcost: 118634,
    },
    {
      year: 2012,
      month: 2012,
      housingcost: 119554,
    },
    {
      year: 2014,
      month: 2014,
      housingcost: 157370,
    },
    {
      year: 2010,
      month: 2010,
      housingcost: 146903,
    },
    {
      year: 2012,
      month: 2012,
      housingcost: 117750,
    },
    {
      year: 2016,
      month: 2016,
      housingcost: 186773,
    },
    {
      year: 2011,
      month: 2011,
      housingcost: 130254,
    },
    {
      year: 2011,
      month: 2011,
      housingcost: 118283,
    },
    {
      year: 2014,
      month: 2014,
      housingcost: 150748,
    },
    {
      year: 2018,
      month: 2018,
      housingcost: 228277,
    },
    {
      year: 2018,
      month: 2018,
      housingcost: 221147,
    },
    {
      year: 2017,
      month: 2017,
      housingcost: 215433,
    },
    {
      year: 2013,
      month: 2013,
      housingcost: 132562,
    },
    {
      year: 2011,
      month: 2011,
      housingcost: 119502,
    },
    {
      year: 2016,
      month: 2016,
      housingcost: 177890,
    },
    {
      year: 2018,
      month: 2018,
      housingcost: 223564,
    },
    {
      year: 2017,
      month: 2017,
      housingcost: 202554,
    },
    {
      year: 2012,
      month: 2012,
      housingcost: 116432,
    },
    {
      year: 2014,
      month: 2014,
      housingcost: 158361,
    },
    {
      year: 2012,
      month: 2012,
      housingcost: 127030,
    },
    {
      year: 2014,
      month: 2014,
      housingcost: 155999,
    },
    {
      year: 2019,
      month: 2019,
      housingcost: 243709,
    },
    {
      year: 2010,
      month: 2010,
      housingcost: 134401,
    },
    {
      year: 2015,
      month: 2015,
      housingcost: 164237,
    },
    {
      year: 2016,
      month: 2016,
      housingcost: 197138,
    },
  ],
  covid: [
    {
      year: 2020,
      month: 9,
      day: 11,
      cases: 39138,
    },
    {
      year: 2020,
      month: 4,
      day: 24,
      cases: 1022,
    },
    {
      year: 2020,
      month: 2,
      day: 26,
      cases: 0,
    },
    {
      year: 2020,
      month: 10,
      day: 7,
      cases: 43304,
    },
    {
      year: 2020,
      month: 2,
      day: 28,
      cases: 0,
    },
    {
      year: 2020,
      month: 5,
      day: 9,
      cases: 1400,
    },
    {
      year: 2020,
      month: 6,
      day: 15,
      cases: 3826,
    },
    {
      year: 2020,
      month: 8,
      day: 15,
      cases: 34040,
    },
    {
      year: 2020,
      month: 7,
      day: 9,
      cases: 16666,
    },
    {
      year: 2020,
      month: 7,
      day: 19,
      cases: 23706,
    },
    {
      year: 2020,
      month: 5,
      day: 15,
      cases: 1568,
    },
    {
      year: 2020,
      month: 5,
      day: 27,
      cases: 1995,
    },
    {
      year: 2020,
      month: 8,
      day: 21,
      cases: 35293,
    },
    {
      year: 2020,
      month: 3,
      day: 20,
      cases: 32,
    },
    {
      year: 2020,
      month: 10,
      day: 5,
      cases: 43027,
    },
    {
      year: 2020,
      month: 7,
      day: 6,
      cases: 14677,
    },
    {
      year: 2020,
      month: 9,
      day: 29,
      cases: 42118,
    },
    {
      year: 2020,
      month: 2,
      day: 21,
      cases: 0,
    },
    {
      year: 2020,
      month: 1,
      day: 26,
      cases: 0,
    },
    {
      year: 2020,
      month: 3,
      day: 11,
      cases: 3,
    },
    {
      year: 2020,
      month: 6,
      day: 21,
      cases: 5580,
    },
    {
      year: 2020,
      month: 4,
      day: 4,
      cases: 497,
    },
    {
      year: 2020,
      month: 6,
      day: 22,
      cases: 5973,
    },
    {
      year: 2020,
      month: 8,
      day: 4,
      cases: 30798,
    },
    {
      year: 2020,
      month: 1,
      day: 27,
      cases: 0,
    },
    {
      year: 2020,
      month: 8,
      day: 26,
      cases: 36157,
    },
    {
      year: 2020,
      month: 7,
      day: 7,
      cases: 15362,
    },
    {
      year: 2020,
      month: 9,
      day: 26,
      cases: 41722,
    },
    {
      year: 2020,
      month: 8,
      day: 31,
      cases: 37136,
    },
    {
      year: 2020,
      month: 6,
      day: 29,
      cases: 10323,
    },
    {
      year: 2020,
      month: 7,
      day: 10,
      cases: 17662,
    },
    {
      year: 2020,
      month: 8,
      day: 8,
      cases: 32268,
    },
    {
      year: 2020,
      month: 7,
      day: 27,
      cases: 27483,
    },
    {
      year: 2020,
      month: 8,
      day: 13,
      cases: 33428,
    },
    {
      year: 2020,
      month: 7,
      day: 21,
      cases: 24550,
    },
    {
      year: 2020,
      month: 1,
      day: 25,
      cases: 0,
    },
    {
      year: 2020,
      month: 7,
      day: 8,
      cases: 16099,
    },
    {
      year: 2020,
      month: 5,
      day: 20,
      cases: 1703,
    },
    {
      year: 2020,
      month: 7,
      day: 22,
      cases: 24891,
    },
    {
      year: 2020,
      month: 8,
      day: 14,
      cases: 33694,
    },
    {
      year: 2020,
      month: 3,
      day: 26,
      cases: 142,
    },
    {
      year: 2020,
      month: 2,
      day: 11,
      cases: 0,
    },
    {
      year: 2020,
      month: 5,
      day: 7,
      cases: 1364,
    },
    {
      year: 2020,
      month: 2,
      day: 10,
      cases: 0,
    },
    {
      year: 2020,
      month: 4,
      day: 22,
      cases: 982,
    },
    {
      year: 2020,
      month: 6,
      day: 14,
      cases: 3613,
    },
    {
      year: 2020,
      month: 8,
      day: 17,
      cases: 34368,
    },
    {
      year: 2020,
      month: 6,
      day: 6,
      cases: 2643,
    },
    {
      year: 2020,
      month: 3,
      day: 22,
      cases: 58,
    },
    {
      year: 2020,
      month: 5,
      day: 22,
      cases: 1790,
    },
    {
      year: 2020,
      month: 5,
      day: 12,
      cases: 1473,
    },
    {
      year: 2020,
      month: 9,
      day: 7,
      cases: 38545,
    },
    {
      year: 2020,
      month: 3,
      day: 6,
      cases: 2,
    },
    {
      year: 2020,
      month: 4,
      day: 6,
      cases: 571,
    },
    {
      year: 2020,
      month: 9,
      day: 27,
      cases: 41826,
    },
    {
      year: 2020,
      month: 9,
      day: 17,
      cases: 40126,
    },
    {
      year: 2020,
      month: 9,
      day: 19,
      cases: 40587,
    },
    {
      year: 2020,
      month: 6,
      day: 13,
      cases: 3504,
    },
    {
      year: 2020,
      month: 6,
      day: 8,
      cases: 2861,
    },
    {
      year: 2020,
      month: 4,
      day: 8,
      cases: 626,
    },
    {
      year: 2020,
      month: 1,
      day: 28,
      cases: 0,
    },
    {
      year: 2020,
      month: 5,
      day: 19,
      cases: 1670,
    },
    {
      year: 2020,
      month: 9,
      day: 6,
      cases: 38426,
    },
    {
      year: 2020,
      month: 1,
      day: 29,
      cases: 0,
    },
    {
      year: 2020,
      month: 4,
      day: 27,
      cases: 1062,
    },
    {
      year: 2020,
      month: 8,
      day: 27,
      cases: 36354,
    },
    {
      year: 2020,
      month: 9,
      day: 14,
      cases: 39600,
    },
    {
      year: 2020,
      month: 7,
      day: 1,
      cases: 11465,
    },
    {
      year: 2020,
      month: 5,
      day: 24,
      cases: 1883,
    },
    {
      year: 2020,
      month: 6,
      day: 17,
      cases: 4273,
    },
    {
      year: 2020,
      month: 2,
      day: 2,
      cases: 0,
    },
    {
      year: 2020,
      month: 9,
      day: 18,
      cases: 40349,
    },
    {
      year: 2020,
      month: 3,
      day: 17,
      cases: 7,
    },
    {
      year: 2020,
      month: 8,
      day: 22,
      cases: 35574,
    },
    {
      year: 2020,
      month: 3,
      day: 8,
      cases: 2,
    },
    {
      year: 2020,
      month: 4,
      day: 10,
      cases: 671,
    },
    {
      year: 2020,
      month: 9,
      day: 1,
      cases: 37458,
    },
    {
      year: 2020,
      month: 9,
      day: 22,
      cases: 41016,
    },
    {
      year: 2020,
      month: 7,
      day: 18,
      cases: 23103,
    },
    {
      year: 2020,
      month: 2,
      day: 27,
      cases: 0,
    },
    {
      year: 2020,
      month: 3,
      day: 29,
      cases: 218,
    },
    {
      year: 2020,
      month: 6,
      day: 9,
      cases: 2923,
    },
    {
      year: 2020,
      month: 8,
      day: 24,
      cases: 35814,
    },
    {
      year: 2020,
      month: 5,
      day: 28,
      cases: 2019,
    },
    {
      year: 2020,
      month: 4,
      day: 15,
      cases: 869,
    },
    {
      year: 2020,
      month: 9,
      day: 30,
      cases: 42248,
    },
    {
      year: 2020,
      month: 10,
      day: 9,
      cases: 43808,
    },
    {
      year: 2020,
      month: 2,
      day: 12,
      cases: 0,
    },
    {
      year: 2020,
      month: 2,
      day: 1,
      cases: 0,
    },
    {
      year: 2020,
      month: 8,
      day: 1,
      cases: 29589,
    },
    {
      year: 2020,
      month: 2,
      day: 22,
      cases: 0,
    },
    {
      year: 2020,
      month: 2,
      day: 3,
      cases: 0,
    },
    {
      year: 2020,
      month: 1,
      day: 23,
      cases: 0,
    },
    {
      year: 2020,
      month: 5,
      day: 1,
      cases: 1163,
    },
    {
      year: 2020,
      month: 5,
      day: 26,
      cases: 1969,
    },
    {
      year: 2020,
      month: 10,
      day: 11,
      cases: 44138,
    },
    {
      year: 2020,
      month: 8,
      day: 11,
      cases: 32996,
    },
    {
      year: 2020,
      month: 4,
      day: 25,
      cases: 1041,
    },
    {
      year: 2020,
      month: 5,
      day: 25,
      cases: 1939,
    },
    {
      year: 2020,
      month: 8,
      day: 25,
      cases: 35953,
    },
    {
      year: 2020,
      month: 9,
      day: 21,
      cases: 40898,
    },
    {
      year: 2020,
      month: 2,
      day: 16,
      cases: 0,
    },
    {
      year: 2020,
      month: 8,
      day: 2,
      cases: 30118,
    },
    {
      year: 2020,
      month: 10,
      day: 8,
      cases: 43578,
    },
    {
      year: 2020,
      month: 7,
      day: 15,
      cases: 21018,
    },
    {
      year: 2020,
      month: 2,
      day: 17,
      cases: 0,
    },
    {
      year: 2020,
      month: 4,
      day: 9,
      cases: 644,
    },
    {
      year: 2020,
      month: 7,
      day: 28,
      cases: 27823,
    },
    {
      year: 2020,
      month: 10,
      day: 2,
      cases: 42565,
    },
    {
      year: 2020,
      month: 4,
      day: 11,
      cases: 690,
    },
    {
      year: 2020,
      month: 8,
      day: 9,
      cases: 32587,
    },
    {
      year: 2020,
      month: 3,
      day: 3,
      cases: 2,
    },
    {
      year: 2020,
      month: 2,
      day: 18,
      cases: 0,
    },
    {
      year: 2020,
      month: 9,
      day: 4,
      cases: 37981,
    },
    {
      year: 2020,
      month: 7,
      day: 5,
      cases: 14336,
    },
    {
      year: 2020,
      month: 9,
      day: 16,
      cases: 39888,
    },
    {
      year: 2020,
      month: 6,
      day: 20,
      cases: 5319,
    },
    {
      year: 2020,
      month: 5,
      day: 4,
      cases: 1300,
    },
    {
      year: 2020,
      month: 7,
      day: 26,
      cases: 27077,
    },
    {
      year: 2020,
      month: 8,
      day: 16,
      cases: 34238,
    },
    {
      year: 2020,
      month: 9,
      day: 9,
      cases: 38790,
    },
    {
      year: 2020,
      month: 4,
      day: 18,
      cases: 943,
    },
    {
      year: 2020,
      month: 6,
      day: 1,
      cases: 2251,
    },
    {
      year: 2020,
      month: 5,
      day: 31,
      cases: 2201,
    },
    {
      year: 2020,
      month: 8,
      day: 20,
      cases: 35061,
    },
    {
      year: 2020,
      month: 6,
      day: 26,
      cases: 8018,
    },
    {
      year: 2020,
      month: 3,
      day: 30,
      cases: 253,
    },
    {
      year: 2020,
      month: 8,
      day: 23,
      cases: 35721,
    },
    {
      year: 2020,
      month: 2,
      day: 20,
      cases: 0,
    },
    {
      year: 2020,
      month: 6,
      day: 2,
      cases: 2285,
    },
    {
      year: 2020,
      month: 6,
      day: 28,
      cases: 9918,
    },
    {
      year: 2020,
      month: 1,
      day: 31,
      cases: 0,
    },
    {
      year: 2020,
      month: 7,
      day: 25,
      cases: 26626,
    },
    {
      year: 2020,
      month: 3,
      day: 18,
      cases: 14,
    },
    {
      year: 2020,
      month: 8,
      day: 12,
      cases: 33198,
    },
    {
      year: 2020,
      month: 3,
      day: 14,
      cases: 2,
    },
    {
      year: 2020,
      month: 7,
      day: 13,
      cases: 19828,
    },
    {
      year: 2020,
      month: 9,
      day: 23,
      cases: 41178,
    },
    {
      year: 2020,
      month: 10,
      day: 6,
      cases: 43166,
    },
    {
      year: 2020,
      month: 4,
      day: 16,
      cases: 878,
    },
    {
      year: 2020,
      month: 7,
      day: 11,
      cases: 18360,
    },
    {
      year: 2020,
      month: 9,
      day: 5,
      cases: 38262,
    },
    {
      year: 2020,
      month: 1,
      day: 24,
      cases: 0,
    },
    {
      year: 2020,
      month: 10,
      day: 10,
      cases: 43808,
    },
    {
      year: 2020,
      month: 2,
      day: 15,
      cases: 0,
    },
    {
      year: 2020,
      month: 5,
      day: 21,
      cases: 1767,
    },
    {
      year: 2020,
      month: 6,
      day: 24,
      cases: 6892,
    },
    {
      year: 2020,
      month: 2,
      day: 6,
      cases: 0,
    },
    {
      year: 2020,
      month: 1,
      day: 30,
      cases: 0,
    },
    {
      year: 2020,
      month: 5,
      day: 16,
      cases: 1585,
    },
    {
      year: 2020,
      month: 4,
      day: 1,
      cases: 309,
    },
    {
      year: 2020,
      month: 7,
      day: 17,
      cases: 22502,
    },
    {
      year: 2020,
      month: 6,
      day: 23,
      cases: 6176,
    },
    {
      year: 2020,
      month: 3,
      day: 10,
      cases: 2,
    },
    {
      year: 2020,
      month: 6,
      day: 5,
      cases: 2554,
    },
    {
      year: 2020,
      month: 3,
      day: 12,
      cases: 2,
    },
    {
      year: 2020,
      month: 6,
      day: 10,
      cases: 3027,
    },
    {
      year: 2020,
      month: 7,
      day: 14,
      cases: 20508,
    },
    {
      year: 2020,
      month: 9,
      day: 28,
      cases: 41947,
    },
    {
      year: 2020,
      month: 6,
      day: 12,
      cases: 3295,
    },
    {
      year: 2020,
      month: 4,
      day: 26,
      cases: 1048,
    },
    {
      year: 2020,
      month: 3,
      day: 7,
      cases: 2,
    },
    {
      year: 2020,
      month: 6,
      day: 18,
      cases: 4610,
    },
    {
      year: 2020,
      month: 8,
      day: 18,
      cases: 34605,
    },
    {
      year: 2020,
      month: 8,
      day: 29,
      cases: 36784,
    },
    {
      year: 2020,
      month: 10,
      day: 1,
      cases: 42380,
    },
    {
      year: 2020,
      month: 3,
      day: 1,
      cases: 0,
    },
    {
      year: 2020,
      month: 7,
      day: 29,
      cases: 28268,
    },
    {
      year: 2020,
      month: 4,
      day: 29,
      cases: 1105,
    },
    {
      year: 2020,
      month: 9,
      day: 25,
      cases: 41506,
    },
    {
      year: 2020,
      month: 3,
      day: 25,
      cases: 106,
    },
    {
      year: 2020,
      month: 7,
      day: 16,
      cases: 21557,
    },
    {
      year: 2020,
      month: 2,
      day: 9,
      cases: 0,
    },
    {
      year: 2020,
      month: 8,
      day: 5,
      cases: 31197,
    },
    {
      year: 2020,
      month: 3,
      day: 15,
      cases: 4,
    },
    {
      year: 2020,
      month: 2,
      day: 8,
      cases: 0,
    },
    {
      year: 2020,
      month: 6,
      day: 4,
      cases: 2479,
    },
    {
      year: 2020,
      month: 9,
      day: 15,
      cases: 39751,
    },
    {
      year: 2020,
      month: 7,
      day: 31,
      cases: 29116,
    },
    {
      year: 2020,
      month: 5,
      day: 18,
      cases: 1653,
    },
    {
      year: 2020,
      month: 5,
      day: 14,
      cases: 1530,
    },
    {
      year: 2020,
      month: 5,
      day: 2,
      cases: 1240,
    },
    {
      year: 2020,
      month: 3,
      day: 31,
      cases: 305,
    },
    {
      year: 2020,
      month: 6,
      day: 7,
      cases: 2748,
    },
    {
      year: 2020,
      month: 2,
      day: 25,
      cases: 0,
    },
    {
      year: 2020,
      month: 4,
      day: 7,
      cases: 608,
    },
    {
      year: 2020,
      month: 9,
      day: 10,
      cases: 38917,
    },
    {
      year: 2020,
      month: 9,
      day: 3,
      cases: 37821,
    },
    {
      year: 2020,
      month: 9,
      day: 2,
      cases: 37668,
    },
    {
      year: 2020,
      month: 4,
      day: 23,
      cases: 1008,
    },
    {
      year: 2020,
      month: 4,
      day: 2,
      cases: 404,
    },
    {
      year: 2020,
      month: 9,
      day: 20,
      cases: 40751,
    },
    {
      year: 2020,
      month: 5,
      day: 5,
      cases: 1324,
    },
    {
      year: 2020,
      month: 2,
      day: 24,
      cases: 0,
    },
    {
      year: 2020,
      month: 2,
      day: 4,
      cases: 0,
    },
    {
      year: 2020,
      month: 7,
      day: 20,
      cases: 24135,
    },
    {
      year: 2020,
      month: 2,
      day: 7,
      cases: 0,
    },
    {
      year: 2020,
      month: 3,
      day: 27,
      cases: 167,
    },
    {
      year: 2020,
      month: 6,
      day: 25,
      cases: 7329,
    },
    {
      year: 2020,
      month: 5,
      day: 17,
      cases: 1614,
    },
    {
      year: 2020,
      month: 4,
      day: 3,
      cases: 463,
    },
    {
      year: 2020,
      month: 4,
      day: 17,
      cases: 924,
    },
    {
      year: 2020,
      month: 4,
      day: 28,
      cases: 1080,
    },
    {
      year: 2020,
      month: 9,
      day: 13,
      cases: 39450,
    },
    {
      year: 2020,
      month: 7,
      day: 12,
      cases: 19150,
    },
    {
      year: 2020,
      month: 5,
      day: 3,
      cases: 1281,
    },
    {
      year: 2020,
      month: 5,
      day: 10,
      cases: 1432,
    },
    {
      year: 2020,
      month: 5,
      day: 23,
      cases: 1823,
    },
    {
      year: 2020,
      month: 5,
      day: 30,
      cases: 2129,
    },
    {
      year: 2020,
      month: 10,
      day: 4,
      cases: 42891,
    },
    {
      year: 2020,
      month: 8,
      day: 7,
      cases: 31865,
    },
    {
      year: 2020,
      month: 3,
      day: 13,
      cases: 3,
    },
    {
      year: 2020,
      month: 6,
      day: 11,
      cases: 3174,
    },
    {
      year: 2020,
      month: 4,
      day: 13,
      cases: 813,
    },
    {
      year: 2020,
      month: 5,
      day: 11,
      cases: 1448,
    },
    {
      year: 2020,
      month: 2,
      day: 5,
      cases: 0,
    },
    {
      year: 2020,
      month: 2,
      day: 13,
      cases: 0,
    },
    {
      year: 2020,
      month: 6,
      day: 16,
      cases: 4029,
    },
    {
      year: 2020,
      month: 7,
      day: 2,
      cases: 12376,
    },
    {
      year: 2020,
      month: 3,
      day: 16,
      cases: 4,
    },
    {
      year: 2020,
      month: 2,
      day: 14,
      cases: 0,
    },
    {
      year: 2020,
      month: 8,
      day: 19,
      cases: 34851,
    },
    {
      year: 2020,
      month: 8,
      day: 6,
      cases: 31563,
    },
    {
      year: 2020,
      month: 9,
      day: 12,
      cases: 39298,
    },
    {
      year: 2020,
      month: 1,
      day: 22,
      cases: 0,
    },
    {
      year: 2020,
      month: 6,
      day: 30,
      cases: 10752,
    },
    {
      year: 2020,
      month: 7,
      day: 4,
      cases: 13700,
    },
    {
      year: 2020,
      month: 8,
      day: 10,
      cases: 32731,
    },
    {
      year: 2020,
      month: 9,
      day: 8,
      cases: 38652,
    },
    {
      year: 2020,
      month: 3,
      day: 2,
      cases: 1,
    },
    {
      year: 2020,
      month: 5,
      day: 6,
      cases: 1331,
    },
    {
      year: 2020,
      month: 7,
      day: 3,
      cases: 13044,
    },
    {
      year: 2020,
      month: 2,
      day: 29,
      cases: 0,
    },
    {
      year: 2020,
      month: 6,
      day: 3,
      cases: 2384,
    },
    {
      year: 2020,
      month: 3,
      day: 5,
      cases: 2,
    },
    {
      year: 2020,
      month: 4,
      day: 19,
      cases: 960,
    },
    {
      year: 2020,
      month: 10,
      day: 12,
      cases: 44256,
    },
    {
      year: 2020,
      month: 4,
      day: 20,
      cases: 973,
    },
    {
      year: 2020,
      month: 7,
      day: 30,
      cases: 28742,
    },
    {
      year: 2020,
      month: 3,
      day: 28,
      cases: 195,
    },
    {
      year: 2020,
      month: 2,
      day: 23,
      cases: 0,
    },
    {
      year: 2020,
      month: 6,
      day: 19,
      cases: 4982,
    },
    {
      year: 2020,
      month: 10,
      day: 3,
      cases: 42765,
    },
    {
      year: 2020,
      month: 3,
      day: 21,
      cases: 47,
    },
    {
      year: 2020,
      month: 5,
      day: 13,
      cases: 1494,
    },
    {
      year: 2020,
      month: 8,
      day: 28,
      cases: 36574,
    },
    {
      year: 2020,
      month: 3,
      day: 9,
      cases: 2,
    },
    {
      year: 2020,
      month: 7,
      day: 24,
      cases: 26037,
    },
    {
      year: 2020,
      month: 6,
      day: 27,
      cases: 9130,
    },
    {
      year: 2020,
      month: 3,
      day: 19,
      cases: 20,
    },
    {
      year: 2020,
      month: 4,
      day: 5,
      cases: 536,
    },
    {
      year: 2020,
      month: 4,
      day: 30,
      cases: 1124,
    },
    {
      year: 2020,
      month: 4,
      day: 12,
      cases: 759,
    },
    {
      year: 2020,
      month: 8,
      day: 30,
      cases: 37013,
    },
    {
      year: 2020,
      month: 4,
      day: 14,
      cases: 819,
    },
    {
      year: 2020,
      month: 5,
      day: 8,
      cases: 1371,
    },
    {
      year: 2020,
      month: 5,
      day: 29,
      cases: 2069,
    },
    {
      year: 2020,
      month: 9,
      day: 24,
      cases: 41351,
    },
    {
      year: 2020,
      month: 3,
      day: 23,
      cases: 75,
    },
    {
      year: 2020,
      month: 4,
      day: 21,
      cases: 979,
    },
    {
      year: 2020,
      month: 7,
      day: 23,
      cases: 25432,
    },
    {
      year: 2020,
      month: 3,
      day: 24,
      cases: 91,
    },
    {
      year: 2020,
      month: 8,
      day: 3,
      cases: 30450,
    },
    {
      year: 2020,
      month: 3,
      day: 4,
      cases: 2,
    },
    {
      year: 2020,
      month: 2,
      day: 19,
      cases: 0,
    },
  ],
  historicalweather: [
    {
      month: 'Jul',
      precipitation: 12.27,
      temperature: 82.7,
    },
    {
      month: 'Sep',
      precipitation: 1.59,
      temperature: 83.1,
    },
    {
      month: 'Mar',
      precipitation: 1.62,
      temperature: 67.8,
    },
    {
      month: 'Jan',
      precipitation: 4.1,
      temperature: 60.2,
    },
    {
      month: 'Jun',
      precipitation: 9.43,
      temperature: 83.3,
    },
    {
      month: 'May',
      precipitation: 3.13,
      temperature: 80.6,
    },
    {
      month: 'Aug',
      precipitation: 10.83,
      temperature: 83.6,
    },
    {
      month: 'Feb',
      precipitation: 2.38,
      temperature: 69.1,
    },
    {
      month: 'Oct',
      precipitation: 7.21,
      temperature: 80.3,
    },
    {
      month: 'Nov',
      precipitation: 0.89,
      temperature: 68.4,
    },
    {
      month: 'Apr',
      precipitation: 2.13,
      temperature: 73.5,
    },
    {
      month: 'Dec',
      precipitation: 4.01,
      temperature: 66.4,
    },
  ],
};

let c2 = {
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

const dummydata = [
  {
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
        year: 2012,
        individualincome: 37769,
        householdincome: 65339,
      },
      {
        year: 2014,
        individualincome: 40329,
        householdincome: 69160,
      },
      {
        year: 2013,
        individualincome: 38610,
        householdincome: 66768,
      },
      {
        year: 2010,
        individualincome: 36803,
        householdincome: 62072,
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
        year: 2016,
        individualincome: 42343,
        householdincome: 75297,
      },
      {
        year: 2015,
        individualincome: 41510,
        householdincome: 70628,
      },
      {
        year: 2019,
        individualincome: 50338,
        householdincome: 85843,
      },
      {
        year: 2011,
        individualincome: 36654,
        householdincome: 62859,
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
    covid: [
      {
        year: 2020,
        month: 8,
        day: 2,
        cases: 23883,
      },
      {
        year: 2020,
        month: 7,
        day: 19,
        cases: 23281,
      },
      {
        year: 2020,
        month: 8,
        day: 8,
        cases: 24195,
      },
      {
        year: 2020,
        month: 9,
        day: 13,
        cases: 26182,
      },
      {
        year: 2020,
        month: 2,
        day: 10,
        cases: 0,
      },
      {
        year: 2020,
        month: 2,
        day: 2,
        cases: 0,
      },
      {
        year: 2020,
        month: 9,
        day: 5,
        cases: 25629,
      },
      {
        year: 2020,
        month: 4,
        day: 12,
        cases: 6244,
      },
      {
        year: 2020,
        month: 7,
        day: 13,
        cases: 23039,
      },
      {
        year: 2020,
        month: 6,
        day: 12,
        cases: 21971,
      },
      {
        year: 2020,
        month: 10,
        day: 6,
        cases: 28392,
      },
      {
        year: 2020,
        month: 6,
        day: 4,
        cases: 21610,
      },
      {
        year: 2020,
        month: 2,
        day: 28,
        cases: 0,
      },
      {
        year: 2020,
        month: 3,
        day: 21,
        cases: 464,
      },
      {
        year: 2020,
        month: 9,
        day: 24,
        cases: 27014,
      },
      {
        year: 2020,
        month: 2,
        day: 12,
        cases: 0,
      },
      {
        year: 2020,
        month: 8,
        day: 30,
        cases: 25355,
      },
      {
        year: 2020,
        month: 4,
        day: 4,
        cases: 3141,
      },
      {
        year: 2020,
        month: 4,
        day: 5,
        cases: 3393,
      },
      {
        year: 2020,
        month: 4,
        day: 27,
        cases: 13835,
      },
      {
        year: 2020,
        month: 6,
        day: 30,
        cases: 22636,
      },
      {
        year: 2020,
        month: 8,
        day: 3,
        cases: 23932,
      },
      {
        year: 2020,
        month: 9,
        day: 8,
        cases: 25792,
      },
      {
        year: 2020,
        month: 4,
        day: 23,
        cases: 12373,
      },
      {
        year: 2020,
        month: 3,
        day: 2,
        cases: 1,
      },
      {
        year: 2020,
        month: 8,
        day: 28,
        cases: 25297,
      },
      {
        year: 2020,
        month: 4,
        day: 17,
        cases: 9390,
      },
      {
        year: 2020,
        month: 5,
        day: 29,
        cases: 21195,
      },
      {
        year: 2020,
        month: 3,
        day: 14,
        cases: 108,
      },
      {
        year: 2020,
        month: 9,
        day: 7,
        cases: 25752,
      },
      {
        year: 2020,
        month: 2,
        day: 19,
        cases: 0,
      },
      {
        year: 2020,
        month: 9,
        day: 26,
        cases: 27201,
      },
      {
        year: 2020,
        month: 4,
        day: 3,
        cases: 2920,
      },
      {
        year: 2020,
        month: 7,
        day: 17,
        cases: 23231,
      },
      {
        year: 2020,
        month: 1,
        day: 24,
        cases: 0,
      },
      {
        year: 2020,
        month: 10,
        day: 2,
        cases: 27961,
      },
      {
        year: 2020,
        month: 10,
        day: 11,
        cases: 29055,
      },
      {
        year: 2020,
        month: 8,
        day: 6,
        cases: 24110,
      },
      {
        year: 2020,
        month: 6,
        day: 28,
        cases: 22557,
      },
      {
        year: 2020,
        month: 9,
        day: 4,
        cases: 25558,
      },
      {
        year: 2020,
        month: 7,
        day: 15,
        cases: 23136,
      },
      {
        year: 2020,
        month: 6,
        day: 7,
        cases: 21725,
      },
      {
        year: 2020,
        month: 2,
        day: 29,
        cases: 0,
      },
      {
        year: 2020,
        month: 10,
        day: 12,
        cases: 29225,
      },
      {
        year: 2020,
        month: 6,
        day: 17,
        cases: 22191,
      },
      {
        year: 2020,
        month: 7,
        day: 3,
        cases: 22726,
      },
      {
        year: 2020,
        month: 5,
        day: 8,
        cases: 17731,
      },
      {
        year: 2020,
        month: 8,
        day: 4,
        cases: 23982,
      },
      {
        year: 2020,
        month: 3,
        day: 7,
        cases: 30,
      },
      {
        year: 2020,
        month: 4,
        day: 28,
        cases: 14292,
      },
      {
        year: 2020,
        month: 7,
        day: 26,
        cases: 23534,
      },
      {
        year: 2020,
        month: 3,
        day: 25,
        cases: 942,
      },
      {
        year: 2020,
        month: 2,
        day: 7,
        cases: 0,
      },
      {
        year: 2020,
        month: 6,
        day: 16,
        cases: 22127,
      },
      {
        year: 2020,
        month: 3,
        day: 5,
        cases: 5,
      },
      {
        year: 2020,
        month: 6,
        day: 18,
        cases: 22230,
      },
      {
        year: 2020,
        month: 9,
        day: 14,
        cases: 26246,
      },
      {
        year: 2020,
        month: 10,
        day: 4,
        cases: 28243,
      },
      {
        year: 2020,
        month: 2,
        day: 17,
        cases: 0,
      },
      {
        year: 2020,
        month: 3,
        day: 19,
        cases: 326,
      },
      {
        year: 2020,
        month: 4,
        day: 30,
        cases: 15171,
      },
      {
        year: 2020,
        month: 5,
        day: 27,
        cases: 20940,
      },
      {
        year: 2020,
        month: 8,
        day: 22,
        cases: 24887,
      },
      {
        year: 2020,
        month: 5,
        day: 6,
        cases: 17060,
      },
      {
        year: 2020,
        month: 6,
        day: 8,
        cases: 21777,
      },
      {
        year: 2020,
        month: 5,
        day: 24,
        cases: 20588,
      },
      {
        year: 2020,
        month: 5,
        day: 17,
        cases: 19397,
      },
      {
        year: 2020,
        month: 7,
        day: 10,
        cases: 22962,
      },
      {
        year: 2020,
        month: 10,
        day: 10,
        cases: 28917,
      },
      {
        year: 2020,
        month: 3,
        day: 13,
        cases: 84,
      },
      {
        year: 2020,
        month: 6,
        day: 1,
        cases: 21396,
      },
      {
        year: 2020,
        month: 9,
        day: 11,
        cases: 26021,
      },
      {
        year: 2020,
        month: 7,
        day: 14,
        cases: 23082,
      },
      {
        year: 2020,
        month: 7,
        day: 8,
        cases: 22876,
      },
      {
        year: 2020,
        month: 5,
        day: 25,
        cases: 20625,
      },
      {
        year: 2020,
        month: 6,
        day: 15,
        cases: 22082,
      },
      {
        year: 2020,
        month: 6,
        day: 2,
        cases: 21460,
      },
      {
        year: 2020,
        month: 7,
        day: 22,
        cases: 23396,
      },
      {
        year: 2020,
        month: 4,
        day: 2,
        cases: 2608,
      },
      {
        year: 2020,
        month: 2,
        day: 13,
        cases: 0,
      },
      {
        year: 2020,
        month: 5,
        day: 10,
        cases: 17981,
      },
      {
        year: 2020,
        month: 3,
        day: 27,
        cases: 1305,
      },
      {
        year: 2020,
        month: 9,
        day: 30,
        cases: 27624,
      },
      {
        year: 2020,
        month: 4,
        day: 6,
        cases: 3828,
      },
      {
        year: 2020,
        month: 7,
        day: 7,
        cases: 22847,
      },
      {
        year: 2020,
        month: 2,
        day: 8,
        cases: 0,
      },
      {
        year: 2020,
        month: 4,
        day: 1,
        cases: 2349,
      },
      {
        year: 2020,
        month: 3,
        day: 9,
        cases: 42,
      },
      {
        year: 2020,
        month: 4,
        day: 7,
        cases: 4267,
      },
      {
        year: 2020,
        month: 2,
        day: 16,
        cases: 0,
      },
      {
        year: 2020,
        month: 6,
        day: 19,
        cases: 22263,
      },
      {
        year: 2020,
        month: 7,
        day: 30,
        cases: 23771,
      },
      {
        year: 2020,
        month: 4,
        day: 14,
        cases: 7375,
      },
      {
        year: 2020,
        month: 5,
        day: 7,
        cases: 17386,
      },
      {
        year: 2020,
        month: 8,
        day: 16,
        cases: 24519,
      },
      {
        year: 2020,
        month: 4,
        day: 19,
        cases: 10072,
      },
      {
        year: 2020,
        month: 7,
        day: 24,
        cases: 23493,
      },
      {
        year: 2020,
        month: 2,
        day: 15,
        cases: 0,
      },
      {
        year: 2020,
        month: 6,
        day: 25,
        cases: 22476,
      },
      {
        year: 2020,
        month: 2,
        day: 1,
        cases: 0,
      },
      {
        year: 2020,
        month: 4,
        day: 10,
        cases: 5684,
      },
      {
        year: 2020,
        month: 5,
        day: 18,
        cases: 19699,
      },
      {
        year: 2020,
        month: 7,
        day: 4,
        cases: 22738,
      },
      {
        year: 2020,
        month: 9,
        day: 10,
        cases: 25931,
      },
      {
        year: 2020,
        month: 8,
        day: 24,
        cases: 24975,
      },
      {
        year: 2020,
        month: 6,
        day: 27,
        cases: 22540,
      },
      {
        year: 2020,
        month: 1,
        day: 23,
        cases: 0,
      },
      {
        year: 2020,
        month: 5,
        day: 28,
        cases: 21069,
      },
      {
        year: 2020,
        month: 4,
        day: 21,
        cases: 11119,
      },
      {
        year: 2020,
        month: 4,
        day: 25,
        cases: 13222,
      },
      {
        year: 2020,
        month: 9,
        day: 21,
        cases: 26784,
      },
      {
        year: 2020,
        month: 10,
        day: 9,
        cases: 28796,
      },
      {
        year: 2020,
        month: 3,
        day: 12,
        cases: 67,
      },
      {
        year: 2020,
        month: 6,
        day: 11,
        cases: 21924,
      },
      {
        year: 2020,
        month: 9,
        day: 3,
        cases: 25495,
      },
      {
        year: 2020,
        month: 1,
        day: 27,
        cases: 0,
      },
      {
        year: 2020,
        month: 2,
        day: 6,
        cases: 0,
      },
      {
        year: 2020,
        month: 9,
        day: 16,
        cases: 26383,
      },
      {
        year: 2020,
        month: 8,
        day: 26,
        cases: 25142,
      },
      {
        year: 2020,
        month: 4,
        day: 24,
        cases: 12837,
      },
      {
        year: 2020,
        month: 5,
        day: 20,
        cases: 20071,
      },
      {
        year: 2020,
        month: 9,
        day: 19,
        cases: 26644,
      },
      {
        year: 2020,
        month: 1,
        day: 25,
        cases: 0,
      },
      {
        year: 2020,
        month: 2,
        day: 22,
        cases: 0,
      },
      {
        year: 2020,
        month: 1,
        day: 28,
        cases: 0,
      },
      {
        year: 2020,
        month: 7,
        day: 2,
        cases: 22702,
      },
      {
        year: 2020,
        month: 5,
        day: 30,
        cases: 21248,
      },
      {
        year: 2020,
        month: 7,
        day: 21,
        cases: 23361,
      },
      {
        year: 2020,
        month: 3,
        day: 8,
        cases: 39,
      },
      {
        year: 2020,
        month: 2,
        day: 18,
        cases: 0,
      },
      {
        year: 2020,
        month: 6,
        day: 29,
        cases: 22595,
      },
      {
        year: 2020,
        month: 1,
        day: 31,
        cases: 0,
      },
      {
        year: 2020,
        month: 3,
        day: 4,
        cases: 1,
      },
      {
        year: 2020,
        month: 8,
        day: 1,
        cases: 23860,
      },
      {
        year: 2020,
        month: 6,
        day: 5,
        cases: 21666,
      },
      {
        year: 2020,
        month: 9,
        day: 23,
        cases: 26943,
      },
      {
        year: 2020,
        month: 6,
        day: 9,
        cases: 21845,
      },
      {
        year: 2020,
        month: 7,
        day: 27,
        cases: 23590,
      },
      {
        year: 2020,
        month: 9,
        day: 20,
        cases: 26732,
      },
      {
        year: 2020,
        month: 5,
        day: 31,
        cases: 21298,
      },
      {
        year: 2020,
        month: 3,
        day: 24,
        cases: 800,
      },
      {
        year: 2020,
        month: 7,
        day: 28,
        cases: 23642,
      },
      {
        year: 2020,
        month: 5,
        day: 15,
        cases: 19186,
      },
      {
        year: 2020,
        month: 3,
        day: 23,
        cases: 658,
      },
      {
        year: 2020,
        month: 7,
        day: 9,
        cases: 22922,
      },
      {
        year: 2020,
        month: 9,
        day: 2,
        cases: 25564,
      },
      {
        year: 2020,
        month: 7,
        day: 23,
        cases: 23441,
      },
      {
        year: 2020,
        month: 7,
        day: 16,
        cases: 23183,
      },
      {
        year: 2020,
        month: 3,
        day: 26,
        cases: 1129,
      },
      {
        year: 2020,
        month: 5,
        day: 12,
        cases: 18465,
      },
      {
        year: 2020,
        month: 6,
        day: 21,
        cases: 22302,
      },
      {
        year: 2020,
        month: 4,
        day: 13,
        cases: 6645,
      },
      {
        year: 2020,
        month: 7,
        day: 6,
        cases: 22797,
      },
      {
        year: 2020,
        month: 7,
        day: 11,
        cases: 22987,
      },
      {
        year: 2020,
        month: 8,
        day: 23,
        cases: 24905,
      },
      {
        year: 2020,
        month: 4,
        day: 29,
        cases: 14687,
      },
      {
        year: 2020,
        month: 5,
        day: 9,
        cases: 17878,
      },
      {
        year: 2020,
        month: 6,
        day: 6,
        cases: 21696,
      },
      {
        year: 2020,
        month: 7,
        day: 5,
        cases: 22756,
      },
      {
        year: 2020,
        month: 7,
        day: 25,
        cases: 23520,
      },
      {
        year: 2020,
        month: 9,
        day: 27,
        cases: 27340,
      },
      {
        year: 2020,
        month: 8,
        day: 18,
        cases: 24647,
      },
      {
        year: 2020,
        month: 3,
        day: 29,
        cases: 1549,
      },
      {
        year: 2020,
        month: 7,
        day: 1,
        cases: 22664,
      },
      {
        year: 2020,
        month: 4,
        day: 20,
        cases: 10649,
      },
      {
        year: 2020,
        month: 8,
        day: 21,
        cases: 24855,
      },
      {
        year: 2020,
        month: 3,
        day: 6,
        cases: 10,
      },
      {
        year: 2020,
        month: 9,
        day: 9,
        cases: 25847,
      },
      {
        year: 2020,
        month: 6,
        day: 10,
        cases: 21889,
      },
      {
        year: 2020,
        month: 9,
        day: 25,
        cases: 27103,
      },
      {
        year: 2020,
        month: 5,
        day: 19,
        cases: 19901,
      },
      {
        year: 2020,
        month: 9,
        day: 18,
        cases: 26545,
      },
      {
        year: 2020,
        month: 5,
        day: 3,
        cases: 16018,
      },
      {
        year: 2020,
        month: 10,
        day: 7,
        cases: 28533,
      },
      {
        year: 2020,
        month: 3,
        day: 3,
        cases: 1,
      },
      {
        year: 2020,
        month: 2,
        day: 26,
        cases: 0,
      },
      {
        year: 2020,
        month: 9,
        day: 12,
        cases: 26138,
      },
      {
        year: 2020,
        month: 8,
        day: 7,
        cases: 24170,
      },
      {
        year: 2020,
        month: 10,
        day: 1,
        cases: 27779,
      },
      {
        year: 2020,
        month: 6,
        day: 13,
        cases: 21995,
      },
      {
        year: 2020,
        month: 7,
        day: 31,
        cases: 23836,
      },
      {
        year: 2020,
        month: 8,
        day: 9,
        cases: 24209,
      },
      {
        year: 2020,
        month: 3,
        day: 16,
        cases: 157,
      },
      {
        year: 2020,
        month: 1,
        day: 29,
        cases: 0,
      },
      {
        year: 2020,
        month: 2,
        day: 14,
        cases: 0,
      },
      {
        year: 2020,
        month: 6,
        day: 14,
        cases: 22020,
      },
      {
        year: 2020,
        month: 8,
        day: 12,
        cases: 24363,
      },
      {
        year: 2020,
        month: 4,
        day: 15,
        cases: 7981,
      },
      {
        year: 2020,
        month: 9,
        day: 1,
        cases: 25498,
      },
      {
        year: 2020,
        month: 2,
        day: 21,
        cases: 0,
      },
      {
        year: 2020,
        month: 2,
        day: 23,
        cases: 0,
      },
      {
        year: 2020,
        month: 8,
        day: 17,
        cases: 24579,
      },
      {
        year: 2020,
        month: 3,
        day: 17,
        cases: 209,
      },
      {
        year: 2020,
        month: 9,
        day: 29,
        cases: 27507,
      },
      {
        year: 2020,
        month: 4,
        day: 11,
        cases: 5999,
      },
      {
        year: 2020,
        month: 9,
        day: 17,
        cases: 26469,
      },
      {
        year: 2020,
        month: 5,
        day: 21,
        cases: 20271,
      },
      {
        year: 2020,
        month: 9,
        day: 28,
        cases: 27392,
      },
      {
        year: 2020,
        month: 3,
        day: 18,
        cases: 268,
      },
      {
        year: 2020,
        month: 6,
        day: 24,
        cases: 22424,
      },
      {
        year: 2020,
        month: 8,
        day: 10,
        cases: 24268,
      },
      {
        year: 2020,
        month: 2,
        day: 20,
        cases: 0,
      },
      {
        year: 2020,
        month: 5,
        day: 4,
        cases: 16387,
      },
      {
        year: 2020,
        month: 6,
        day: 20,
        cases: 22283,
      },
      {
        year: 2020,
        month: 7,
        day: 29,
        cases: 23714,
      },
      {
        year: 2020,
        month: 8,
        day: 19,
        cases: 24725,
      },
      {
        year: 2020,
        month: 2,
        day: 5,
        cases: 0,
      },
      {
        year: 2020,
        month: 8,
        day: 25,
        cases: 25064,
      },
      {
        year: 2020,
        month: 3,
        day: 20,
        cases: 400,
      },
      {
        year: 2020,
        month: 9,
        day: 15,
        cases: 26304,
      },
      {
        year: 2020,
        month: 5,
        day: 11,
        cases: 18199,
      },
      {
        year: 2020,
        month: 3,
        day: 28,
        cases: 1454,
      },
      {
        year: 2020,
        month: 4,
        day: 22,
        cases: 11871,
      },
      {
        year: 2020,
        month: 10,
        day: 5,
        cases: 28308,
      },
      {
        year: 2020,
        month: 2,
        day: 4,
        cases: 0,
      },
      {
        year: 2020,
        month: 7,
        day: 20,
        cases: 23324,
      },
      {
        year: 2020,
        month: 8,
        day: 13,
        cases: 24420,
      },
      {
        year: 2020,
        month: 8,
        day: 11,
        cases: 24302,
      },
      {
        year: 2020,
        month: 1,
        day: 30,
        cases: 0,
      },
      {
        year: 2020,
        month: 3,
        day: 22,
        cases: 526,
      },
      {
        year: 2020,
        month: 10,
        day: 3,
        cases: 28101,
      },
      {
        year: 2020,
        month: 3,
        day: 30,
        cases: 1804,
      },
      {
        year: 2020,
        month: 5,
        day: 16,
        cases: 19316,
      },
      {
        year: 2020,
        month: 1,
        day: 22,
        cases: 0,
      },
      {
        year: 2020,
        month: 5,
        day: 2,
        cases: 15867,
      },
      {
        year: 2020,
        month: 1,
        day: 26,
        cases: 0,
      },
      {
        year: 2020,
        month: 6,
        day: 3,
        cases: 21550,
      },
      {
        year: 2020,
        month: 5,
        day: 14,
        cases: 18973,
      },
      {
        year: 2020,
        month: 9,
        day: 6,
        cases: 25712,
      },
      {
        year: 2020,
        month: 6,
        day: 22,
        cases: 22344,
      },
      {
        year: 2020,
        month: 4,
        day: 8,
        cases: 4690,
      },
      {
        year: 2020,
        month: 7,
        day: 12,
        cases: 23003,
      },
      {
        year: 2020,
        month: 2,
        day: 25,
        cases: 0,
      },
      {
        year: 2020,
        month: 3,
        day: 10,
        cases: 51,
      },
      {
        year: 2020,
        month: 4,
        day: 26,
        cases: 13405,
      },
      {
        year: 2020,
        month: 8,
        day: 29,
        cases: 25328,
      },
      {
        year: 2020,
        month: 5,
        day: 22,
        cases: 20432,
      },
      {
        year: 2020,
        month: 7,
        day: 18,
        cases: 23257,
      },
      {
        year: 2020,
        month: 8,
        day: 31,
        cases: 25423,
      },
      {
        year: 2020,
        month: 4,
        day: 18,
        cases: 9768,
      },
      {
        year: 2020,
        month: 8,
        day: 5,
        cases: 24044,
      },
      {
        year: 2020,
        month: 2,
        day: 9,
        cases: 0,
      },
      {
        year: 2020,
        month: 8,
        day: 14,
        cases: 24468,
      },
      {
        year: 2020,
        month: 2,
        day: 24,
        cases: 0,
      },
      {
        year: 2020,
        month: 8,
        day: 27,
        cases: 25210,
      },
      {
        year: 2020,
        month: 3,
        day: 31,
        cases: 2078,
      },
      {
        year: 2020,
        month: 2,
        day: 3,
        cases: 0,
      },
      {
        year: 2020,
        month: 8,
        day: 15,
        cases: 24497,
      },
      {
        year: 2020,
        month: 5,
        day: 26,
        cases: 20785,
      },
      {
        year: 2020,
        month: 10,
        day: 8,
        cases: 28638,
      },
      {
        year: 2020,
        month: 2,
        day: 27,
        cases: 0,
      },
      {
        year: 2020,
        month: 5,
        day: 23,
        cases: 20526,
      },
      {
        year: 2020,
        month: 8,
        day: 20,
        cases: 24786,
      },
      {
        year: 2020,
        month: 4,
        day: 16,
        cases: 8628,
      },
      {
        year: 2020,
        month: 5,
        day: 5,
        cases: 16725,
      },
      {
        year: 2020,
        month: 2,
        day: 11,
        cases: 0,
      },
      {
        year: 2020,
        month: 4,
        day: 9,
        cases: 5197,
      },
      {
        year: 2020,
        month: 5,
        day: 1,
        cases: 15616,
      },
      {
        year: 2020,
        month: 3,
        day: 15,
        cases: 119,
      },
      {
        year: 2020,
        month: 3,
        day: 11,
        cases: 58,
      },
      {
        year: 2020,
        month: 9,
        day: 22,
        cases: 26820,
      },
      {
        year: 2020,
        month: 6,
        day: 23,
        cases: 22389,
      },
      {
        year: 2020,
        month: 5,
        day: 13,
        cases: 18724,
      },
      {
        year: 2020,
        month: 6,
        day: 26,
        cases: 22515,
      },
      {
        year: 2020,
        month: 3,
        day: 1,
        cases: 0,
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
  },
  {
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
  },
];

const compare = (a, b) => {
  // Use toUpperCase() to ignore character casing
  const yearA = a.year;
  const yearB = b.year;

  let comparison = 0;
  if (yearA > yearB) {
    comparison = 1;
  } else if (yearA < yearB) {
    comparison = -1;
  }
  return comparison;
};

export const MainVisual = () => {
  const cityOne = useSelector(state => state.cityOne);
  const cityTwo = useSelector(state => state.cityTwo);

  c1.historicalincome = c1.historicalincome.sort(compare);
  c2.historicalincome = c2.historicalincome.sort(compare);
  c1.historicalaveragehouse = c1.historicalaveragehouse.sort(compare);
  c2.historicalaveragehouse = c2.historicalaveragehouse.sort(compare);

  const household = c1.historicalaveragehouse.map(c => {
    return c.housingcost;
  });

  const individual = c1.historicalincome.map(c => {
    return c.individualincome;
  });

  const labels = c1.historicalincome.map(c => {
    return c.year;
  });

  const household2 = c2.historicalaveragehouse.map(c => {
    return c.housingcost;
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
        backgroundColor: '#d3553f',
        borderColor: '#d3553f',
        pointBackgroundColor: '#d3553f',
        pointBorderColor: '#d3553f',
        data: individual,
      },
      {
        label: 'House Cost',
        backgroundColor: '#f2c8a6',
        borderColor: '#f2c8a6',
        pointBackgroundColor: '#f2c8a6',
        pointBorderColor: '#f2c8a6',
        data: household,
      },
    ],
  };

  const state2 = {
    labels: labels2,
    datasets: [
      {
        label: 'Individual Income',
        backgroundColor: '#d3553f',
        borderColor: '#d3553f',
        pointBackgroundColor: '#d3553f',
        pointBorderColor: '#d3553f',
        data: individual2,
      },
      {
        label: 'House Cost',
        backgroundColor: '#f2c8a6',
        borderColor: '#f2c8a6',
        pointBackgroundColor: '#f2c8a6',
        pointBorderColor: '#f2c8a6',
        data: household2,
      },
    ],
  };

  const formatNumber = num => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  };

  return (
    <>
      <Container>
        {/* <div className="split">
          <h2>{c1.citynamestate}</h2>
          <img src={c1.wikiimgurl} width="500px" alt={c1.citynamestate} />

          <article className="graph">
            <Line
              data={state}
              options={{
                title: {
                  display: false,
                  text: 'Average Individual Income vs. House Cost',
                  fontSize: 20,
                  fontFamily: 'Roboto',
                  fontColor: '#000000',
                },
                maintainAspectRatio: false,
                animation: {
                  duration: '1500',
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
            <CityDetails city={c1} />
          </aside>
        </div>

        <div className="float">
          vs.
          <div>
            <p className="txtShdw">COMPARE</p>
          </div>
        </div>

        <div className="split">
          <h2>{c2.citynamestate}</h2>
          <img src={c2.wikiimgurl} width="500px" alt={c2.citynamestate} />

          <article className="graph">
            <Line
              data={state2}
              options={{
                title: {
                  display: true,
                  text: 'Average Individual Income vs. House Cost',
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
            <CityDetails city={c2} />
          </aside>
        </div> */}
        <p className="vs-text">&nbsp;vs.</p>
        <div className="compare-city-selected-container">
          {dummydata.map(city => {
            return <ComparisonCard city={city} />;
          })}
        </div>
      </Container>
    </>
  );
};

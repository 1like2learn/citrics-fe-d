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
    margin: 1.5% auto;
    text-align: center;
  }
`;

/*
This is hard coded city data for Tampa, FL to test the graphs with.
*/

let c1 = {
  cityid: 395264,
  citynamestate: 'National Average, USA',
  statecode: null,
  timezone: null,
  latitude: 37.48712116492545,
  logitude: -96.031425068364,
  fpis: null,
  gnis: null,
  wikiimgurl: null,
  website: null,
  population: 113846.68421052632,
  densitymisq: 0.0,
  densitykmsq: 0.0,
  averageage: 36.50746268656718,
  householdincome: 65208.21523959152,
  individualincome: 32457.170463472114,
  averagehouse: 306294.276512176,
  rent: 1152.3778476040848,
  costoflivingindex: 102.8215239591515,
  acastatus: null,
  averagetemp: 'NaN',
  averageperc: 'NaN',
  avgnewcovidcases: 'NaN',
  zipcodes: [],
  counties: [],
  populationhist: [
    {
      year: 2017,
      pop: 113698.48075412412,
    },
    {
      year: 2019,
      pop: 114815.25451688924,
    },
    {
      year: 2018,
      pop: 114277.68656716419,
    },
    {
      year: 2016,
      pop: 112925.99685781618,
    },
    {
      year: 2012,
      pop: 108799.0534171249,
    },
    {
      year: 2014,
      pop: 110880.33857030637,
    },
    {
      year: 2011,
      pop: 107677.59073055774,
    },
    {
      year: 2010,
      pop: 105982.08326787117,
    },
    {
      year: 2013,
      pop: 109834.82953652789,
    },
    {
      year: 2015,
      pop: 111954.4619010212,
    },
  ],
  historicalincome: [
    {
      year: 2012,
      individualincome: 32551,
      householdincome: 52609,
    },
    {
      year: 2019,
      individualincome: 41818,
      householdincome: 68191,
    },
    {
      year: 2016,
      individualincome: 36334,
      householdincome: 59474,
    },
    {
      year: 2010,
      individualincome: 31534,
      householdincome: 50982,
    },
    {
      year: 2018,
      individualincome: 39170,
      householdincome: 64334,
    },
    {
      year: 2017,
      individualincome: 37856,
      householdincome: 62068,
    },
    {
      year: 2015,
      individualincome: 35269,
      householdincome: 57350,
    },
    {
      year: 2014,
      individualincome: 34015,
      householdincome: 55319,
    },
    {
      year: 2013,
      individualincome: 33282,
      householdincome: 53870,
    },
    {
      year: 2011,
      individualincome: 31562,
      householdincome: 51464,
    },
  ],
  historicalaveragehouse: [
    {
      year: 2012,
      month: 2012,
      housingcost: 208889,
    },
    {
      year: 2012,
      month: 2012,
      housingcost: 210294,
    },
    {
      year: 2017,
      month: 2017,
      housingcost: 307428,
    },
    {
      year: 2016,
      month: 2016,
      housingcost: 281909,
    },
    {
      year: 2010,
      month: 2010,
      housingcost: 227874,
    },
    {
      year: 2018,
      month: 2018,
      housingcost: 331353,
    },
    {
      year: 2010,
      month: 2010,
      housingcost: 220722,
    },
    {
      year: 2015,
      month: 2015,
      housingcost: 278865,
    },
    {
      year: 2015,
      month: 2015,
      housingcost: 268315,
    },
    {
      year: 2013,
      month: 2013,
      housingcost: 242922,
    },
    {
      year: 2011,
      month: 2011,
      housingcost: 209381,
    },
    {
      year: 2019,
      month: 2019,
      housingcost: 338132,
    },
    {
      year: 2019,
      month: 2019,
      housingcost: 341542,
    },
    {
      year: 2016,
      month: 2016,
      housingcost: 292684,
    },
    {
      year: 2015,
      month: 2015,
      housingcost: 270039,
    },
    {
      year: 2014,
      month: 2014,
      housingcost: 260864,
    },
    {
      year: 2010,
      month: 2010,
      housingcost: 227973,
    },
    {
      year: 2014,
      month: 2014,
      housingcost: 256804,
    },
    {
      year: 2013,
      month: 2013,
      housingcost: 229640,
    },
    {
      year: 2017,
      month: 2017,
      housingcost: 317578,
    },
    {
      year: 2018,
      month: 2018,
      housingcost: 324737,
    },
    {
      year: 2018,
      month: 2018,
      housingcost: 336188,
    },
    {
      year: 2010,
      month: 2010,
      housingcost: 223710,
    },
    {
      year: 2019,
      month: 2019,
      housingcost: 344861,
    },
    {
      year: 2017,
      month: 2017,
      housingcost: 302084,
    },
    {
      year: 2010,
      month: 2010,
      housingcost: 222121,
    },
    {
      year: 2019,
      month: 2019,
      housingcost: 339290,
    },
    {
      year: 2012,
      month: 2012,
      housingcost: 216581,
    },
    {
      year: 2019,
      month: 2019,
      housingcost: 343595,
    },
    {
      year: 2017,
      month: 2017,
      housingcost: 300466,
    },
    {
      year: 2018,
      month: 2018,
      housingcost: 327111,
    },
    {
      year: 2017,
      month: 2017,
      housingcost: 309173,
    },
    {
      year: 2012,
      month: 2012,
      housingcost: 212432,
    },
    {
      year: 2010,
      month: 2010,
      housingcost: 227837,
    },
    {
      year: 2014,
      month: 2014,
      housingcost: 255899,
    },
    {
      year: 2012,
      month: 2012,
      housingcost: 209002,
    },
    {
      year: 2015,
      month: 2015,
      housingcost: 272816,
    },
    {
      year: 2018,
      month: 2018,
      housingcost: 335140,
    },
    {
      year: 2019,
      month: 2019,
      housingcost: 337655,
    },
    {
      year: 2013,
      month: 2013,
      housingcost: 245502,
    },
    {
      year: 2016,
      month: 2016,
      housingcost: 291337,
    },
    {
      year: 2015,
      month: 2015,
      housingcost: 274396,
    },
    {
      year: 2010,
      month: 2010,
      housingcost: 228266,
    },
    {
      year: 2019,
      month: 2019,
      housingcost: 340617,
    },
    {
      year: 2013,
      month: 2013,
      housingcost: 235426,
    },
    {
      year: 2010,
      month: 2010,
      housingcost: 224907,
    },
    {
      year: 2018,
      month: 2018,
      housingcost: 322404,
    },
    {
      year: 2016,
      month: 2016,
      housingcost: 297363,
    },
    {
      year: 2011,
      month: 2011,
      housingcost: 210813,
    },
    {
      year: 2013,
      month: 2013,
      housingcost: 232684,
    },
    {
      year: 2015,
      month: 2015,
      housingcost: 266594,
    },
    {
      year: 2017,
      month: 2017,
      housingcost: 315145,
    },
    {
      year: 2012,
      month: 2012,
      housingcost: 218247,
    },
    {
      year: 2011,
      month: 2011,
      housingcost: 210244,
    },
    {
      year: 2012,
      month: 2012,
      housingcost: 214976,
    },
    {
      year: 2018,
      month: 2018,
      housingcost: 336826,
    },
    {
      year: 2018,
      month: 2018,
      housingcost: 337894,
    },
    {
      year: 2013,
      month: 2013,
      housingcost: 222255,
    },
    {
      year: 2010,
      month: 2010,
      housingcost: 227682,
    },
    {
      year: 2012,
      month: 2012,
      housingcost: 208702,
    },
    {
      year: 2018,
      month: 2018,
      housingcost: 329185,
    },
    {
      year: 2014,
      month: 2014,
      housingcost: 257519,
    },
    {
      year: 2014,
      month: 2014,
      housingcost: 253778,
    },
    {
      year: 2020,
      month: 2020,
      housingcost: 352919,
    },
    {
      year: 2017,
      month: 2017,
      housingcost: 298898,
    },
    {
      year: 2014,
      month: 2014,
      housingcost: 251190,
    },
    {
      year: 2017,
      month: 2017,
      housingcost: 320026,
    },
    {
      year: 2016,
      month: 2016,
      housingcost: 287169,
    },
    {
      year: 2012,
      month: 2012,
      housingcost: 211269,
    },
    {
      year: 2010,
      month: 2010,
      housingcost: 225967,
    },
    {
      year: 2015,
      month: 2015,
      housingcost: 263479,
    },
    {
      year: 2020,
      month: 2020,
      housingcost: 359273,
    },
    {
      year: 2011,
      month: 2011,
      housingcost: 214147,
    },
    {
      year: 2018,
      month: 2018,
      housingcost: 337391,
    },
    {
      year: 2015,
      month: 2015,
      housingcost: 277588,
    },
    {
      year: 2020,
      month: 2020,
      housingcost: 350073,
    },
    {
      year: 2011,
      month: 2011,
      housingcost: 218462,
    },
    {
      year: 2014,
      month: 2014,
      housingcost: 252787,
    },
    {
      year: 2017,
      month: 2017,
      housingcost: 303784,
    },
    {
      year: 2018,
      month: 2018,
      housingcost: 338031,
    },
    {
      year: 2011,
      month: 2011,
      housingcost: 212125,
    },
    {
      year: 2013,
      month: 2013,
      housingcost: 247492,
    },
    {
      year: 2017,
      month: 2017,
      housingcost: 312969,
    },
    {
      year: 2016,
      month: 2016,
      housingcost: 284535,
    },
    {
      year: 2015,
      month: 2015,
      housingcost: 280335,
    },
    {
      year: 2011,
      month: 2011,
      housingcost: 209865,
    },
    {
      year: 2019,
      month: 2019,
      housingcost: 337751,
    },
    {
      year: 2019,
      month: 2019,
      housingcost: 337940,
    },
    {
      year: 2017,
      month: 2017,
      housingcost: 310936,
    },
    {
      year: 2014,
      month: 2014,
      housingcost: 258347,
    },
    {
      year: 2010,
      month: 2010,
      housingcost: 227682,
    },
    {
      year: 2016,
      month: 2016,
      housingcost: 283377,
    },
    {
      year: 2012,
      month: 2012,
      housingcost: 220123,
    },
    {
      year: 2011,
      month: 2011,
      housingcost: 211483,
    },
    {
      year: 2011,
      month: 2011,
      housingcost: 217167,
    },
    {
      year: 2011,
      month: 2011,
      housingcost: 212972,
    },
    {
      year: 2016,
      month: 2016,
      housingcost: 295787,
    },
    {
      year: 2020,
      month: 2020,
      housingcost: 351717,
    },
    {
      year: 2013,
      month: 2013,
      housingcost: 227020,
    },
    {
      year: 2019,
      month: 2019,
      housingcost: 341915,
    },
    {
      year: 2014,
      month: 2014,
      housingcost: 259249,
    },
    {
      year: 2019,
      month: 2019,
      housingcost: 342614,
    },
    {
      year: 2014,
      month: 2014,
      housingcost: 254481,
    },
    {
      year: 2018,
      month: 2018,
      housingcost: 333344,
    },
    {
      year: 2015,
      month: 2015,
      housingcost: 276036,
    },
    {
      year: 2020,
      month: 2020,
      housingcost: 348187,
    },
    {
      year: 2019,
      month: 2019,
      housingcost: 341410,
    },
    {
      year: 2013,
      month: 2013,
      housingcost: 249379,
    },
    {
      year: 2015,
      month: 2015,
      housingcost: 264885,
    },
    {
      year: 2020,
      month: 2020,
      housingcost: 356211,
    },
    {
      year: 2020,
      month: 2020,
      housingcost: 354207,
    },
    {
      year: 2016,
      month: 2016,
      housingcost: 289872,
    },
    {
      year: 2014,
      month: 2014,
      housingcost: 255085,
    },
    {
      year: 2016,
      month: 2016,
      housingcost: 288625,
    },
    {
      year: 2015,
      month: 2015,
      housingcost: 271362,
    },
    {
      year: 2016,
      month: 2016,
      housingcost: 294236,
    },
    {
      year: 2010,
      month: 2010,
      housingcost: 226839,
    },
    {
      year: 2020,
      month: 2020,
      housingcost: 346416,
    },
    {
      year: 2013,
      month: 2013,
      housingcost: 237984,
    },
    {
      year: 2016,
      month: 2016,
      housingcost: 285917,
    },
    {
      year: 2011,
      month: 2011,
      housingcost: 219486,
    },
    {
      year: 2013,
      month: 2013,
      housingcost: 224539,
    },
    {
      year: 2014,
      month: 2014,
      housingcost: 262116,
    },
    {
      year: 2017,
      month: 2017,
      housingcost: 305576,
    },
    {
      year: 2012,
      month: 2012,
      housingcost: 213634,
    },
    {
      year: 2011,
      month: 2011,
      housingcost: 215750,
    },
    {
      year: 2012,
      month: 2012,
      housingcost: 209390,
    },
    {
      year: 2013,
      month: 2013,
      housingcost: 240507,
    },
  ],
  covid: [
    {
      year: 2020,
      month: 5,
      day: 20,
      cases: 1891,
    },
    {
      year: 2020,
      month: 6,
      day: 24,
      cases: 3129,
    },
    {
      year: 2020,
      month: 4,
      day: 2,
      cases: 303,
    },
    {
      year: 2020,
      month: 9,
      day: 15,
      cases: 9098,
    },
    {
      year: 2020,
      month: 9,
      day: 16,
      cases: 9144,
    },
    {
      year: 2020,
      month: 3,
      day: 4,
      cases: 0,
    },
    {
      year: 2020,
      month: 10,
      day: 11,
      cases: 10419,
    },
    {
      year: 2020,
      month: 3,
      day: 15,
      cases: 9,
    },
    {
      year: 2020,
      month: 4,
      day: 21,
      cases: 978,
    },
    {
      year: 2020,
      month: 3,
      day: 12,
      cases: 5,
    },
    {
      year: 2020,
      month: 5,
      day: 13,
      cases: 1689,
    },
    {
      year: 2020,
      month: 7,
      day: 31,
      cases: 6486,
    },
    {
      year: 2020,
      month: 5,
      day: 2,
      cases: 1363,
    },
    {
      year: 2020,
      month: 9,
      day: 21,
      cases: 9410,
    },
    {
      year: 2020,
      month: 7,
      day: 27,
      cases: 6094,
    },
    {
      year: 2020,
      month: 8,
      day: 20,
      cases: 7885,
    },
    {
      year: 2020,
      month: 4,
      day: 16,
      cases: 806,
    },
    {
      year: 2020,
      month: 8,
      day: 21,
      cases: 7946,
    },
    {
      year: 2020,
      month: 7,
      day: 20,
      cases: 5451,
    },
    {
      year: 2020,
      month: 5,
      day: 1,
      cases: 1331,
    },
    {
      year: 2020,
      month: 4,
      day: 12,
      cases: 664,
    },
    {
      year: 2020,
      month: 8,
      day: 8,
      cases: 7051,
    },
    {
      year: 2020,
      month: 2,
      day: 17,
      cases: 0,
    },
    {
      year: 2020,
      month: 10,
      day: 4,
      cases: 10033,
    },
    {
      year: 2020,
      month: 3,
      day: 2,
      cases: 0,
    },
    {
      year: 2020,
      month: 9,
      day: 26,
      cases: 9651,
    },
    {
      year: 2020,
      month: 5,
      day: 15,
      cases: 1755,
    },
    {
      year: 2020,
      month: 8,
      day: 3,
      cases: 6683,
    },
    {
      year: 2020,
      month: 4,
      day: 19,
      cases: 917,
    },
    {
      year: 2020,
      month: 10,
      day: 2,
      cases: 9935,
    },
    {
      year: 2020,
      month: 7,
      day: 24,
      cases: 5868,
    },
    {
      year: 2020,
      month: 4,
      day: 7,
      cases: 482,
    },
    {
      year: 2020,
      month: 8,
      day: 25,
      cases: 8154,
    },
    {
      year: 2020,
      month: 3,
      day: 17,
      cases: 16,
    },
    {
      year: 2020,
      month: 3,
      day: 6,
      cases: 1,
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
      day: 2,
      cases: 8555,
    },
    {
      year: 2020,
      month: 6,
      day: 30,
      cases: 3556,
    },
    {
      year: 2020,
      month: 4,
      day: 26,
      cases: 1161,
    },
    {
      year: 2020,
      month: 4,
      day: 13,
      cases: 692,
    },
    {
      year: 2020,
      month: 6,
      day: 2,
      cases: 2245,
    },
    {
      year: 2020,
      month: 7,
      day: 9,
      cases: 4396,
    },
    {
      year: 2020,
      month: 7,
      day: 2,
      cases: 3737,
    },
    {
      year: 2020,
      month: 5,
      day: 25,
      cases: 2029,
    },
    {
      year: 2020,
      month: 7,
      day: 23,
      cases: 5762,
    },
    {
      year: 2020,
      month: 2,
      day: 22,
      cases: 0,
    },
    {
      year: 2020,
      month: 4,
      day: 15,
      cases: 768,
    },
    {
      year: 2020,
      month: 1,
      day: 23,
      cases: 0,
    },
    {
      year: 2020,
      month: 3,
      day: 21,
      cases: 41,
    },
    {
      year: 2020,
      month: 6,
      day: 13,
      cases: 2587,
    },
    {
      year: 2020,
      month: 7,
      day: 7,
      cases: 4177,
    },
    {
      year: 2020,
      month: 6,
      day: 7,
      cases: 2391,
    },
    {
      year: 2020,
      month: 3,
      day: 8,
      cases: 2,
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
      day: 28,
      cases: 3401,
    },
    {
      year: 2020,
      month: 6,
      day: 16,
      cases: 2697,
    },
    {
      year: 2020,
      month: 1,
      day: 25,
      cases: 0,
    },
    {
      year: 2020,
      month: 3,
      day: 20,
      cases: 33,
    },
    {
      year: 2020,
      month: 5,
      day: 17,
      cases: 1804,
    },
    {
      year: 2020,
      month: 4,
      day: 27,
      cases: 1189,
    },
    {
      year: 2020,
      month: 2,
      day: 8,
      cases: 0,
    },
    {
      year: 2020,
      month: 7,
      day: 13,
      cases: 4773,
    },
    {
      year: 2020,
      month: 7,
      day: 8,
      cases: 4279,
    },
    {
      year: 2020,
      month: 4,
      day: 30,
      cases: 1294,
    },
    {
      year: 2020,
      month: 9,
      day: 14,
      cases: 9055,
    },
    {
      year: 2020,
      month: 4,
      day: 5,
      cases: 409,
    },
    {
      year: 2020,
      month: 3,
      day: 5,
      cases: 0,
    },
    {
      year: 2020,
      month: 10,
      day: 1,
      cases: 9875,
    },
    {
      year: 2020,
      month: 6,
      day: 22,
      cases: 3007,
    },
    {
      year: 2020,
      month: 9,
      day: 12,
      cases: 8977,
    },
    {
      year: 2020,
      month: 9,
      day: 10,
      cases: 8883,
    },
    {
      year: 2020,
      month: 6,
      day: 18,
      cases: 2790,
    },
    {
      year: 2020,
      month: 1,
      day: 26,
      cases: 0,
    },
    {
      year: 2020,
      month: 4,
      day: 24,
      cases: 1099,
    },
    {
      year: 2020,
      month: 8,
      day: 9,
      cases: 7104,
    },
    {
      year: 2020,
      month: 9,
      day: 23,
      cases: 9491,
    },
    {
      year: 2020,
      month: 10,
      day: 8,
      cases: 10246,
    },
    {
      year: 2020,
      month: 7,
      day: 4,
      cases: 3903,
    },
    {
      year: 2020,
      month: 8,
      day: 31,
      cases: 8460,
    },
    {
      year: 2020,
      month: 8,
      day: 28,
      cases: 8316,
    },
    {
      year: 2020,
      month: 8,
      day: 12,
      cases: 7339,
    },
    {
      year: 2020,
      month: 9,
      day: 6,
      cases: 8745,
    },
    {
      year: 2020,
      month: 8,
      day: 13,
      cases: 7406,
    },
    {
      year: 2020,
      month: 5,
      day: 7,
      cases: 1519,
    },
    {
      year: 2020,
      month: 9,
      day: 30,
      cases: 9826,
    },
    {
      year: 2020,
      month: 6,
      day: 14,
      cases: 2617,
    },
    {
      year: 2020,
      month: 8,
      day: 26,
      cases: 8211,
    },
    {
      year: 2020,
      month: 2,
      day: 28,
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
      month: 2,
      day: 26,
      cases: 0,
    },
    {
      year: 2020,
      month: 3,
      day: 11,
      cases: 4,
    },
    {
      year: 2020,
      month: 4,
      day: 29,
      cases: 1257,
    },
    {
      year: 2020,
      month: 4,
      day: 18,
      cases: 884,
    },
    {
      year: 2020,
      month: 8,
      day: 22,
      cases: 8006,
    },
    {
      year: 2020,
      month: 8,
      day: 11,
      cases: 7242,
    },
    {
      year: 2020,
      month: 8,
      day: 16,
      cases: 7631,
    },
    {
      year: 2020,
      month: 9,
      day: 18,
      cases: 9254,
    },
    {
      year: 2020,
      month: 8,
      day: 27,
      cases: 8262,
    },
    {
      year: 2020,
      month: 9,
      day: 17,
      cases: 9198,
    },
    {
      year: 2020,
      month: 8,
      day: 5,
      cases: 6829,
    },
    {
      year: 2020,
      month: 1,
      day: 24,
      cases: 0,
    },
    {
      year: 2020,
      month: 7,
      day: 18,
      cases: 5296,
    },
    {
      year: 2020,
      month: 5,
      day: 12,
      cases: 1663,
    },
    {
      year: 2020,
      month: 8,
      day: 7,
      cases: 6982,
    },
    {
      year: 2020,
      month: 5,
      day: 11,
      cases: 1634,
    },
    {
      year: 2020,
      month: 1,
      day: 28,
      cases: 0,
    },
    {
      year: 2020,
      month: 9,
      day: 3,
      cases: 8605,
    },
    {
      year: 2020,
      month: 1,
      day: 29,
      cases: 0,
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
      day: 11,
      cases: 4612,
    },
    {
      year: 2020,
      month: 8,
      day: 18,
      cases: 7753,
    },
    {
      year: 2020,
      month: 4,
      day: 3,
      cases: 339,
    },
    {
      year: 2020,
      month: 4,
      day: 14,
      cases: 731,
    },
    {
      year: 2020,
      month: 6,
      day: 3,
      cases: 2272,
    },
    {
      year: 2020,
      month: 6,
      day: 6,
      cases: 2369,
    },
    {
      year: 2020,
      month: 9,
      day: 27,
      cases: 9691,
    },
    {
      year: 2020,
      month: 8,
      day: 10,
      cases: 7191,
    },
    {
      year: 2020,
      month: 8,
      day: 1,
      cases: 6567,
    },
    {
      year: 2020,
      month: 10,
      day: 6,
      cases: 10129,
    },
    {
      year: 2020,
      month: 9,
      day: 5,
      cases: 8710,
    },
    {
      year: 2020,
      month: 7,
      day: 29,
      cases: 6316,
    },
    {
      year: 2020,
      month: 2,
      day: 21,
      cases: 0,
    },
    {
      year: 2020,
      month: 6,
      day: 9,
      cases: 2450,
    },
    {
      year: 2020,
      month: 9,
      day: 20,
      cases: 9344,
    },
    {
      year: 2020,
      month: 5,
      day: 31,
      cases: 2190,
    },
    {
      year: 2020,
      month: 6,
      day: 12,
      cases: 2555,
    },
    {
      year: 2020,
      month: 4,
      day: 10,
      cases: 602,
    },
    {
      year: 2020,
      month: 7,
      day: 19,
      cases: 5365,
    },
    {
      year: 2020,
      month: 7,
      day: 15,
      cases: 4996,
    },
    {
      year: 2020,
      month: 3,
      day: 7,
      cases: 1,
    },
    {
      year: 2020,
      month: 7,
      day: 3,
      cases: 3839,
    },
    {
      year: 2020,
      month: 6,
      day: 27,
      cases: 3342,
    },
    {
      year: 2020,
      month: 9,
      day: 1,
      cases: 8507,
    },
    {
      year: 2020,
      month: 7,
      day: 21,
      cases: 5559,
    },
    {
      year: 2020,
      month: 3,
      day: 27,
      cases: 139,
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
      day: 13,
      cases: 9013,
    },
    {
      year: 2020,
      month: 2,
      day: 13,
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
      month: 6,
      day: 25,
      cases: 3195,
    },
    {
      year: 2020,
      month: 7,
      day: 28,
      cases: 6200,
    },
    {
      year: 2020,
      month: 3,
      day: 14,
      cases: 8,
    },
    {
      year: 2020,
      month: 8,
      day: 17,
      cases: 7678,
    },
    {
      year: 2020,
      month: 4,
      day: 20,
      cases: 952,
    },
    {
      year: 2020,
      month: 7,
      day: 6,
      cases: 4078,
    },
    {
      year: 2020,
      month: 7,
      day: 5,
      cases: 3989,
    },
    {
      year: 2020,
      month: 9,
      day: 29,
      cases: 9779,
    },
    {
      year: 2020,
      month: 6,
      day: 19,
      cases: 2848,
    },
    {
      year: 2020,
      month: 7,
      day: 17,
      cases: 5207,
    },
    {
      year: 2020,
      month: 4,
      day: 9,
      cases: 561,
    },
    {
      year: 2020,
      month: 3,
      day: 18,
      cases: 19,
    },
    {
      year: 2020,
      month: 1,
      day: 30,
      cases: 0,
    },
    {
      year: 2020,
      month: 8,
      day: 19,
      cases: 7828,
    },
    {
      year: 2020,
      month: 5,
      day: 5,
      cases: 1452,
    },
    {
      year: 2020,
      month: 3,
      day: 23,
      cases: 65,
    },
    {
      year: 2020,
      month: 5,
      day: 19,
      cases: 1860,
    },
    {
      year: 2020,
      month: 4,
      day: 22,
      cases: 1017,
    },
    {
      year: 2020,
      month: 9,
      day: 9,
      cases: 8843,
    },
    {
      year: 2020,
      month: 9,
      day: 4,
      cases: 8656,
    },
    {
      year: 2020,
      month: 6,
      day: 23,
      cases: 3074,
    },
    {
      year: 2020,
      month: 5,
      day: 9,
      cases: 1585,
    },
    {
      year: 2020,
      month: 4,
      day: 28,
      cases: 1220,
    },
    {
      year: 2020,
      month: 4,
      day: 11,
      cases: 635,
    },
    {
      year: 2020,
      month: 8,
      day: 4,
      cases: 6767,
    },
    {
      year: 2020,
      month: 2,
      day: 19,
      cases: 0,
    },
    {
      year: 2020,
      month: 6,
      day: 15,
      cases: 2655,
    },
    {
      year: 2020,
      month: 9,
      day: 24,
      cases: 9539,
    },
    {
      year: 2020,
      month: 3,
      day: 1,
      cases: 0,
    },
    {
      year: 2020,
      month: 8,
      day: 15,
      cases: 7567,
    },
    {
      year: 2020,
      month: 5,
      day: 28,
      cases: 2109,
    },
    {
      year: 2020,
      month: 6,
      day: 11,
      cases: 2520,
    },
    {
      year: 2020,
      month: 6,
      day: 5,
      cases: 2339,
    },
    {
      year: 2020,
      month: 5,
      day: 29,
      cases: 2139,
    },
    {
      year: 2020,
      month: 3,
      day: 19,
      cases: 25,
    },
    {
      year: 2020,
      month: 6,
      day: 1,
      cases: 2216,
    },
    {
      year: 2020,
      month: 5,
      day: 27,
      cases: 2077,
    },
    {
      year: 2020,
      month: 9,
      day: 19,
      cases: 9305,
    },
    {
      year: 2020,
      month: 5,
      day: 23,
      cases: 1980,
    },
    {
      year: 2020,
      month: 9,
      day: 25,
      cases: 9596,
    },
    {
      year: 2020,
      month: 8,
      day: 6,
      cases: 6917,
    },
    {
      year: 2020,
      month: 5,
      day: 10,
      cases: 1604,
    },
    {
      year: 2020,
      month: 5,
      day: 22,
      cases: 1951,
    },
    {
      year: 2020,
      month: 4,
      day: 25,
      cases: 1131,
    },
    {
      year: 2020,
      month: 4,
      day: 4,
      cases: 376,
    },
    {
      year: 2020,
      month: 3,
      day: 26,
      cases: 116,
    },
    {
      year: 2020,
      month: 2,
      day: 29,
      cases: 0,
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
      day: 6,
      cases: 445,
    },
    {
      year: 2020,
      month: 7,
      day: 22,
      cases: 5662,
    },
    {
      year: 2020,
      month: 2,
      day: 10,
      cases: 0,
    },
    {
      year: 2020,
      month: 8,
      day: 24,
      cases: 8102,
    },
    {
      year: 2020,
      month: 4,
      day: 17,
      cases: 852,
    },
    {
      year: 2020,
      month: 3,
      day: 29,
      cases: 184,
    },
    {
      year: 2020,
      month: 3,
      day: 16,
      cases: 12,
    },
    {
      year: 2020,
      month: 3,
      day: 10,
      cases: 2,
    },
    {
      year: 2020,
      month: 3,
      day: 3,
      cases: 0,
    },
    {
      year: 2020,
      month: 5,
      day: 26,
      cases: 2055,
    },
    {
      year: 2020,
      month: 5,
      day: 6,
      cases: 1488,
    },
    {
      year: 2020,
      month: 6,
      day: 29,
      cases: 3459,
    },
    {
      year: 2020,
      month: 2,
      day: 1,
      cases: 0,
    },
    {
      year: 2020,
      month: 1,
      day: 31,
      cases: 0,
    },
    {
      year: 2020,
      month: 4,
      day: 8,
      cases: 523,
    },
    {
      year: 2020,
      month: 8,
      day: 30,
      cases: 8410,
    },
    {
      year: 2020,
      month: 6,
      day: 8,
      cases: 2423,
    },
    {
      year: 2020,
      month: 10,
      day: 3,
      cases: 9990,
    },
    {
      year: 2020,
      month: 5,
      day: 30,
      cases: 2167,
    },
    {
      year: 2020,
      month: 7,
      day: 1,
      cases: 3649,
    },
    {
      year: 2020,
      month: 2,
      day: 12,
      cases: 0,
    },
    {
      year: 2020,
      month: 10,
      day: 10,
      cases: 10369,
    },
    {
      year: 2020,
      month: 7,
      day: 30,
      cases: 6394,
    },
    {
      year: 2020,
      month: 3,
      day: 31,
      cases: 238,
    },
    {
      year: 2020,
      month: 9,
      day: 28,
      cases: 9732,
    },
    {
      year: 2020,
      month: 2,
      day: 16,
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
      month: 6,
      day: 21,
      cases: 2950,
    },
    {
      year: 2020,
      month: 6,
      day: 17,
      cases: 2738,
    },
    {
      year: 2020,
      month: 7,
      day: 14,
      cases: 4886,
    },
    {
      year: 2020,
      month: 7,
      day: 12,
      cases: 4685,
    },
    {
      year: 2020,
      month: 3,
      day: 28,
      cases: 164,
    },
    {
      year: 2020,
      month: 5,
      day: 16,
      cases: 1782,
    },
    {
      year: 2020,
      month: 1,
      day: 27,
      cases: 0,
    },
    {
      year: 2020,
      month: 4,
      day: 1,
      cases: 267,
    },
    {
      year: 2020,
      month: 8,
      day: 29,
      cases: 8369,
    },
    {
      year: 2020,
      month: 10,
      day: 9,
      cases: 10311,
    },
    {
      year: 2020,
      month: 10,
      day: 5,
      cases: 10085,
    },
    {
      year: 2020,
      month: 3,
      day: 30,
      cases: 210,
    },
    {
      year: 2020,
      month: 9,
      day: 22,
      cases: 9446,
    },
    {
      year: 2020,
      month: 7,
      day: 25,
      cases: 5955,
    },
    {
      year: 2020,
      month: 7,
      day: 16,
      cases: 5095,
    },
    {
      year: 2020,
      month: 6,
      day: 26,
      cases: 3273,
    },
    {
      year: 2020,
      month: 6,
      day: 4,
      cases: 2297,
    },
    {
      year: 2020,
      month: 2,
      day: 23,
      cases: 0,
    },
    {
      year: 2020,
      month: 2,
      day: 24,
      cases: 0,
    },
    {
      year: 2020,
      month: 6,
      day: 10,
      cases: 2484,
    },
    {
      year: 2020,
      month: 10,
      day: 12,
      cases: 10467,
    },
    {
      year: 2020,
      month: 5,
      day: 24,
      cases: 2004,
    },
    {
      year: 2020,
      month: 8,
      day: 14,
      cases: 7505,
    },
    {
      year: 2020,
      month: 9,
      day: 11,
      cases: 8932,
    },
    {
      year: 2020,
      month: 6,
      day: 20,
      cases: 2905,
    },
    {
      year: 2020,
      month: 5,
      day: 8,
      cases: 1551,
    },
    {
      year: 2020,
      month: 8,
      day: 23,
      cases: 8051,
    },
    {
      year: 2020,
      month: 2,
      day: 11,
      cases: 0,
    },
    {
      year: 2020,
      month: 2,
      day: 27,
      cases: 0,
    },
    {
      year: 2020,
      month: 2,
      day: 7,
      cases: 0,
    },
    {
      year: 2020,
      month: 9,
      day: 8,
      cases: 8804,
    },
    {
      year: 2020,
      month: 3,
      day: 24,
      cases: 79,
    },
    {
      year: 2020,
      month: 9,
      day: 7,
      cases: 8771,
    },
    {
      year: 2020,
      month: 5,
      day: 14,
      cases: 1723,
    },
    {
      year: 2020,
      month: 2,
      day: 5,
      cases: 0,
    },
    {
      year: 2020,
      month: 5,
      day: 18,
      cases: 1834,
    },
    {
      year: 2020,
      month: 3,
      day: 22,
      cases: 51,
    },
    {
      year: 2020,
      month: 10,
      day: 7,
      cases: 10185,
    },
    {
      year: 2020,
      month: 2,
      day: 20,
      cases: 0,
    },
    {
      year: 2020,
      month: 2,
      day: 9,
      cases: 0,
    },
    {
      year: 2020,
      month: 1,
      day: 22,
      cases: 0,
    },
    {
      year: 2020,
      month: 4,
      day: 23,
      cases: 1061,
    },
    {
      year: 2020,
      month: 2,
      day: 3,
      cases: 0,
    },
    {
      year: 2020,
      month: 5,
      day: 21,
      cases: 1921,
    },
    {
      year: 2020,
      month: 3,
      day: 13,
      cases: 6,
    },
    {
      year: 2020,
      month: 7,
      day: 10,
      cases: 4519,
    },
    {
      year: 2020,
      month: 5,
      day: 3,
      cases: 1392,
    },
    {
      year: 2020,
      month: 8,
      day: 2,
      cases: 6629,
    },
    {
      year: 2020,
      month: 5,
      day: 4,
      cases: 1421,
    },
    {
      year: 2020,
      month: 7,
      day: 26,
      cases: 6029,
    },
    {
      year: 2020,
      month: 3,
      day: 25,
      cases: 94,
    },
  ],
  historicalweather: [
    {
      month: 'Nov',
      precipitation: 2.2309269442262374,
      temperature: 46.270149253731354,
    },
    {
      month: 'Jun',
      precipitation: 3.9910447761194074,
      temperature: 69.84642576590743,
    },
    {
      month: 'Jan',
      precipitation: 3.547564807541244,
      temperature: 38.45129615082481,
    },
    {
      month: 'May',
      precipitation: 4.506087981146897,
      temperature: 62.195915161036915,
    },
    {
      month: 'Mar',
      precipitation: 2.634650432050274,
      temperature: 45.34084838963078,
    },
    {
      month: 'Oct',
      precipitation: 3.7357187745483107,
      temperature: 58.45632364493329,
    },
    {
      month: 'Jul',
      precipitation: 3.1278476040848378,
      temperature: 75.13409269442265,
    },
    {
      month: 'Dec',
      precipitation: 3.6675726630007874,
      temperature: 42.71358994501186,
    },
    {
      month: 'Feb',
      precipitation: 4.093534956794978,
      temperature: 39.51060487038494,
    },
    {
      month: 'Sep',
      precipitation: 2.3753181461115496,
      temperature: 70.70188531029086,
    },
    {
      month: 'Apr',
      precipitation: 3.320329929300865,
      temperature: 56.174234092694434,
    },
    {
      month: 'Aug',
      precipitation: 3.3370699135899486,
      temperature: 74.06763550667728,
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

  const household = c1.historicalincome.map(c => {
    return c.householdincome;
  });

  const individual = c1.historicalincome.map(c => {
    return c.individualincome;
  });

  const labels = c1.historicalincome.map(c => {
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
        steppedLine: true,
      },
      {
        label: 'Household Income',
        backgroundColor: '#dd7a6a',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: household,
        pointBorderWidth: 1,
        pointBackgroundColor: '#000000',
        steppedLine: true,
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
        steppedLine: true,
      },
      {
        label: 'Household Income',
        backgroundColor: '#32cd32',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: household2,
        pointBorderWidth: 1,
        pointBackgroundColor: '#000000',
        steppedLine: true,
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
              {formatNumber(Math.round(c1.population))}{' '}
            </h4>

            <h4 className="infographic">
              {c1.averagetemp > 0 ? (
                <span>
                  {c1.averagetemp > 40 ? (
                    <FaTemperatureHigh size="30px" />
                  ) : (
                    <FaTemperatureLow size="30px" />
                  )}
                  &nbsp; <strong>Avg Temp:</strong> &nbsp;{' '}
                  {c1.averagetemp.toFixed(1)}
                  &deg;
                </span>
              ) : null}
            </h4>

            <h4 className="infographic">
              {c1.averageperc > 0 ? (
                <span>
                  {c1.averageperc > 4 ? (
                    <RiContrastDrop2Line size="30px" />
                  ) : (
                    <RiDropLine size="30px" />
                  )}
                  &nbsp; <strong>Avg Prec.:</strong> &nbsp;{' '}
                  {c1.averageperc.toFixed(1)}
                </span>
              ) : null}
            </h4>

            <h4 className="infographic">
              {c1.costoflivingindex > 100 ? (
                <FaArrowCircleUp size="30px" />
              ) : (
                <FaArrowCircleDown size="30px" />
              )}
              &nbsp; <strong>CLI*:</strong> &nbsp;{' '}
              {Math.round(c1.costoflivingindex)}%
            </h4>

            {c1.timezone ? (
              <h4 className="infographic">
                <RiTimerLine size="30px" />
                &nbsp; <strong>TZ:</strong> &nbsp; {c1.timezone}
              </h4>
            ) : null}

            <h4 className="infographic">
              <RiGiftLine size="30px" /> &nbsp; <strong>Avg Age:</strong> &nbsp;
              {Math.round(c1.averageage)}
            </h4>

            <h4 className="infographic">
              {' '}
              <RiMoneyDollarBoxLine size="30px" /> &nbsp;{' '}
              <strong>Avg. Rent:</strong> &nbsp; $
              {formatNumber(Math.round(c1.rent))}{' '}
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
                <strong>Avg Covid Cases**:</strong>{' '}
                {formatNumber(Math.round(c1.avgnewcovidcases))}/month
              </h4>
            ) : null}
          </aside>

          <img src={c1.wikiimgurl} width="500px" alt={c1.citynamestate} />
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
              &nbsp; <strong>CLI*:</strong> &nbsp; {c2.costoflivingindex}%
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
                <strong>Avg Covid Cases**:</strong> &nbsp;{' '}
                {formatNumber(Math.round(c2.avgnewcovidcases))}/month
              </h4>
            ) : null}
          </aside>
          <img src={c2.wikiimgurl} width="500px" alt={c2.citynamestate} />
        </div>
      </Container>
    </>
  );
};

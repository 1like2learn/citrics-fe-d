import styled from 'styled-components';

const CitySearchDiv = styled.div`
  background-color: white;
  height: 100vh;
  /* * {
    border: grey solid 1px;
  } */
  div.citySearchCont {
    height: 100vh;
    width: 100%;
    display: flex;

    section.citySearchTextDescription {
      width: 50%;
      display: flex;
      flex-direction: column-reverse;
      background-repeat: no-repeat;
      background-color: #cccccc;
      background-position: center;
      background-size: cover;

      div.citySearchTextCont {
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        padding: 2%;
        margin: 4% auto;
        width: 88%;

        h2 {
          color: white;
        }

        p {
        }
      }
    }
    section.citySearchDataPanel {
      width: 50%;

      div.citySearchMap {
        height: 50vh;
      }
      div.citySearchDataCont {
        height: 50vh;

        div.citySearchSingleCityChart {
          height: 25vh;
        }
      }
    }
  }
`;

const HeaderBar = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 15vh;
  align-items: center;
  align-content: center;
  margin: 0 auto;
  background-color: rgba(00, 00, 00, 0.7);

  .search {
    text-align: center;
    display: flex;
    flex-direction: row;
    width: 60%;
    align-items: center;
    align-content: center;
  }

  .aside {
    display: flex;
    font-size: 0.6rem;
    align-items: flex-end;
    color: #ffffff;
  }

  .right {
    display: flex;
    justify-content: center;
    align-content: center;
    font-size: 1rem;
    flex-direction: row;
    width: 35%;
    margin: 1% auto;

    .login {
      background-color: rgba(00, 00, 00, 0);
    }

    button {
      margin: 2%;
      width: 100%;
      background-color: #d35540;
      border: 0;
      border-radius: 25px;
      color: #ffffff;
      height: 20px;
      font-family: 'Norwester', sans serif;
    }
  }
`;
const SearchBar = styled.form`
  margin: 0 5%;
  width: 60%;

  input {
    position: relative;
    display: flex;
    border-radius: 10px;
    border: 0;
    display: inline-block;
    text-align: center;
    margin: 0 2%;
    height: 20px;
    width: 100%;
  }
`;

export { HeaderBar, SearchBar, CitySearchDiv };

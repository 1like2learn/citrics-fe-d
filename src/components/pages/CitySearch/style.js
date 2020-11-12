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
        .city-search-details {
        }
      }
    }
  }
`;

const HeaderBar = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 15vh;
  align-items: center;
  align-content: center;
  margin: 0 auto;
  background-color: rgba(00, 00, 00, 0);
  z-index: 100;
  .left {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 50%;

    .search {
      display: flex;
      flex-direction: column;
      width: 60%;
      align-items: flex-end;
      align-content: center;
      justify-content: center;
      padding: 0;
    }

    .aside {
      display: flex;
      font-size: 0.6rem;
      align-items: flex-end;
      color: #ffffff;
      margin: 0;
    }
  }

  .right {
    display: flex;
    justify-content: flex-end;
    align-content: flex-end;
    font-size: 1rem;
    color: #5e5e5e;
    flex-direction: row;
    width: 50%;
    padding: 1% 2.5%;
  }
`;
const SearchBar = styled.form`
  display: flex;
  margin: auto 0;
  width: 370px;
  height: 46.16px;
  .search-icon-container {
    display: flex;
    align-items: center;
    background-color: #ffffff;
    border-radius: 0 15px 15px 0;
    color: #c4c4c4;
    height: 46.16px;
    width: 55px;
    padding: 0 4%;
    .search-icon {
      height: 27.56px;
      width: 27.56px;
      color: #c4c4c4;
    }
  }
  label {
    width: 100%;
    input {
      display: flex;
      border-radius: 15px 0 0 15px;
      border: 0;
      display: inline-block;
      text-align: start;
      padding: 0 5%;
      height: 46.16px;
      width: 100%;
      &::placeholder {
        color: #c4c4c4;
        font-size: 1.5rem;
      }
      &:focus {
        border: none;
        outline: none;
      }
    }
  }
`;

export { HeaderBar, SearchBar, CitySearchDiv };

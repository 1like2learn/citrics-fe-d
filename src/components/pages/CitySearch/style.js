import styled from 'styled-components';

const CitySearchDiv = styled.div`
  background-color: white;
  height: 100vh;

  div.citySearchCont {
    // left
    height: 100vh;
    width: 100%;
    display: flex;

    section.citySearchTextDescription {
      // left
      width: 50%;
      display: flex;
      flex-direction: column-reverse;
      background-repeat: no-repeat;
      background-color: #cccccc;
      background-position: center;
      background-size: cover;

      div.citySearchTextCont {
        background-color: rgba(0, 0, 0, 0.4);
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
      // right
      width: 50%;

      div.citySearchMap {
        // map
        height: 50vh;
      }
      div.citySearchDataCont {
        // data card
        height: 50vh;

        div {
          // graph
          height: 25vh;
        }
      }
    }
  }
`;

export default CitySearchDiv;

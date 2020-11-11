import styled from 'styled-components';

const LandingPageDiv = styled.div`
  background-repeat: no-repeat;
  background-color: #cccccc;
  height: 100vh;
  background-position: center;
  background-size: cover;

  div.landingPageCont {
    padding: 3% 7%;
    align-content: center;
    width: 40%;
    text-align: center;

    img {
      width: 150px;
      padding: 10% auto;
    }

    h1 {
      font-family: 'Montserrat', sans serif;
      color: #d3553f;
      font-size: 3rem;
      margin: 3% 0;
    }

    p {
      font-family: 'Norwester', sans serif;
      text-align: center;
      font-size: large;
      font-stretch: extra-expanded;
    }
  }
`;
export default LandingPageDiv;

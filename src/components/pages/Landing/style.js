import styled from 'styled-components';

const LandingPageDiv = styled.div`
  background-repeat: no-repeat;
  background-color: #cccccc;
  height: 100vh;
  background-position: center;
  background-size: cover;

  .landingPageCont {
    padding: 4% 0;
    align-content: center;
    width: 33%;
    text-align: center;

    .landing-page-logo {
      width: 150px;
      padding: 10% auto;
    }

    .landing-page-h1 {
      font-family: 'Norwester', sans-serif;
      color: #d3553f;
      font-size: 3rem;
      margin: 3% 0;
    }

    .landing-page-p {
      font-family: 'Montserrat', sans-serif;
      text-align: center;
      font-size: 1rem;
      font-stretch: ultra-expanded;
      letter-spacing: 2px;
      font-weight: 800;
    }
  }
`;
export default LandingPageDiv;

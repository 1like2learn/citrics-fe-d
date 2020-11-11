import styled from 'styled-components';

const CityDetailsContainer = styled.aside`
  display: flex;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
  .section1,
  .section2,
  .section3 {
    display: flex;
    height: inherit;
    flex-direction: column;
    align-items: space-evenly;
    justify-content: space-around;
    .info-div {
      padding: 0;
      span {
        font-family: 'Roboto';
        font-size: 0.75rem;
        font-weight: 800;
      }
      .count-div {
        display: flex;
        height: 1rem;
        align-items: flex-start;
        align-self: center;
        justify-content: flex-start;
        .icon {
          color: #000;
          width: 1rem;
          height: 1rem;
          margin-right: 0.4rem;
          object-fit: fill;
        }
        .count {
          display: flex;
          height: 1rem;
          align-items: center;
          font-family: 'Roboto';
          font-size: 1rem;
          font-weight: 800;
          padding: 0;
          .fahrenheit {
            font-size: .5rem;
            align-self: flex-start;
          }
          .inch {
            font-size: .5rem;
            align-self: flex-end;
          }
        }
      }
    }
  }
`;

export default CityDetailsContainer;
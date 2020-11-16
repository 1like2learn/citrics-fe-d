import styled from 'styled-components';

const AdvancedSearchDiv = styled.div`
  padding: 10%;
  margin: 10%;

  div.advancedSearchField {
    display: flex;
    justify-content: space-between;
    padding: 1vw;

    label {
      position: relative;
      input.advancedSearchCheckbox {
        visibility: hidden;
      }
    }

    .styledCheckbox {
      position: absolute;
      top: 0;
      left: -8px;
      height: 20px;
      width: 20px;
      background-color: black;
    }

    input ~ .styledCheckbox {
      background-color: #e9e9e9;
    }

    input:active ~ .styledCheckbox {
      background-color: #d3553f;
    }

    input:checked ~ .styledCheckbox {
      background-color: #e9e9e9;
    }

    .styledCheckbox:after {
      content: '';
      position: absolute;
      display: none;
    }

    input:checked ~ .styledCheckbox:after {
      display: block;
    }

    .styledCheckbox:after {
      left: 8px;
      bottom: 5px;
      width: 6px;
      height: 12px;
      border: solid #d3553f;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }

    div.advancedSearchSlider {
      width: 50%;
    }
  }
`;

export default AdvancedSearchDiv;

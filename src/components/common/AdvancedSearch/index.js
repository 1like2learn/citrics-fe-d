import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';

import RangeSlider from './RangeSlider';
import AdvancedSearchDiv from './style';
import store from '../../../state';
import {
  updateFilter,
  updateFilterRange,
} from '../../../state/actions/cityActs';

function AdvancedSearch(props) {
  const { register, watch } = useForm();
  const { filter, rangeFilter } = props;
  const [preferences, setPreferences] = useState(filter);
  const { dispatch } = store;

  // changes preferences in global state and grabs new list of filtered cities
  const onSubmit = () => {
    updateFilter(dispatch, preferences, rangeFilter);
    console.log('preferences', preferences);
    console.log('rangeFilter advanced search', rangeFilter);
  };

  // checks to see if sliders should be enabled or not
  const salary = watch('salaryCheckbox');
  const population = watch('populationCheckbox');
  const rent = watch('rentCheckbox');
  const temp = watch('tempCheckbox');

  // handles changes to preferences
  const updatePreferences = (data, name) => {
    setPreferences({ ...preferences, [`${name}`]: data });
  };

  // first render grabs the values for the range
  useEffect(() => {
    updateFilterRange(dispatch);
  }, [dispatch]);

  useEffect(() => {
    setPreferences(filter);
  }, [filter, setPreferences]);

  useEffect(() => {
    updateFilter(dispatch, rangeFilter, filter);
  }, [dispatch, rangeFilter]);

  return (
    <AdvancedSearchDiv>
      <form>
        <div className="advancedSearchField">
          <label>
            <input
              className="advancedSearchCheckbox"
              name="salaryCheckbox"
              type="checkbox"
              ref={register}
            />
            <span className="styledCheckbox"></span>
            &nbsp;&nbsp;Salary
          </label>
          <div className="advancedSearchSlider">
            {preferences.salary[0]}
            <RangeSlider
              disabled={!salary}
              name={'salary'}
              value={[rangeFilter.salary[0], rangeFilter.salary[1]]}
              updatePreferences={updatePreferences}
            />
            {preferences.salary[1]}
          </div>
        </div>
        <div className="advancedSearchField">
          <label>
            <input
              className="advancedSearchCheckbox"
              name="populationCheckbox"
              type="checkbox"
              ref={register}
            ></input>
            <span className="styledCheckbox"></span>
            &nbsp;&nbsp;Population
          </label>
          <div className="advancedSearchSlider">
            {preferences.population[0]}
            <RangeSlider
              disabled={!population}
              name={'population'}
              value={[rangeFilter.population[0], rangeFilter.population[1]]}
              updatePreferences={updatePreferences}
            />
            {preferences.population[1]}
          </div>
        </div>
        <div className="advancedSearchField">
          <label>
            <input
              className="advancedSearchCheckbox"
              name="rentCheckbox"
              type="checkbox"
              ref={register}
            ></input>
            <span className="styledCheckbox"></span>
            &nbsp;&nbsp;Rental Prices
          </label>
          <div className="advancedSearchSlider">
            {preferences.rent[0]}
            <RangeSlider
              disabled={!rent}
              name={'rent'}
              value={[rangeFilter.rent[0], rangeFilter.rent[1]]}
              updatePreferences={updatePreferences}
            />
            {preferences.rent[1]}
          </div>
        </div>
        <div className="advancedSearchField">
          <label>
            <input
              className="advancedSearchCheckbox"
              name="tempCheckbox"
              type="checkbox"
              ref={register}
            ></input>
            <span className="styledCheckbox"></span>
            &nbsp;&nbsp;Average Temperature
          </label>
          <div className="advancedSearchSlider">
            {preferences.temp[0].toFixed(1)}
            <RangeSlider
              disabled={!temp}
              name={'temp'}
              value={[rangeFilter.temp[0], rangeFilter.temp[1]]}
              updatePreferences={updatePreferences}
            />
            {preferences.temp[1].toFixed(1)}
          </div>
        </div>
        <div className="advancedSearchField">
          <button type="button" onClick={onSubmit}>
            Apply Filters
          </button>
        </div>
      </form>
    </AdvancedSearchDiv>
  );
}

const mapStateToProps = state => {
  return {
    rangeFilter: state.rangeFilter,
    filter: state.filter,
  };
};

export default connect(mapStateToProps, {})(AdvancedSearch);

/* eslint react/no-multi-comp: 0, no-console: 0 */
// import '../assets/index.less';

// import React from 'react';
// import Slider from '../src';

// const { Range } = Slider;

// const style = { width: 400, margin: 50 };

// function log(value) {
//   console.log(value); //eslint-disable-line
// }

// class CustomizedRange extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       lowerBound: 20,
//       upperBound: 40,
//       value: [20, 40],
//     };
//   }

//   onLowerBoundChange = e => {
//     this.setState({ lowerBound: +e.target.value });
//   };

//   onUpperBoundChange = e => {
//     this.setState({ upperBound: +e.target.value });
//   };

//   onSliderChange = value => {
//     log(value);
//     this.setState({
//       value,
//     });
//   };

//   handleApply = () => {
//     const { lowerBound, upperBound } = this.state;
//     this.setState({ value: [lowerBound, upperBound] });
//   };

//   render() {
//     return (
//       <div>
//         <label>LowerBound: </label>
//         <input type="number" value={this.state.lowerBound} onChange={this.onLowerBoundChange} />
//         <br />
//         <label>UpperBound: </label>
//         <input type="number" value={this.state.upperBound} onChange={this.onUpperBoundChange} />
//         <br />
//         <button type="button" onClick={this.handleApply}>
//           Apply
//         </button>
//         <br />
//         <br />
//         <Range allowCross={false} value={this.state.value} onChange={this.onSliderChange} />
//       </div>
//     );
//   }
// }

// class DynamicBounds extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       min: 0,
//       max: 100,
//     };
//   }

//   onSliderChange = value => {
//     log(value);
//   };

//   onMinChange = e => {
//     this.setState({
//       min: +e.target.value || 0,
//     });
//   };

//   onMaxChange = e => {
//     this.setState({
//       max: +e.target.value || 100,
//     });
//   };

//   render() {
//     return (
//       <div>
//         <label>Min: </label>
//         <input type="number" value={this.state.min} onChange={this.onMinChange} />
//         <br />
//         <label>Max: </label>
//         <input type="number" value={this.state.max} onChange={this.onMaxChange} />
//         <br />
//         <br />
//         <Range
//           defaultValue={[20, 50]}
//           min={this.state.min}
//           max={this.state.max}
//           onChange={this.onSliderChange}
//         />
//       </div>
//     );
//   }
// }

// class ControlledRange extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: [20, 40, 60, 80],
//     };
//   }

//   handleChange = value => {
//     this.setState({
//       value,
//     });
//   };

//   render() {
//     return <Range value={this.state.value} onChange={this.handleChange} />;
//   }
// }

// class ControlledRangeDisableAcross extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: [20, 40, 60, 80],
//     };
//   }

//   handleChange = value => {
//     this.setState({
//       value,
//     });
//   };

//   render() {
//     return (
//       <Range
//         value={this.state.value}
//         onChange={this.handleChange}
//         allowCross={false}
//         {...this.props}
//       />
//     );
//   }
// }

// // https://github.com/react-component/slider/issues/226
// class PureRenderRange extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       foo: false,
//     };
//   }

//   handleChange = value => {
//     console.log(value);
//     this.setState(({ foo }) => ({ foo: !foo }));
//   };

//   render() {
//     return (
//       <Range defaultValue={[20, 40, 60, 80]} onChange={this.handleChange} allowCross={false} />
//     );
//   }
// }

// export default () => (
//   <div>
//     <div style={style}>
//       <p>Basic Range，`allowCross=false`</p>
//       <Range allowCross={false} defaultValue={[0, 20]} onChange={log} />
//     </div>
//     <div style={style}>
//       <p>Basic reverse Range`</p>
//       <Range allowCross={false} defaultValue={[0, 20]} onChange={log} reverse />
//     </div>
//     <div style={style}>
//       <p>Basic Range，`step=20` </p>
//       <Range step={20} defaultValue={[20, 20]} onBeforeChange={log} />
//     </div>
//     <div style={style}>
//       <p>Basic Range，`step=20, dots` </p>
//       <Range dots step={20} defaultValue={[20, 40]} onAfterChange={log} />
//     </div>
//     <div style={style}>
//       <p>Basic Range，disabled</p>
//       <Range allowCross={false} defaultValue={[0, 20]} onChange={log} disabled />
//     </div>
//     <div style={style}>
//       <p>Controlled Range</p>
//       <ControlledRange />
//     </div>
//     <div style={style}>
//       <p>Controlled Range, not allow across</p>
//       <ControlledRangeDisableAcross />
//     </div>
//     <div style={style}>
//       <p>Controlled Range, not allow across, pushable=5</p>
//       <ControlledRangeDisableAcross pushable={5} />
//     </div>
//     <div style={style}>
//       <p>Multi Range</p>
//       <Range count={3} defaultValue={[20, 40, 60, 80]} pushable />
//     </div>
//     <div style={style}>
//       <p>Multi Range with custom track and handle style</p>
//       <Range
//         count={3}
//         defaultValue={[20, 40, 60, 80]}
//         pushable
//         trackStyle={[{ backgroundColor: 'red' }, { backgroundColor: 'green' }]}
//         handleStyle={[{ backgroundColor: 'yellow' }, { backgroundColor: 'gray' }]}
//         railStyle={{ backgroundColor: 'black' }}
//       />
//     </div>
//     <div style={style}>
//       <p>Customized Range</p>
//       <CustomizedRange />
//     </div>
//     <div style={style}>
//       <p>Range with dynamic `max` `min`</p>
//       <DynamicBounds />
//     </div>
//     <div style={style}>
//       <p>Range as child component</p>
//       <PureRenderRange />
//     </div>
//   </div>
// );

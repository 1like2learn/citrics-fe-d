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
  const onSubmit = () => updateFilter(dispatch, preferences);

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
            <RangeSlider
              disabled={!salary}
              name={'salary'}
              min={rangeFilter.salaryMin}
              max={rangeFilter.salaryMax}
              updatePreferences={updatePreferences}
            />
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
            <RangeSlider
              disabled={!population}
              name={'population'}
              min={rangeFilter.populationMin}
              max={rangeFilter.populationMax}
              updatePreferences={updatePreferences}
            />
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
            <RangeSlider
              disabled={!rent}
              name={'rent'}
              min={rangeFilter.rentMin}
              max={rangeFilter.rentMax}
              updatePreferences={updatePreferences}
            />
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
            <RangeSlider
              disabled={!temp}
              name={'temp'}
              min={rangeFilter.avgTempMin}
              max={rangeFilter.avgTempMax}
              updatePreferences={updatePreferences}
            />
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

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import RangeSlider from './RangeSlider';
import AdvancedSearchDiv from './style';
import store from '../../../state';
import { updateFilter } from '../../../state/actions/cityActs';

const defaultPreferences = {
  salary: [0, 100],
  population: [0, 100],
  rent: [0, 100],
  temp: [0, 100],
  walk: [0, 100],
};

export default function AdvancedSearch() {
  const { register, watch } = useForm();
  const [preferences, setPreferences] = useState(defaultPreferences);
  const { dispatch } = store;

  const onSubmit = () => updateFilter(dispatch, preferences);

  const salary = watch('salaryCheckbox');
  const population = watch('populationCheckbox');
  const rent = watch('rentCheckbox');
  const temp = watch('tempCheckbox');
  const walk = watch('walkCheckbox');

  const updatePreferences = (data, name) => {
    setPreferences({ ...preferences, [`${name}`]: data });
  };

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
              updatePreferences={updatePreferences}
            />
          </div>
        </div>
        <div className="advancedSearchField">
          <label>
            <input
              className="advancedSearchCheckbox"
              name="walkCheckbox"
              type="checkbox"
              ref={register}
            ></input>
            <span className="styledCheckbox"></span>
            &nbsp;&nbsp;Walkability
          </label>

          <div className="advancedSearchSlider">
            <RangeSlider
              disabled={!walk}
              name={'walk'}
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

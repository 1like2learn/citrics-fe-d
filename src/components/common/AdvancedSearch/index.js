import React from 'react';
import { useForm } from 'react-hook-form';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

import RangeSlider from './RangeSlider';
import AdvancedSearchDiv from './style';

export default function AdvancedSearch() {
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = data => console.log(data);

  const salary = watch('salaryCheckbox');
  const population = watch('populationCheckbox');
  const rent = watch('rentCheckbox');
  const temp = watch('tempCheckbox');
  const walk = watch('walkCheckbox');

  return (
    <AdvancedSearchDiv>
      <form onSubmit={() => handleSubmit(onSubmit)}>
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
            <RangeSlider disabled={!salary} />
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
            <RangeSlider disabled={!population} />
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
            <RangeSlider disabled={!rent} />
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
            <RangeSlider disabled={!temp} />
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
            <RangeSlider disabled={!walk} />
          </div>
        </div>
      </form>
    </AdvancedSearchDiv>
  );
}

/* eslint react/no-multi-comp: 0, max-len: 0 */

import 'rc-slider/assets/index.css';
import React from 'react';
import Slider, { createSliderWithTooltip, Range } from 'rc-slider';

const handleStyleObj = {
  backgroundColor: '#d3553f',
  height: '30px',
  borderRadius: '35%',
  alignItems: 'center',
  borderColor: '#d3553f',
  marginTop: '-13px',
};
const disabledStyle = {
  borderColor: '#e9e9e9',
  backgroundColor: '#e9e9e9',
  height: '30px',
  borderRadius: '35%',
  alignItems: 'center',
  marginTop: '-13px',
};

function log(value) {
  console.log(value) //eslint-disable-line
}

export default function RangeSlider({ disabled }) {
  return (
    <div>
      <Range
        trackStyle={[
          disabled
            ? { backgroundColor: '#afafaf' }
            : { backgroundColor: '#d3553f' },
        ]}
        handleStyle={[
          disabled ? disabledStyle : handleStyleObj,
          disabled ? disabledStyle : handleStyleObj,
        ]}
        allowCross={true}
        disabled={disabled}
        defaultValue={[0, 100]}
        onChange={log}
      />
    </div>
  );
}

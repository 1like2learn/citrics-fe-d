import React from 'react';

import logic from './logic.js';
// import map from 'map';
// import
// import Header from '../../common/header';

logic();

export default function CitySearch() {
  return (
    <div class="citySearch">
      {/* nav */}
      <div>
        <div>
          {/* left */}
          <h2>city</h2>
          <p>description</p>
        </div>
        {/* left */}
        <div>
          {/* right */}
          <div>Map</div>
          <div>
            <div>graph</div>
            <div>data</div>
          </div>
        </div>
        {/* right */}
      </div>
    </div>
  );
}

import React from 'react';

import logic from './logic.js';
import dummyData from '../../../utils/dummyData';
import DataPanel from '../../common/DataPanel';
// import map from 'map';
// import
// import Header from '../../common/header';

logic();

export default function CitySearch() {
  const { citynamestate, wikiimgurl } = dummyData;
  return (
    <div class="citySearch">
      {/* nav */}
      <div class="citySearchCont">
        <section
          class="citySearchTextDescription"
          style={{ backgroundImage: `url(${wikiimgurl})` }}
        >
          <div class="citySearchTextCont">
            <h2>{citynamestate}</h2>
            <p>description</p>
          </div>
        </section>

        <section class="citySearchDataPanel">
          <div class="citySearchMap">Map</div>

          <div class="citySearchDataCont">
            <div>graph</div>
            <DataPanel props={dummyData} />
          </div>
        </section>
      </div>
    </div>
  );
}

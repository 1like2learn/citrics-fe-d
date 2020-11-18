import { AutoComplete } from 'antd';
import 'antd/dist/antd.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { numCitiesToUrl } from '../../../utils/helpers';

import { getCities, addToCurrent } from '../../../state/actions/cityActs';
import store from '../../../state';

const { Option } = AutoComplete;
function SearchBar(props) {
  const history = useHistory();
  const { dispatch } = store;

  const cityDict = {};
  const { allCities, currentCities } = props;

  useEffect(() => {
    fetch('https://labs28-d-citrics-api.herokuapp.com/cities/allid')
      .then(response => {
        return response.json();
      })
      .then(data => {
        getCities(dispatch, data);
      });
  }, [dispatch]);

  function term(cityName) {
    single(cityDict[cityName]);
  }

  function single(id) {
    fetch(`https://labs28-d-citrics-api.herokuapp.com/cities/city/${id}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        addToCurrent(dispatch, data);
      });
  }

  useEffect(() => {
    // Takes in the number of current cities and returns the url for the page to be on.
    history.push(numCitiesToUrl(currentCities.length));
  }, [currentCities, history]);
  return (
    <div className="search-bar">
      <AutoComplete
        className="search-bar"
        onSelect={term}
        placeholder="Search for a city . . . ."
        filterOption={true}
        style={{ width: '100%' }}
      >
        {allCities.map(city => {
          cityDict[city.citynamestate] = city.cityid;
          return (
            <Option key={city.cityid} value={city.citynamestate}>
              {city.citynamestate}
            </Option>
          );
        })}
      </AutoComplete>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    allCities: state.allCities,
    currentCities: state.currentCities,
  };
};

export default connect(mapStateToProps, {})(SearchBar);

import axios from 'axios';

export const getCities = (dispatch, cities) => {
  dispatch({
    type: 'GRAB_ALL_CITIES',
    payload: cities,
  });
};

// Takes in city data and grabs a new picture and summary for the city
// Then it adds all that data to state.
export const addToCurrent = async (dispatch, cityData) => {
  let formatedCityName = cityData.citynamestate.slice();

  formatedCityName = formatedCityName.split(',')[0].replace(' ', '_');

  await axios
    .get(
      `https://en.wikipedia.org/api/rest_v1/page/media-list/${formatedCityName}`
    )
    .then(response => {
      console.log('response.data.items[0].srcset[2].src', response);

      cityData.wikiimgurl = response.data.items[0].srcset[2].src;
    })
    .catch(error => console.log(error));

  await axios
    .get(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${formatedCityName}`
    )
    .then(response => {
      cityData.summary = response.data.extract;
    })
    .catch(error => console.log(error));

  console.log('cityData', cityData);
  dispatch({
    type: 'ADD_TO_CURRENT_CITIES',
    payload: cityData,
  });
};

// Takes in cityId to remove and the current list of Cities.
export const removeFromCurrent = (dispatch, cityId, currentCityState) => {
  const newState = currentCityState.filter(
    () => currentCityState.cityId !== cityId
  );

  dispatch({
    type: 'REMOVE_FROM_CURRENT_CITIES',
    payload: newState,
  });
};

// Takes in preferences to set the filter to.
export const updateFilter = async (dispatch, preferences) => {
  dispatch({
    type: 'UPDATE_FILTER',
    payload: preferences,
  });
};

export const toggleSearch = () => dispatch => {
  dispatch({
    type: 'TOGGLE_SEARCH',
  });
};

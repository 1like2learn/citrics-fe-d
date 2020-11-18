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

  axios
    .get(
      `https://en.wikipedia.org/api/rest_v1/page/media-list/${formatedCityName}`
    )
    .then(response => {
      cityData.wikiimageurl = response.data.items[0].srcset[0].src;
    })
    .catch(error => console.log(error));

  axios
    .get(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${formatedCityName}`
    )
    .then(response => {
      cityData.summary = response.data.extract;
    })
    .catch(error => console.log(error));

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

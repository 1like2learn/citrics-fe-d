const initialState = {
  currentCities: [],
  allCities: [],
  filter: {},
};

export const currentCityReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'GRAB_ALL_CITIES':
      return {
        ...state,
        allCities: action.payload,
      };
    case 'ADD_TO_CURRENT_CITIES':
      console.log('action: ', action);
      return {
        ...state,
        currentCities: [...state.currentCities, action.payload],
      };
    case 'REMOVE_FROM_CURRENT_CITIES':
      return {
        ...state,
        currentCities: state.currentCities,
      };
    case 'UPDATE_FILTER':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

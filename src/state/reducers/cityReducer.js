const initialState = {
  currentCities: [],
  allCities: [],
  filter: {},
  isSearching: true,
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
    case 'TOGGLE_SEARCH':
      return {
        ...state,
        isSearching: !state.isSearching,
      };
    default:
      return state;
  }
};

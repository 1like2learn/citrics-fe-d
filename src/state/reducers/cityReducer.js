const initialState = {
  currentCities: [],
  allCities: [],
  filter: {},
  rangeFilter: {},
};

export const currentCityReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'GRAB_ALL_CITIES':
      return {
        ...state,
        allCities: action.payload,
      };
    case 'ADD_TO_CURRENT_CITIES':
      return {
        ...state,
        currentCities: [...state.currentCities, action.payload],
      };
    case 'REMOVE_FROM_CURRENT_CITIES':
      return {
        ...state,
        currentCities: action.payload,
      };
    case 'UPDATE_FILTER':
      return {
        ...state,
        filter: action.payload,
      };
    case 'UPDATE_RANGE_FILTER':
      return {
        ...state,
        rangeFilter: action.payload,
      };
    default:
      return state;
  }
};

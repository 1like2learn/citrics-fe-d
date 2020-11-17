import { combineReducers } from 'redux';
import { searchBarReducers } from './searchBarReducers';
import { cardContainerReducers } from './cardContainerReducers';
import { cityCardReducers } from './cityCardReducers';
import { userReducers } from './userReducers';

export default combineReducers({
  searchBar: searchBarReducers,
  cardContainer: cardContainerReducers,
  cityCard: cityCardReducers,
  userData: userReducers,
});

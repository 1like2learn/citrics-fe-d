import React, { useState } from 'react';
import { HeaderBar, SearchBar } from './style';
import { FaUserCircle, FaSearch } from 'react-icons/fa';
import logo from '../../../assets/citricslogo.svg';

export default function CitySearchHeader() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChanges = e => {
    e.preventDefault();
    setSearchTerm({ ...searchTerm, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <HeaderBar>
        <div className="left">
          <img src={logo} alt="citrics logo" />
          <div className="search">
            <SearchBar className="sb-dis">
              <label name="term" htmlFor="term">
                <input
                  name="term"
                  value={searchTerm.term}
                  onChange={handleChanges}
                  placeholder="search"
                  type="text"
                />
              </label>
              <div className="search-icon-container">
                <FaSearch className="search-icon" />
              </div>
            </SearchBar>
            <div className="aside">
              <p>Advanced Search</p>
            </div>
          </div>
        </div>

        <div className="right">
          <FaUserCircle size="42px" />
        </div>
      </HeaderBar>
    </div>
  );
}

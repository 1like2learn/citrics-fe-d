import React, { useState } from 'react';
import { HeaderBar, SearchBar } from './style';
import { FaSearchengin } from 'react-icons/fa';

export default function CitySearchHeader() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChanges = e => {
    e.preventDefault();
    setSearchTerm({ ...searchTerm, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <HeaderBar>
        <div className="search">
          <SearchBar className="sb-dis">
            <label name="term" htmlFor="term">
              <input
                name="term"
                value={searchTerm.term}
                onChange={handleChanges}
                placeholder="Start your search..."
                type="text"
              />
            </label>
          </SearchBar>

          <div className="aside">
            <p>
              Advanced <br /> Search
            </p>{' '}
            &nbsp;
            <FaSearchengin size="25px" />
          </div>
        </div>

        <div className="right">
          <button className="login">Login</button>
          <button>Compare Cities</button>
        </div>
      </HeaderBar>
    </div>
  );
}

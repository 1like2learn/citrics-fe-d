import { AutoComplete } from 'antd';
import 'antd/dist/antd.css';
import React, { useEffect, useState } from 'react';

const { Option } = AutoComplete;

function SearchBar(props) {
  const cityDict = {};

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://labs28-d-citrics-api.herokuapp.com/cities/allid')
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        setData(data);
      });
  }, []);

  function term(cityName) {
    single(cityDict[cityName]);
  }

  function single(id) {
    fetch(`https://labs28-d-citrics-api.herokuapp.com/cities/city/${id}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
      });
  }

  return (
    <div className="search-bar">
      <AutoComplete
        className="search-bar"
        onSelect={term}
        placeholder="Search for a city . . . ."
        filterOption={true}
        style={{ width: '100%' }}
      >
        {data.map(city => {
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
export default SearchBar;

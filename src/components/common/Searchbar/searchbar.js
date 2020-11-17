import { AutoComplete } from 'antd';
import 'antd/dist/antd.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const { Option } = AutoComplete;

function SearchBar(props) {

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://labs28-d-citrics-api.herokuapp.com/cities/allid')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, [])

    function single(id) {
        fetch(`https://labs28-d-citrics-api.herokuapp.com/cities/city/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }

  return (
    <div className="search-bar"> 
      <AutoComplete
        className="search-bar"
        onSelect={() => single(city.cityid)}
        placeholder="Search for a city . . . ."    
        filterOption={true}
        style={{width:'100%'}}
      >
        {data.map((city) => {return (
            <Option key={city.cityid} value={city.citynamestate}>
            </Option>  
            
          );
        })}
      </AutoComplete>   
    </div>
  );
}
export default SearchBar;



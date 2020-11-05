import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from '../../../styles/images/logo.png';
import { FaSearchengin, FaUserCircle, FaRegPlusSquare } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchCities } from '../store/actions/searchBarActions';

const HeaderBar = styled.div`
  display: flex;
  width: 100%;
  height: 15vh;
  align-items: center;
  margin: 0 auto;
  justify-content: space-around;
  background-color: #c4c4c4;

  .left {
    display: flex;
    align-items: center;
    width: 20%;
    margin: 1% 0 1% 2%;

    h1 {
      font-family: 'Norwester', sans serif;
      text-transform: uppercase;
      font-size: 2rem;
      align-items: flex-start;
      letter-spacing: 3px;
      color: #d35540;
    }

    h3 {
      font-size: 0.45rem;
      font-family: 'Montserrat', sans-serif;
      text-transform: uppercase;
    }

    div {
      display: flex;
      flex-direction: column;
      margin: 0 2%;
      align-items: flex-start;
    }
  }

  .search {
    text-align: center;
    display: flex;
    width: 55%;
    margin: 2% 2.5% 2% 0;
  }

  .right {
    display: flex;
    align-items: center;
    align-content: flex-end;
    width: 15%;
    margin: 2% 0;

    .profile {
      margin: 0 15%;
    }

    div {
      display: flex;
      font-size: 0.5rem;
      align-items: flex-end;
      margin: 1% 0 1% 5%;
      color: #d35540;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-content: center;
  align-items: center;
  justify-content: space-evenly;
  height: 50vh;

  .split {
    flex-direction: row;
    display: flex;
    align-content: center;
    align-items: center;
    width: 50%;
  }

  .float {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 1%;
    font-size: 2.5rem;
    text-align: center;

    div {
      display: flex;
      text-align: center;
      position: relative;
      justify-content: center;
      left: -27.5px;
      font-size: 1rem;
      background-color: #d35540;
      width: 100px;
      border-radius: 30px;
      color: #ffffff;
    }
  }

  .icons {
    margin: 45%;
    border-radius: 10px;
    background-color: #c4c4c4;
  }

  .bottom {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const SearchBar = styled.form`
  width: 60%;
  padding: 20px;

  input {
    position: relative;
    display: flex;
    border-radius: 25px;
    border: 0;
    display: inline-block;
    width: 150%;
    text-align: center;
  }
`;

const Bottom = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  div {
    width: 75%;
    margin: 1% auto;
    text-align: center;
    font-size: 0.75rem;
  }
`;

const searchable = {
  term: '',
};

export const ComparisonPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const cities = useSelector(state => state.cityData);
  // const searching = useSelector(state => state.isSearching);
  // const cityOne = useSelector(state => state.cityOne);
  // const cityTwo = useSelector(state => state.cityTwo);
  const [searchTerm, setSearchTerm] = useState(searchable);

  const handleChanges = e => {
    e.preventDefault();
    setSearchTerm({ ...searchTerm, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  return (
    <>
      <HeaderBar>
        <div className="left">
          <img src={logo} alt="Citrics Logo" height="40px" />

          <div>
            <h1>CITRICS</h1>
            <h3>A nomad's guide to the city</h3>
          </div>
        </div>

        <div className="search">
          {{
            /* searching 
                        
                        ?

                        <SearchBar className='sb-dis'>
                            <label name='term' htmlFor='term'>
                                <input name='term' value={searchTerm.term} 
                                onChange={handleChanges} placeholder='Start your search...' 
                                type='text' />
                            </label>
                        </SearchBar>

                        : 
                        null */
          }}
        </div>

        <div className="right">
          <div>
            <p>
              Advanced <br /> Search
            </p>{' '}
            &nbsp;
            <FaSearchengin size="25px" />
          </div>
          <FaUserCircle className="profile" size="30px" />
        </div>
      </HeaderBar>
      <Container>
        <div className="split">
          {{
            /* cityOne

                    ?

                    <div>
                        
                        <img src={cityOne.img} alt={cityOne.imagAlt} size='????'>
                        <div>
                            <Graph
                                cityOne.details.map(dets => {
                                    return (
                                        <line src={} />
                                        <line src={} />
                                    )
                                })
                            />
                        </div>
                        <div>
                                <Details 
                                    <h3></h3>
                                    <h3></h3>
                                    <h3></h3>
                                />
                        </div>  
                        
                    </div>

                    :

                    <div className='icons'>
                        <FaRegPlusSquare size='50px' />
                    </div> */
          }}
        </div>

        <div className="float">
          vs.
          <br />
          <br />
          <div>
            <p>COMPARE</p>
          </div>
        </div>

        <div className="split">
          {{
            /* cityTwo ?

                    <div>
                        
                        <img src={cityTwo.img} alt={cityTwo.imagAlt} size='????'>
                        <div>
                            <Graph
                                cityTwo.details.map(dets => {
                                    return (
                                        <line src={} />
                                        <line src={} />
                                    )
                                })
                            />
                        </div>
                        <div>
                                <Details 
                                    <h3></h3>
                                    <h3></h3>
                                    <h3></h3>
                                />
                        </div>  
                        
                    </div>

                    :

                    <div className='icons'>
                        <FaRegPlusSquare size='50px' />
                    </div> */
          }}
        </div>
      </Container>

      <Bottom className="bottom">
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nisi,
            ridiculus amet in diam. Cras ipsum lacus, amet adipiscing risus
            egestas. Aenean porttitor tortor ridiculus ligula non at. Aliquet
            viverra elit maecenas lorem nascetur tellus quam. Consectetur dictum
            nulla tristique eget faucibus placerat morbi feugiat. Praesent
            turpis porta aliquam ut vel ultricies hendrerit. Volutpat ac
            pulvinar in sed fringilla egestas mattis suspendisse. Turpis tortor
            sagittis natoque pellentesque turpis. Urna rhoncus, elementum et
            pellentesque donec sed amet. Adipiscing quisque mollis sagittis
            bibendum lectus. Id justo ut viverra sem consectetur ullamcorper
            mauris. Sagittis suscipit ut eu platea molestie eu. Tristique et,
            turpis viverra semper ut commodo at.{' '}
          </p>
          <p>
            Tempor aliquet cursus scelerisque lobortis augue non habitasse hac.
            Interdum fermentum.
          </p>
        </div>
      </Bottom>
    </>
  );
};

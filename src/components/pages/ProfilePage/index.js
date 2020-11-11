import React, { useState } from 'react';
import styled from 'styled-components';
import { Header } from '../ComparisonPage/Header';
import { FaUserCircle } from 'react-icons/fa';

const Container = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;

  .left {
    display: flex;
    width: 45%;
    flex-direction: column;
    justify-content: center;

    div {
      margin: 5%;
    }

    .notcard {
      display: flex;
    }
  }

  .middle,
  .right {
    display: flex;
    width: 25%;
    flex-direction: column;

    div {
      margin: 5% 0;
    }
  }

  .logout {
    width: 50%;
    background-color: orange;
  }
`;

export const ProfilePage = () => {
  const [userPhoto, setUserPhoto] = useState();
  return (
    <>
      <Header />
      <Container>
        <div className="left">
          <div className="profilePicture">
            {userPhoto ? (
              <div className="notcard">
                <img
                  src={userPhoto}
                  width="250px"
                  alt="{username}'s profile display pic"
                />
              </div>
            ) : (
              <div className="notcard">
                <FaUserCircle size="250px" />

                <div>
                  <h3>Name</h3>
                  <h3>Email</h3>
                  <h3>Current Location</h3>
                </div>
              </div>
            )}
          </div>

          <div>
            <div>
              <h3>Activity History</h3>
              <button>Delete History</button>
            </div>
            <ul>
              {/* {recentActivity.map(c => {
                            return (
                                <li>{c.name}</li>
                                <button onClick={}></button>
                            )
                        })} */}
            </ul>
          </div>
        </div>
        <div className="middle">
          <div>
            <h2>Favorite Cities</h2>
            <ul>
              {/* {favoriteCities.map(c => {
                            return (
                                <li>{c.name}</li>
                                <button onClick={}></button>
                            )
                        })} */}
            </ul>
          </div>
        </div>

        <div className="right">
          <div>
            <button className="logout">Logout</button>
          </div>
        </div>
      </Container>
    </>
  );
};

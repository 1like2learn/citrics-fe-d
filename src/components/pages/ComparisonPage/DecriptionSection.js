import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Bottom = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 2% 0;

  div {
    width: 75%;
    margin: 1% auto;
    text-align: center;
    font-size: 0.75rem;
  }
`;

export const DescriptionSection = () => {
  return (
    <Bottom className="bottom">
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nisi,
          ridiculus amet in diam. Cras ipsum lacus, amet adipiscing risus
          egestas. Aenean porttitor tortor ridiculus ligula non at. Aliquet
          viverra elit maecenas lorem nascetur tellus quam. Consectetur dictum
          nulla tristique eget faucibus placerat morbi feugiat. Praesent turpis
          porta aliquam ut vel ultricies hendrerit. Volutpat ac pulvinar in sed
          fringilla egestas mattis suspendisse. Turpis tortor sagittis natoque
          pellentesque turpis. Urna rhoncus, elementum et pellentesque donec sed
          amet. Adipiscing quisque mollis sagittis bibendum lectus. Id justo ut
          viverra sem consectetur ullamcorper mauris. Sagittis suscipit ut eu
          platea molestie eu. Tristique et, turpis viverra semper ut commodo at.
          Tempor aliquet cursus scelerisque lobortis augue non habitasse hac.
          Interdum fermentum.
        </p>
      </div>
    </Bottom>
  );
};

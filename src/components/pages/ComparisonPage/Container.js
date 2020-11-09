import React, { useState } from 'react';
import styled from 'styled-components';
import { DescriptionSection } from './DecriptionSection';
import { Header } from './Header';
import { MainVisual } from './MainVisual';

export const Container = () => {
  return (
    <>
      <Header />
      <MainVisual />
      <DescriptionSection />
    </>
  );
};

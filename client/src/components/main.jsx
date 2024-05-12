import React from 'react';
import { CustomH1 } from './main/custom_h1_component/custom_h1';
import BackgroundWithDollarSigns from './main/background_with_dollar_signs';
import Features from './features_section';
import { useState, useEffect } from 'react';
import JsonData from '../store/data.json';

const Main = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <BackgroundWithDollarSigns />
      <CustomH1 data="Take Control of Your Finances with Cash Canvas" />
      <CustomH1 data="Manage, Track, and Save" />
      <Features data={landingPageData.Features} />
    </div>
  );
};

export default Main;

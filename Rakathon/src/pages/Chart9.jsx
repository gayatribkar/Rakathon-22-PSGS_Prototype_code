import React from 'react';
import { ChartsHeader } from '../components';

const Chart9 = () => {

  return (
    <div className="m-4 mr-32 ml-32 mt-5 p-5 bg-white bg rounded-3xl">
    <ChartsHeader category="Scatter" title="Scatter Plot of Revenue verses Frequency" />
    <div className="w-full">
    <img class="w-full" src="https://i.postimg.cc/B6LKsc6f/scatter3.png" alt="Forest" height= "420" />
    </div>
  </div>
  );
};

export default Chart9;
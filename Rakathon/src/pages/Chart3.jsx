import React from 'react';

import { ChartsHeader, LineChart } from '../components';

const Chart3 = () => (
  <div className="m-4 mr-32 ml-32 mt-5 p-5  bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <ChartsHeader category="Line" title="Montly Revenue from Dec. 2009 to Dec. 2011" />
    <div className="w-full">
      <LineChart />
    </div>
  </div>
);

export default Chart3;

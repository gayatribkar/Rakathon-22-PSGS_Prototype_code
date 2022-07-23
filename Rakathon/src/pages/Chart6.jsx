import React from 'react';
import { ChartsHeader, SparkLine2 } from '../components';

const Chart6 = () => {

  return (
    <div className="m-4 mr-32 ml-32 mt-5 p-5 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <ChartsHeader category="Histogram" title="Customers with Purchase Frequency less than 1200" />
    <div className="w-full">
    <SparkLine2 />
    </div>
  </div>
  );
};

export default Chart6;
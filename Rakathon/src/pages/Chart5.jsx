import React from 'react';
import { ChartsHeader, SparkLine } from '../components';

const Chart5 = () => {

  return (
    <div className="m-4 mr-32 ml-32 mt-5 p-5 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <ChartsHeader category="Histogram" title="Customers Recency in Days" />
    <div className="w-full">
    <SparkLine />
    </div>
  </div>
  );
};

export default Chart5;


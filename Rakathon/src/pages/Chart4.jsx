import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel } from '@syncfusion/ej2-react-charts';
import { ChartsHeader } from '../components';
import { barCustomSeries3, barPrimaryXAxis3, barPrimaryYAxis3 } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Chart4 = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 mr-32 ml-32 mt-5 p-5 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Bar" title="Country Revenue in Percentage" />
      <div className=" w-full">
        <ChartComponent
          id="charts"
          primaryXAxis={barPrimaryXAxis3}
          primaryYAxis ={barPrimaryYAxis3}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          legendSettings={{ background: 'white' }}
        >
          <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
          <SeriesCollectionDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {barCustomSeries3.map((item, index) => <SeriesDirective key={index} {...item} pointColorMapping='color'/>)}
          </SeriesCollectionDirective>

          
        </ChartComponent>
        
      </div>

      
    </div>


  );
};

export default Chart4;
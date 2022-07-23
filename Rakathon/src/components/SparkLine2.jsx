import React from 'react';
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';
import { SparklineAreaData2 } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const SparkLine2 = () => {
    const { currentMode } = useStateContext();
  
    return (
      <SparklineComponent
        id="column-sparkLine"
        height="420px"
        chartArea={{ border: { width: 0 } }}
        lineWidth={1}
        valueType="Numeric"
        fill={"#00bdae"}
        border={{ color: "#00bdae", width: 2 }}
        tooltipSettings={{
          visible: true,
          // eslint-disable-next-line no-template-curly-in-string
          format: "${x} count ${yval}",
          trackLineSettings: {
            visible: true,
          },
        }}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        dataSource={SparklineAreaData2}
        markerSettings={{ visible: ['All'], size: 2.5, fill: "#00bdae" }}
        xName="x"
        yName="yval"
        type="Column"
      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
    );
};

export default SparkLine2;
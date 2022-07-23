import React from 'react';
import { FiPieChart, FiUser, FiBarChart2 } from 'react-icons/fi';


export const links = [
  {
 
    links: [
      {
        name: 'Visualisation',
        icon: <FiBarChart2 style={{color: 'rgb(3, 201, 215)'}}/>,
      },
      {
        name: 'Estimation',
        icon: <FiPieChart style={{color: 'rgb(3, 201, 215)'}}/>,
      },
      // {
      //   name: 'Recommendation',
      //   icon: <FiPieChart style={{color: 'rgb(3, 201, 215)'}}/>,
      // },
      {
        name: 'About',
        icon: <FiUser style={{color: 'rgb(3, 201, 215)'}}/>,
      },
     
    ],
  },
];

export const barPrimaryXAxis = {
  valueType: "Category",
  interval: 1,
  majorGridLines: { width: 0 },
  labelStyle: { color: "#00bdae" },
};
export const barPrimaryYAxis = {
  majorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  lineStyle: { width: 0 },
  labelStyle: { color: "transparent" },
};

export const barChartData = [
  { x: "WORLD WAR 2 GLIDERS ASST DESIGNS - 5.17%", y: 110138, color: "#826754" },
  { x: "ASSORTED COLOUR BIRD ORNAMENT - 3.84%", y: 81809, color: "#645E9D" },
  { x: "PAPER CRAFT , LITTLE BIRDIE - 3.81%", y: 80995 ,color: "#EF2D56"},
  { x: "BROCADE RING PURSE - 3.36%", y: 71430 ,color: "#EEF36A"},
  { x: "ASSORTED COLOURS SILK FAN - 2.08%", y: 44365	 ,color: "#FE5F55"},
  { x: "COLOUR GLASS T-LIGHT HOLDER HANGING - 1.92%", y: 40839 ,color: "#C47AC0"},
  { x: "PACK OF 60 DINOSAUR CAKE CASES - 1.48%", y: 31575	,color: "#4381C1" },
  { x: "JUMBO BAG BAROQUE BLACK WHITE - 1.47%", y: 31266 },
  { x: "HANGING JAM JAR T-LIGHT HOLDER - 1.45%", y: 30764	,color: "#F72585" },
  { x: "HANGING HEART ZINC T-LIGHT HOLDER - 1.28%", y: 	27231 ,color: "#0FFF95"},
];

export const barCustomSeries = [
  {
    dataSource: barChartData,
    xName: "x",
    yName: "y",
    type: "Column",
    marker: {
      dataLabel: {
        visible: true,
        position: "Top",
        font: { fontWeight: "600", color: "#ffffff" },
      },
    },
  },
];

export const barPrimaryXAxis2 = {
  valueType: "Category",
  interval: 1,
  majorGridLines: { width: 0 },
  labelStyle: { color: "#00bdae" },
};
export const barPrimaryYAxis2 = {
  majorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  lineStyle: { width: 0 },
  labelStyle: { color: "transparent" },
};

export const barChartData2 = [
  { x: "United Kingdom - 90.85%", y: 5410, color: "#826754" },
  { x: "Germany	 - 1.80%", y: 107, color: "#645E9D" },
  { x: "France - 1.60%", y: 95 ,color: "#EF2D56"},
  { x: "Spain - 0.69%", y: 41 ,color: "#EEF36A"},
  { x: "Belgium - 0.49%", y: 29	 ,color: "#FE5F55"},
  { x: "Portugal - 0.40%", y: 24 ,color: "#C47AC0"},
  { x: "Netherlands - 0.39%", y: 23	,color: "#4381C1" },
  { x: "Switzerland - 0.37%", y: 22 },
  { x: "Sweden - 0.32%", y: 19	,color: "#F72585" },
  { x: "Italy - 0.29%", y: 	17 ,color: "#0FFF95"},
  { x: "Finland - 0.25%", y: 	15 ,color: "#0FFF95"},
];

export const barCustomSeries2 = [
  {
    dataSource: barChartData2,
    xName: "x",
    yName: "y",
    type: "Column",
  },
];

export const barPrimaryXAxis3 = {
  valueType: "Category",
  interval: 1,
  majorGridLines: { width: 0 },
  labelStyle: { color: "#00bdae" },
};
export const barPrimaryYAxis3 = {
  majorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  lineStyle: { width: 0 },
  labelStyle: { color: "transparent" },
};

export const barChartData3 = [
  { x: "United Kingdom - 82.93%", y: 13806423.03, color: "#826754" },
  { x: "EIRE	 - 3.47	%", y: 578501.63, color: "#645E9D" },
  { x: "Netherlands - 3.29%", y: 548524.95 ,color: "#EF2D56"},
  { x: "Germany	 - 2.51%", y: 417988.56 ,color: "#EEF36A"},
  { x: "France - 1.96%", y: 326504.67 ,color: "#FE5F55"},
  { x: "Australia - 1.00%", y: 167129.07 ,color: "#C47AC0"},
  { x: "Switzerland - 0.60%", y: 99082.81	,color: "#4381C1" },
  { x: "Spain -0.55 %", y: 91859.48 },
  { x: "Sweden - 0.53%", y: 87455.42, color: "#F72585" },
  { x: "Denmark - 0.39%", y: 	65741.09 ,color: "#0FFF95"},
  { x: "Belgium - 0.38%", y: 	63574.49 ,color: "#0FFF95"},
];

export const barCustomSeries3 = [
  {
    dataSource: barChartData3,
    xName: "x",
    yName: "y",
    type: "Column",
  },
];

export const lineChartData = [
  [
    { x: new Date("2009-12-02"), y: 663272.05 },
    { x: new Date("2010-01-05"), y: 531952.902 },
    { x: new Date("2010-02-02"), y: 489399.586 },
    { x: new Date("2010-03-02"), y: 635996.481 },
    { x: new Date("2010-04-02"), y: 560635.022 },
    { x: new Date("2010-05-02"), y: 559924.55 },
    { x: new Date("2010-06-02"), y: 571459.91 },
    { x: new Date("2010-07-02"), y: 562785.9 },
    { x: new Date("2010-08-05"), y: 587256.46 },
    { x: new Date("2010-09-02"), y: 781033.301 },
    { x: new Date("2010-10-02"), y: 964989.78 },
    { x: new Date("2010-11-02"), y: 1134879.282 },
    { x: new Date("2010-12-02"), y: 859227.37 },
    { x: new Date("2011-01-02"), y: 475074.38 },
    { x: new Date("2011-02-02"), y: 436546.15 },
    { x: new Date("2011-03-02"), y: 579964.61 },
    { x: new Date("2011-04-02"), y: 426047.851 },
    { x: new Date("2011-05-02"), y: 648251.08 },
    { x: new Date("2011-06-02"), y: 608013.16 },
    { x: new Date("2011-07-05"), y: 574238.481 },
    { x: new Date("2011-08-02"), y: 616368.0 },
    { x: new Date("2011-09-02"), y: 931440.372 },
    { x: new Date("2011-10-02"), y: 974603.59 },
    { x: new Date("2011-11-02"), y: 1132407.74 },
    { x: new Date("2011-12-02"), y: 342524.38 },
  ],
];

export const lineCustomSeries = [
  {
    dataSource: lineChartData[0],
    xName: "x",
    yName: "y",
    name: "Products",
    width: "2",
    marker: { visible: true, width: 10, height: 10 },
    type: "Line",
  },
];

export const LinePrimaryXAxis = {
  valueType: "DateTime",
  title: "Month",
  skeleton: "yMMM",
  labelStyle: { color: "#00bdae" },
  edgeLabelPlacement: "Shift",
  majorGridLines: { width: 0 },
  background: "white",
};

export const LinePrimaryYAxis = {
  labelFormat: "{value}",
  rangePadding: "None",
  labelStyle: { color: "#00bdae" },
  minimum: 0,
  maximum: 1132407.74,
  interval: 130000,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};

export const SparklineAreaData = [
  { x: 0, xval: "0-19", yval: 683 },
  { x: 1, xval: "20-39", yval: 473 },
  { x: 2, xval: "40-59", yval: 374 },
  { x: 3, xval: "60-79", yval: 281 },
  { x: 4, xval: "80-99", yval: 267 },
  { x: 5, xval: "100-119", yval: 253 },
  { x: 6, xval: "120-139", yval: 133 },
  { x: 7, xval: "140-159", yval: 171 },
  { x: 8, xval: "160-179", yval: 169 },
  { x: 9, xval: "180-199", yval: 137 },

  { x: 10, xval: "200-219", yval: 129 },
  { x: 11, xval: "220-239", yval: 84 },
  { x: 12, xval: "240-259", yval: 51 },
  { x: 13, xval: "260-279", yval: 244 },
  { x: 14, xval: "280-299", yval: 304 },
  { x: 15, xval: "300-319", yval: 226 },
  { x: 16, xval: "320-339", yval: 235 },
  { x: 17, xval: "340-359", yval: 117 },

  { x: 18, xval: "360-379", yval: 103 },
  { x: 19, xval: "380-399", yval: 63 },
  { x: 20, xval: "400-419", yval: 75 },
  { x: 21, xval: "420-439", yval: 68 },
  { x: 22, xval: "440-459", yval: 87 },
  { x: 23, xval: "460-479", yval: 82 },
  { x: 24, xval: "480-499", yval: 83 },
  { x: 25, xval: "500-519", yval: 65 },
  { x: 26, xval: "520-539", yval: 72 },
  { x: 27, xval: "540-559", yval: 62 },
  { x: 28, xval: "560-579", yval: 67 },

  { x: 29, xval: "580-599", yval: 52 },
  { x: 30, xval: "600-619", yval: 9 },
  { x: 31, xval: "620-639", yval: 105 },
];

export const SparklineAreaData2 = [
  { x: 0, xval: "0-19", yval: 1175 },
  { x: 1, xval: "20-39", yval: 872 },
  { x: 2, xval: "40-59", yval: 622 },
  { x: 3, xval: "60-79", yval: 397 },
  { x: 4, xval: "80-99", yval: 334 },
  { x: 5, xval: "100-119", yval: 234 },
  { x: 6, xval: "120-139", yval: 189 },
  { x: 7, xval: "140-159", yval: 173 },
  { x: 8, xval: "160-179", yval: 142 },
  { x: 9, xval: "180-199", yval: 115 },
  { x: 10, xval: "200-219", yval: 104 },
  { x: 11, xval: "220-239", yval: 85 },
  { x: 12, xval: "240-259", yval: 89 },
  { x: 13, xval: "260-279", yval: 73 },
  { x: 14, xval: "280-299", yval: 61 },
  { x: 15, xval: "300-319", yval: 56 },
  { x: 16, xval: "320-339", yval: 39 },
  { x: 17, xval: "340-359", yval: 51 },

  { x: 18, xval: "360-379", yval: 38 },
  { x: 19, xval: "380-399", yval: 41 },
  { x: 20, xval: "400-419", yval: 22 },
  { x: 21, xval: "420-439", yval: 21 },
  { x: 22, xval: "440-459", yval: 21 },
  { x: 23, xval: "460-479", yval: 26 },
  { x: 24, xval: "480-499", yval: 19 },
  { x: 25, xval: "500-519", yval: 14 },
  { x: 26, xval: "520-539", yval: 18 },
  { x: 27, xval: "540-559", yval: 16 },
  { x: 28, xval: "560-579", yval: 9 },

  { x: 29, xval: "580-599", yval: 11 },
  { x: 30, xval: "600-619", yval: 13 },
];


import React from 'react';

const ChartsHeader = ({ category, title }) => (
  <div className=" mb-18">
    <div>
      <p className="text-lg text-gray-400">Chart</p>
      <p className="text-3xl font-extrabold tracking-tight dark:text-gray-200 text-slate-900">{category}</p>
    </div>
    <p className="text-center dark:text-gray-200 text-xl mb-2 mt-3 " style={{fontWeight :"bold"}}>{title}</p>
  </div>
);

export default ChartsHeader;
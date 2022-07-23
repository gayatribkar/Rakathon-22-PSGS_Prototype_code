import React from 'react';
import "./css.css"
// import { ChartsHeader } from '../components';


const Estimation = () => {
  function callApi() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))// Parsing the data into a JavaScript object
      .then(json => alert(JSON.stringify(json))) // Displaying the stringified data in an alert popup
  }
  // function callApi() {
  //   alert('Button was pressed!');
  // }
  return (
     <div className="m-4 md:m-10 mt-24 p-10 bg-white  dark:bg-secondary-dark-bg bg rounded-3xl">
       
  <center><div class="font-bold text-xl mb-2" style={{color:"grey"}}>Individual product quantity percentage</div></center>    
<form class="searchbox">
        <input type="search" placeholder="chair" />
        <button type="submit" value="search" onClick={callApi}>&nbsp;</button>
    </form>
     <h3 style={{color:"grey"}}>avg_quantity: 37</h3>
     <h3 style={{color:"grey"}}>avg_revenue: 448</h3>
     <h3 style={{color:"grey"}}>avg_selling_price: 15</h3>
  </div>
  );
};


export default Estimation;
